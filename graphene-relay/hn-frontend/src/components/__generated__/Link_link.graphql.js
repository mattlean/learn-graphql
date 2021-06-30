/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Link_link$ref: FragmentReference;
declare export opaque type Link_link$fragmentType: Link_link$ref;
export type Link_link = {|
  +id: string,
  +description: string,
  +url: string,
  +$refType: Link_link$ref,
|};
export type Link_link$data = Link_link;
export type Link_link$key = {
  +$data?: Link_link$data,
  +$fragmentRefs: Link_link$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Link_link",
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
  "type": "LinkNode",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '5cd7888cbf5fab6e0a596cabccfc8db2';

module.exports = node;
