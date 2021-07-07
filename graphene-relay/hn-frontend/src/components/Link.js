import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'

function Link({ linkRef }) {
  const { description, url } = useFragment(
    graphql`
      fragment Link_link on LinkNode {
        id
        description
        url
      }
    `,
    linkRef
  )

  return (
    <div>
      <div>
        {description} ({url})
      </div>
    </div>
  )
}

export default Link
