/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  User: {
    fields: {
      username: {
        rule: "required",
        type: "string",
        id: 0
      },
      password: {
        rule: "required",
        type: "double",
        id: 1
      },
      isMan: {
        rule: "required",
        type: "bool",
        id: 2
      },
      other: {
        rule: "required",
        type: "OTHER",
        id: 3
      },
      friends: {
        rule: "repeated",
        type: "FRIENDS",
        id: 4
      }
    },
    nested: {
      OTHER: {
        fields: {
          score: {
            rule: "required",
            type: "double",
            id: 0
          },
          address: {
            rule: "required",
            type: "string",
            id: 1
          }
        }
      },
      FRIENDS: {
        fields: {
          name: {
            rule: "required",
            type: "string",
            id: 0
          },
          age: {
            rule: "required",
            type: "double",
            id: 1
          }
        }
      }
    }
  }
});

module.exports = $root;
