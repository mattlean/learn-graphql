/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Link_link$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LinkList_relayLinks$ref: FragmentReference;
declare export opaque type LinkList_relayLinks$fragmentType: LinkList_relayLinks$ref;
export type LinkList_relayLinks = {|
  +relayLinks: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: Link_link$ref
      |}
    |}>
  |},
  +$refType: LinkList_relayLinks$ref,
|};
export type LinkList_relayLinks$data = LinkList_relayLinks;
export type LinkList_relayLinks$key = {
  +$data?: LinkList_relayLinks$data,
  +$fragmentRefs: LinkList_relayLinks$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  "relayLinks"
];
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./LinkListPaginationQuery.graphql.js')
    }
  },
  "name": "LinkList_relayLinks",
  "selections": [
    {
      "alias": "relayLinks",
      "args": null,
      "concreteType": "LinkNodeConnection",
      "kind": "LinkedField",
      "name": "__LinkList_relayLinks_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Link_link"
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aed9e012961b85c1af939f49f861f028';

module.exports = node;
