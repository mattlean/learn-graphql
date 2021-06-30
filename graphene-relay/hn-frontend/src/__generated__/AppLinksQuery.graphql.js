/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LinkList_links$ref = any;
export type AppLinksQueryVariables = {||};
export type AppLinksQueryResponse = {|
  +relayLinks: ?{|
    +$fragmentRefs: LinkList_links$ref
  |}
|};
export type AppLinksQuery = {|
  variables: AppLinksQueryVariables,
  response: AppLinksQueryResponse,
|};
*/


/*
query AppLinksQuery {
  relayLinks {
    ...LinkList_links
  }
}

fragment LinkList_links on LinkNodeConnection {
  edges {
    node {
      ...Link_link
      id
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
        "alias": null,
        "args": null,
        "concreteType": "LinkNodeConnection",
        "kind": "LinkedField",
        "name": "relayLinks",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "LinkList_links"
          }
        ],
        "storageKey": null
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
    "cacheID": "fc0d37842064a9326c234322f2f24824",
    "id": null,
    "metadata": {},
    "name": "AppLinksQuery",
    "operationKind": "query",
    "text": "query AppLinksQuery {\n  relayLinks {\n    ...LinkList_links\n  }\n}\n\nfragment LinkList_links on LinkNodeConnection {\n  edges {\n    node {\n      ...Link_link\n      id\n    }\n  }\n}\n\nfragment Link_link on LinkNode {\n  id\n  description\n  url\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '3c382f8f76b92e6aa614a533f9018c83';

module.exports = node;
