/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  sectran_chard: {
    nested: {
      secterm: {
        nested: {
          v1: {
            options: {
              go_package: "sectran_chard/secterm/v1;sectermv1"
            },
            nested: {
              AuthMethod: {
                values: {
                  INTERACTIVE_AUTH: 0,
                  PUBLICKEY_AUTH: 1,
                  PASSWORD_AUTH: 2,
                  NO_CREDENTIALS: 3
                }
              },
              SectermProtocols: {
                values: {
                  SECTERM_SSH: 0,
                  SECTERM_TELNET: 1
                }
              },
              SectermConnectRequest: {
                oneofs: {
                  credential: {
                    oneof: [
                      "privateKey",
                      "password"
                    ]
                  }
                },
                fields: {
                  token: {
                    type: "string",
                    id: 1
                  },
                  Colums: {
                    type: "fixed32",
                    id: 2
                  },
                  Rows: {
                    type: "fixed32",
                    id: 3
                  },
                  unmanaged: {
                    type: "bool",
                    id: 4
                  },
                  username: {
                    type: "string",
                    id: 5
                  },
                  authMethod: {
                    type: "AuthMethod",
                    id: 6
                  },
                  privateKey: {
                    type: "bytes",
                    id: 7
                  },
                  password: {
                    type: "bytes",
                    id: 8
                  },
                  hostname: {
                    type: "string",
                    id: 9
                  },
                  port: {
                    type: "int32",
                    id: 10
                  },
                  protocol: {
                    type: "SectermProtocols",
                    id: 11
                  }
                }
              },
              SectermCode: {
                values: {
                  WRONG_CREDENTIAL: 0,
                  NETWORK_UNREACHABLE: 1,
                  UNSURPPORTED_AUTH_METHOD: 2,
                  LOGON_SUCCESS: 3
                }
              },
              SectermConnectResponse: {
                fields: {
                  code: {
                    type: "SectermCode",
                    id: 1
                  }
                }
              },
              SectermMessageType: {
                values: {
                  SectermConnectRequestMessage: 0,
                  SectermConnectResponseMessage: 1
                }
              },
              SectermMessage: {
                oneofs: {
                  data: {
                    oneof: [
                      "request"
                    ]
                  }
                },
                fields: {
                  mesType: {
                    type: "SectermMessageType",
                    id: 2
                  },
                  request: {
                    type: "SectermConnectRequest",
                    id: 3
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
