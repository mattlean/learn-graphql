import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'

function Link({ linkQueryRef }) {
  const link = useFragment(
    graphql`
      fragment Link_link on LinkNode {
        id
        description
        url
      }
    `,
    linkQueryRef
  )

  return (
    <div>
      <div>
        {link.description} ({link.url})
      </div>
    </div>
  )
}

export default Link
