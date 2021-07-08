import graphql from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay'
import Link from './Link'

function LinkList({ relayLinksFragRef }) {
  const {
    data: { relayLinks },
    loadNext,
    refetch,
    hasNext,
    hasPrevious,
  } = usePaginationFragment(
    graphql`
      fragment LinkList_relayLinks on Query
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 5 }
      )
      @refetchable(queryName: "LinkListPaginationQuery") {
        relayLinks(first: $count, after: $cursor)
          @connection(key: "LinkList_relayLinks") {
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

  console.log('hasPrevious', hasPrevious)
  console.log('hasNext', hasNext)

  return (
    <div>
      {nodes.map((n) => {
        return <Link key={n.__id} linkRef={n} />
      })}
      <button onClick={() => loadNext(5)}>Add More</button>
      <button onClick={() => refetch({ count: 2 })}>Refetch first 2</button>
    </div>
  )
}

export default LinkList
