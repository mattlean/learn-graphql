/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LinkList_relayLinks$ref = any;
export type LinkListPaginationQueryVariables = {|
  count?: ?number,
  cursor?: ?string,
|};
export type LinkListPaginationQueryResponse = {|
  +$fragmentRefs: LinkList_relayLinks$ref
|};
export type LinkListPaginationQuery = {|
  variables: LinkListPaginationQueryVariables,
  response: LinkListPaginationQueryResponse,
|};
*/


/*
query LinkListPaginationQuery(
  $count: Int = 5
  $cursor: String
) {
  ...LinkList_relayLinks_1G22uz
}

fragment LinkList_relayLinks_1G22uz on Query {
  relayLinks(first: $count, after: $cursor) {
    edges {
      node {
        ...Link_link
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Link_link on LinkNode {
  id
  description
  url
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": 5,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LinkListPaginationQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          }
        ],
        "kind": "FragmentSpread",
        "name": "LinkList_relayLinks"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LinkListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LinkNodeConnection",
        "kind": "LinkedField",
        "name": "relayLinks",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LinkNodeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "LinkNode",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "LinkList_relayLinks",
        "kind": "LinkedHandle",
        "name": "relayLinks"
      }
    ]
  },
  "params": {
    "cacheID": "b9c6fe3f05f92c65b72ff251ba7cdd32",
    "id": null,
    "metadata": {},
    "name": "LinkListPaginationQuery",
    "operationKind": "query",
    "text": "query LinkListPaginationQuery(\n  $count: Int = 5\n  $cursor: String\n) {\n  ...LinkList_relayLinks_1G22uz\n}\n\nfragment LinkList_relayLinks_1G22uz on Query {\n  relayLinks(first: $count, after: $cursor) {\n    edges {\n      node {\n        ...Link_link\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Link_link on LinkNode {\n  id\n  description\n  url\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aed9e012961b85c1af939f49f861f028';

module.exports = node;
