/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Link_link$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LinkList_links$ref: FragmentReference;
declare export opaque type LinkList_links$fragmentType: LinkList_links$ref;
export type LinkList_links = {|
  +edges: $ReadOnlyArray<?{|
    +node: ?{|
      +$fragmentRefs: Link_link$ref
    |}
  |}>,
  +$refType: LinkList_links$ref,
|};
export type LinkList_links$data = LinkList_links;
export type LinkList_links$key = {
  +$data?: LinkList_links$data,
  +$fragmentRefs: LinkList_links$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinkList_links",
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
  "type": "LinkNodeConnection",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'a05263b0c64714e457df84faf94d314d';

module.exports = node;
