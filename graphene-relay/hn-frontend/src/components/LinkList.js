import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay'
import Link from './Link'

function LinkList({ linksQueryRef }) {
  const links = useFragment(
    graphql`
      fragment LinkList_links on LinkNodeConnection {
        edges {
          node {
            ...Link_link
          }
        }
      }
    `,
    linksQueryRef
  )

  const nodes = links && links.edges ? links.edges.map((l) => l?.node) : []

  return (
    <div>
      {nodes.map((n) => {
        return <Link key={n.__id} linkQueryRef={n} />
      })}
    </div>
  )
}

export default LinkList
