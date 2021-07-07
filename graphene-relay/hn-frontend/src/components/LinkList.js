import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import Link from './Link'

function LinkList({ relayLinksFragRef }) {
  const { relayLinks } = useFragment(
    graphql`
      fragment LinkList_relayLinks on Query {
        relayLinks {
          edges {
            node {
              ...Link_link
            }
          }
        }
      }
    `,
    relayLinksFragRef
  )

  const nodes =
    relayLinks && relayLinks.edges ? relayLinks.edges.map((l) => l?.node) : []

  return (
    <div>
      {nodes.map((n) => {
        return <Link key={n.__id} linkRef={n} />
      })}
    </div>
  )
}

export default LinkList
