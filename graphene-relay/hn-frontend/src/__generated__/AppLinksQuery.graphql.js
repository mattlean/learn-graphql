/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LinkList_relayLinks$ref = any;
export type AppLinksQueryVariables = {||};
export type AppLinksQueryResponse = {|
  +$fragmentRefs: LinkList_relayLinks$ref
|};
export type AppLinksQuery = {|
  variables: AppLinksQueryVariables,
  response: AppLinksQueryResponse,
|};
*/


/*
query AppLinksQuery {
  ...LinkList_relayLinks
}

fragment LinkList_relayLinks on Query {
  relayLinks(first: 5) {
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
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppLinksQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LinkList_relayLinks"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppLinksQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
        "storageKey": "relayLinks(first:5)"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "LinkList_relayLinks",
        "kind": "LinkedHandle",
        "name": "relayLinks"
      }
    ]
  },
  "params": {
    "cacheID": "c3a139915aaccee2209486f059430d03",
    "id": null,
    "metadata": {},
    "name": "AppLinksQuery",
    "operationKind": "query",
    "text": "query AppLinksQuery {\n  ...LinkList_relayLinks\n}\n\nfragment LinkList_relayLinks on Query {\n  relayLinks(first: 5) {\n    edges {\n      node {\n        ...Link_link\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Link_link on LinkNode {\n  id\n  description\n  url\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c19b7f11581079626076c7eca3b4161';

module.exports = node;
