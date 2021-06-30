import graphql from 'babel-plugin-relay/macro'
import React, { Suspense } from 'react'
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks'
import LinkList from './components/LinkList'
import RelayEnvironment from './RelayEnvironment'

// Define a query
const appQuery = graphql`
  query AppLinksQuery {
    relayLinks {
      ...LinkList_links
    }
  }
`

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQueryRef = loadQuery(RelayEnvironment, appQuery, {
  /* query variables */
})

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App({ preloadedQueryRef }) {
  const data = usePreloadedQuery(appQuery, preloadedQueryRef)

  const linksQueryRef = data.relayLinks
  if (!linksQueryRef) {
    throw new Error('Expected links to be defined')
  }

  return <LinkList linksQueryRef={linksQueryRef} />
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback="Loading...">
        <App preloadedQueryRef={preloadedQueryRef} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default AppRoot
