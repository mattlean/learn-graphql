import graphql from 'babel-plugin-relay/macro'
import { useState } from 'react'
import { useMutation } from 'react-relay'

function CreateLink() {
  const [description, setDescription] = useState()
  const [url, setURL] = useState()

  const [commit, isInFlight] = useMutation(
    graphql`
      mutation CreateLinkMutation($input: RelayCreateLinkInput!) {
        relayCreateLink(input: $input) {
          link {
            id
            url
            description
          }
        }
      }
    `
  )

  console.log('isInFlight', isInFlight)

  return (
    <div>
      <div>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="A description for the link"
        />
        <input
          value={url}
          onChange={(e) => setURL(e.target.value)}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <button
        onClick={() => {
          commit({
            variables: {
              input: {
                description,
                url,
                clientMutationId: '',
              },
            },
            onCompleted: () => {
              console.log('Mutation completed')
            },
            onError: (err) => console.error(err),
          })
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default CreateLink
