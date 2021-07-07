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


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinkList_relayLinks",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Link_link"
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
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd63fe71b1d4abb03de10c68020946c5d';

module.exports = node;
