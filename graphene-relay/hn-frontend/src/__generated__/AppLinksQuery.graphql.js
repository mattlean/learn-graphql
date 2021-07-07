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
  relayLinks {
    edges {
      node {
        ...Link_link
        id
      }
    }
  }
}

fragment Link_link on LinkNode {
  id
  description
  url
}
*/

const node/*: ConcreteRequest*/ = {
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
        "args": null,
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ac2ad92671d85581c7310a0e876c804b",
    "id": null,
    "metadata": {},
    "name": "AppLinksQuery",
    "operationKind": "query",
    "text": "query AppLinksQuery {\n  ...LinkList_relayLinks\n}\n\nfragment LinkList_relayLinks on Query {\n  relayLinks {\n    edges {\n      node {\n        ...Link_link\n        id\n      }\n    }\n  }\n}\n\nfragment Link_link on LinkNode {\n  id\n  description\n  url\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '5c19b7f11581079626076c7eca3b4161';

module.exports = node;
