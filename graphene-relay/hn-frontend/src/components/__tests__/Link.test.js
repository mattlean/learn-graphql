import graphql from 'babel-plugin-relay/macro'
import React, { Suspense } from 'react'
import { act, render, screen } from '@testing-library/react'
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'
import { RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay/hooks'
import Link from '../Link'

it('renders Link', () => {
  const environment = createMockEnvironment()
  function TestComponent() {
    const data = useLazyLoadQuery(
      graphql`
        query LinkQuery @relay_test_operation {
          myData: node(id: "test-id") {
            ...Link_link
          }
        }
      `,
      {}
    )
    // This never logs because this component never renders:
    console.log('useLazyLoadQuery data:', data)
    return <Link linkRef={data.myData} />
  }

  render(
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading">
        <TestComponent />
      </Suspense>
    </RelayEnvironmentProvider>
  )

  screen.debug()
  // TestComponent will be suspended, as it should start out as
  // <body>
  //   <div>
  //     Loading
  //   </div>
  // </body>

  expect(screen.queryByText('Loading')).toBeInTheDocument() // passes

  act(() => {
    environment.mock.resolveMostRecentOperation((operation) => {
      const graphQLResponse = MockPayloadGenerator.generate(operation)
      console.log('GraphQL Response:', graphQLResponse)
      // {
      //   data: {
      //     myData: {
      //       __typename: 'LinkNode',
      //       id: '<Node-mock-id-1>',
      //       description: '<mock-value-for-field-"description">',
      //       url: '<mock-value-for-field-"url">'
      //     }
      //   }
      // }
      return graphQLResponse
    })
  })

  screen.debug()
  // TestComponent will still be suspended, I want it to render by now
  // <body>
  //   <div>
  //     Loading
  //   </div>
  // </body>

  expect(
    screen.queryByText('<mock-value-for-field-"description">')
  ).toBeInTheDocument() // fails
})
