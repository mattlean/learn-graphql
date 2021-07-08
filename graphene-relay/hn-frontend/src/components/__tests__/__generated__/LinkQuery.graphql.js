/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Link_link$ref = any;
export type LinkQueryVariables = {||};
export type LinkQueryResponse = {|
  +myData: ?{|
    +$fragmentRefs: Link_link$ref
  |}
|};
export type LinkQuery = {|
  variables: LinkQueryVariables,
  response: LinkQueryResponse,
|};
*/


/*
query LinkQuery {
  myData: node(id: "test-id") {
    __typename
    ...Link_link
    id
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
    "name": "id",
    "value": "test-id"
  }
],
v1 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LinkQuery",
    "selections": [
      {
        "alias": "myData",
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Link_link"
          }
        ],
        "storageKey": "node(id:\"test-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LinkQuery",
    "selections": [
      {
        "alias": "myData",
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
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
            "type": "LinkNode",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"test-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "6b80fd236d7aa43d4d7cba46771c4785",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "myData": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Node"
        },
        "myData.__typename": (v1/*: any*/),
        "myData.description": (v1/*: any*/),
        "myData.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "myData.url": (v1/*: any*/)
      }
    },
    "name": "LinkQuery",
    "operationKind": "query",
    "text": "query LinkQuery {\n  myData: node(id: \"test-id\") {\n    __typename\n    ...Link_link\n    id\n  }\n}\n\nfragment Link_link on LinkNode {\n  id\n  description\n  url\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fe9c6aa8bc2ad432d54de55ad62847d7';

module.exports = node;
