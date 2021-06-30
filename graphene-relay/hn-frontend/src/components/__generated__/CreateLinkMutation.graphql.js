/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RelayCreateLinkInput = {|
  url?: ?string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type CreateLinkMutationVariables = {|
  input: RelayCreateLinkInput
|};
export type CreateLinkMutationResponse = {|
  +relayCreateLink: ?{|
    +link: ?{|
      +id: string,
      +url: string,
      +description: string,
    |}
  |}
|};
export type CreateLinkMutation = {|
  variables: CreateLinkMutationVariables,
  response: CreateLinkMutationResponse,
|};
*/


/*
mutation CreateLinkMutation(
  $input: RelayCreateLinkInput!
) {
  relayCreateLink(input: $input) {
    link {
      id
      url
      description
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "RelayCreateLinkPayload",
    "kind": "LinkedField",
    "name": "relayCreateLink",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "LinkNode",
        "kind": "LinkedField",
        "name": "link",
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
            "name": "url",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateLinkMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateLinkMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0bac6b9933c1c3f8de3c297054951e26",
    "id": null,
    "metadata": {},
    "name": "CreateLinkMutation",
    "operationKind": "mutation",
    "text": "mutation CreateLinkMutation(\n  $input: RelayCreateLinkInput!\n) {\n  relayCreateLink(input: $input) {\n    link {\n      id\n      url\n      description\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a6e3f5461611d76a421af8a57ebed59d';

module.exports = node;
