/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const sectran_chard = $root.sectran_chard = (() => {

    /**
     * Namespace sectran_chard.
     * @exports sectran_chard
     * @namespace
     */
    const sectran_chard = {};

    sectran_chard.secterm = (function() {

        /**
         * Namespace secterm.
         * @memberof sectran_chard
         * @namespace
         */
        const secterm = {};

        secterm.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof sectran_chard.secterm
             * @namespace
             */
            const v1 = {};

            /**
             * AuthMethod enum.
             * @name sectran_chard.secterm.v1.AuthMethod
             * @enum {number}
             * @property {number} INTERACTIVE_AUTH=0 INTERACTIVE_AUTH value
             * @property {number} PUBLICKEY_AUTH=1 PUBLICKEY_AUTH value
             * @property {number} PASSWORD_AUTH=2 PASSWORD_AUTH value
             * @property {number} NO_CREDENTIALS=3 NO_CREDENTIALS value
             */
            v1.AuthMethod = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "INTERACTIVE_AUTH"] = 0;
                values[valuesById[1] = "PUBLICKEY_AUTH"] = 1;
                values[valuesById[2] = "PASSWORD_AUTH"] = 2;
                values[valuesById[3] = "NO_CREDENTIALS"] = 3;
                return values;
            })();

            /**
             * SectermProtocols enum.
             * @name sectran_chard.secterm.v1.SectermProtocols
             * @enum {number}
             * @property {number} SECTERM_SSH=0 SECTERM_SSH value
             * @property {number} SECTERM_TELNET=1 SECTERM_TELNET value
             * @property {number} SECTERM_SFTP=2 SECTERM_SFTP value
             */
            v1.SectermProtocols = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SECTERM_SSH"] = 0;
                values[valuesById[1] = "SECTERM_TELNET"] = 1;
                values[valuesById[2] = "SECTERM_SFTP"] = 2;
                return values;
            })();

            v1.SectermCredentialPrivateKey = (function() {

                /**
                 * Properties of a SectermCredentialPrivateKey.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermCredentialPrivateKey
                 * @property {Uint8Array|null} [privateKey] SectermCredentialPrivateKey privateKey
                 * @property {Uint8Array|null} [privateKeyPassword] SectermCredentialPrivateKey privateKeyPassword
                 */

                /**
                 * Constructs a new SectermCredentialPrivateKey.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermCredentialPrivateKey.
                 * @implements ISectermCredentialPrivateKey
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermCredentialPrivateKey=} [properties] Properties to set
                 */
                function SectermCredentialPrivateKey(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermCredentialPrivateKey privateKey.
                 * @member {Uint8Array} privateKey
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @instance
                 */
                SectermCredentialPrivateKey.prototype.privateKey = $util.newBuffer([]);

                /**
                 * SectermCredentialPrivateKey privateKeyPassword.
                 * @member {Uint8Array} privateKeyPassword
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @instance
                 */
                SectermCredentialPrivateKey.prototype.privateKeyPassword = $util.newBuffer([]);

                /**
                 * Creates a new SectermCredentialPrivateKey instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermCredentialPrivateKey=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermCredentialPrivateKey} SectermCredentialPrivateKey instance
                 */
                SectermCredentialPrivateKey.create = function create(properties) {
                    return new SectermCredentialPrivateKey(properties);
                };

                /**
                 * Encodes the specified SectermCredentialPrivateKey message. Does not implicitly {@link sectran_chard.secterm.v1.SectermCredentialPrivateKey.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermCredentialPrivateKey} message SectermCredentialPrivateKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermCredentialPrivateKey.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.privateKey);
                    if (message.privateKeyPassword != null && Object.hasOwnProperty.call(message, "privateKeyPassword"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.privateKeyPassword);
                    return writer;
                };

                /**
                 * Encodes the specified SectermCredentialPrivateKey message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermCredentialPrivateKey.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermCredentialPrivateKey} message SectermCredentialPrivateKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermCredentialPrivateKey.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermCredentialPrivateKey message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermCredentialPrivateKey} SectermCredentialPrivateKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermCredentialPrivateKey.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermCredentialPrivateKey();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.privateKey = reader.bytes();
                                break;
                            }
                        case 2: {
                                message.privateKeyPassword = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SectermCredentialPrivateKey message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermCredentialPrivateKey} SectermCredentialPrivateKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermCredentialPrivateKey.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermCredentialPrivateKey message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermCredentialPrivateKey.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                        if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                            return "privateKey: buffer expected";
                    if (message.privateKeyPassword != null && message.hasOwnProperty("privateKeyPassword"))
                        if (!(message.privateKeyPassword && typeof message.privateKeyPassword.length === "number" || $util.isString(message.privateKeyPassword)))
                            return "privateKeyPassword: buffer expected";
                    return null;
                };

                /**
                 * Creates a SectermCredentialPrivateKey message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermCredentialPrivateKey} SectermCredentialPrivateKey
                 */
                SectermCredentialPrivateKey.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermCredentialPrivateKey)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermCredentialPrivateKey();
                    if (object.privateKey != null)
                        if (typeof object.privateKey === "string")
                            $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                        else if (object.privateKey.length >= 0)
                            message.privateKey = object.privateKey;
                    if (object.privateKeyPassword != null)
                        if (typeof object.privateKeyPassword === "string")
                            $util.base64.decode(object.privateKeyPassword, message.privateKeyPassword = $util.newBuffer($util.base64.length(object.privateKeyPassword)), 0);
                        else if (object.privateKeyPassword.length >= 0)
                            message.privateKeyPassword = object.privateKeyPassword;
                    return message;
                };

                /**
                 * Creates a plain object from a SectermCredentialPrivateKey message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermCredentialPrivateKey} message SectermCredentialPrivateKey
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermCredentialPrivateKey.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.privateKey = "";
                        else {
                            object.privateKey = [];
                            if (options.bytes !== Array)
                                object.privateKey = $util.newBuffer(object.privateKey);
                        }
                        if (options.bytes === String)
                            object.privateKeyPassword = "";
                        else {
                            object.privateKeyPassword = [];
                            if (options.bytes !== Array)
                                object.privateKeyPassword = $util.newBuffer(object.privateKeyPassword);
                        }
                    }
                    if (message.privateKey != null && message.hasOwnProperty("privateKey"))
                        object.privateKey = options.bytes === String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.privateKey) : message.privateKey;
                    if (message.privateKeyPassword != null && message.hasOwnProperty("privateKeyPassword"))
                        object.privateKeyPassword = options.bytes === String ? $util.base64.encode(message.privateKeyPassword, 0, message.privateKeyPassword.length) : options.bytes === Array ? Array.prototype.slice.call(message.privateKeyPassword) : message.privateKeyPassword;
                    return object;
                };

                /**
                 * Converts this SectermCredentialPrivateKey to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermCredentialPrivateKey.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermCredentialPrivateKey
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPrivateKey
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermCredentialPrivateKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermCredentialPrivateKey";
                };

                return SectermCredentialPrivateKey;
            })();

            v1.SectermCredentialPassword = (function() {

                /**
                 * Properties of a SectermCredentialPassword.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermCredentialPassword
                 * @property {Uint8Array|null} [password] SectermCredentialPassword password
                 */

                /**
                 * Constructs a new SectermCredentialPassword.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermCredentialPassword.
                 * @implements ISectermCredentialPassword
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermCredentialPassword=} [properties] Properties to set
                 */
                function SectermCredentialPassword(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermCredentialPassword password.
                 * @member {Uint8Array} password
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPassword
                 * @instance
                 */
                SectermCredentialPassword.prototype.password = $util.newBuffer([]);

                /**
                 * Creates a new SectermCredentialPassword instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPassword
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermCredentialPassword=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermCredentialPassword} SectermCredentialPassword instance
                 */
                SectermCredentialPassword.create = function create(properties) {
                    return new SectermCredentialPassword(properties);
                };

                /**
                 * Encodes the specified SectermCredentialPassword message. Does not implicitly {@link sectran_chard.secterm.v1.SectermCredentialPassword.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPassword
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermCredentialPassword} message SectermCredentialPassword message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermCredentialPassword.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.password);
                    return writer;
                };

                /**
                 * Encodes the specified SectermCredentialPassword message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermCredentialPassword.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPassword
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermCredentialPassword} message SectermCredentialPassword message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermCredentialPassword.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermCredentialPassword message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPassword
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermCredentialPassword} SectermCredentialPassword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermCredentialPassword.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermCredentialPassword();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.password = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SectermCredentialPassword message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPassword
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermCredentialPassword} SectermCredentialPassword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermCredentialPassword.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermCredentialPassword message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPassword
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermCredentialPassword.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.password != null && message.hasOwnProperty("password"))
                        if (!(message.password && typeof message.password.length === "number" || $util.isString(message.password)))
                            return "password: buffer expected";
                    return null;
                };

                /**
                 * Creates a SectermCredentialPassword message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPassword
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermCredentialPassword} SectermCredentialPassword
                 */
                SectermCredentialPassword.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermCredentialPassword)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermCredentialPassword();
                    if (object.password != null)
                        if (typeof object.password === "string")
                            $util.base64.decode(object.password, message.password = $util.newBuffer($util.base64.length(object.password)), 0);
                        else if (object.password.length >= 0)
                            message.password = object.password;
                    return message;
                };

                /**
                 * Creates a plain object from a SectermCredentialPassword message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPassword
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermCredentialPassword} message SectermCredentialPassword
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermCredentialPassword.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.password = "";
                        else {
                            object.password = [];
                            if (options.bytes !== Array)
                                object.password = $util.newBuffer(object.password);
                        }
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = options.bytes === String ? $util.base64.encode(message.password, 0, message.password.length) : options.bytes === Array ? Array.prototype.slice.call(message.password) : message.password;
                    return object;
                };

                /**
                 * Converts this SectermCredentialPassword to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPassword
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermCredentialPassword.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermCredentialPassword
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermCredentialPassword
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermCredentialPassword.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermCredentialPassword";
                };

                return SectermCredentialPassword;
            })();

            v1.SectermConnectRequest = (function() {

                /**
                 * Properties of a SectermConnectRequest.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermConnectRequest
                 * @property {string|null} [token] SectermConnectRequest token
                 * @property {number|null} [Colums] SectermConnectRequest Colums
                 * @property {number|null} [Rows] SectermConnectRequest Rows
                 * @property {boolean|null} [unmanaged] SectermConnectRequest unmanaged
                 * @property {string|null} [username] SectermConnectRequest username
                 * @property {sectran_chard.secterm.v1.AuthMethod|null} [authMethod] SectermConnectRequest authMethod
                 * @property {sectran_chard.secterm.v1.ISectermCredentialPrivateKey|null} [privateKey] SectermConnectRequest privateKey
                 * @property {sectran_chard.secterm.v1.ISectermCredentialPassword|null} [password] SectermConnectRequest password
                 * @property {string|null} [hostname] SectermConnectRequest hostname
                 * @property {number|null} [port] SectermConnectRequest port
                 * @property {sectran_chard.secterm.v1.SectermProtocols|null} [protocol] SectermConnectRequest protocol
                 */

                /**
                 * Constructs a new SectermConnectRequest.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermConnectRequest.
                 * @implements ISectermConnectRequest
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermConnectRequest=} [properties] Properties to set
                 */
                function SectermConnectRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermConnectRequest token.
                 * @member {string} token
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.token = "";

                /**
                 * SectermConnectRequest Colums.
                 * @member {number} Colums
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.Colums = 0;

                /**
                 * SectermConnectRequest Rows.
                 * @member {number} Rows
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.Rows = 0;

                /**
                 * SectermConnectRequest unmanaged.
                 * @member {boolean} unmanaged
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.unmanaged = false;

                /**
                 * SectermConnectRequest username.
                 * @member {string} username
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.username = "";

                /**
                 * SectermConnectRequest authMethod.
                 * @member {sectran_chard.secterm.v1.AuthMethod} authMethod
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.authMethod = 0;

                /**
                 * SectermConnectRequest privateKey.
                 * @member {sectran_chard.secterm.v1.ISectermCredentialPrivateKey|null|undefined} privateKey
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.privateKey = null;

                /**
                 * SectermConnectRequest password.
                 * @member {sectran_chard.secterm.v1.ISectermCredentialPassword|null|undefined} password
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.password = null;

                /**
                 * SectermConnectRequest hostname.
                 * @member {string} hostname
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.hostname = "";

                /**
                 * SectermConnectRequest port.
                 * @member {number} port
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.port = 0;

                /**
                 * SectermConnectRequest protocol.
                 * @member {sectran_chard.secterm.v1.SectermProtocols} protocol
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.protocol = 0;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * SectermConnectRequest credential.
                 * @member {"privateKey"|"password"|undefined} credential
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                Object.defineProperty(SectermConnectRequest.prototype, "credential", {
                    get: $util.oneOfGetter($oneOfFields = ["privateKey", "password"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new SectermConnectRequest instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermConnectRequest=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermConnectRequest} SectermConnectRequest instance
                 */
                SectermConnectRequest.create = function create(properties) {
                    return new SectermConnectRequest(properties);
                };

                /**
                 * Encodes the specified SectermConnectRequest message. Does not implicitly {@link sectran_chard.secterm.v1.SectermConnectRequest.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermConnectRequest} message SectermConnectRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermConnectRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                    if (message.Colums != null && Object.hasOwnProperty.call(message, "Colums"))
                        writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.Colums);
                    if (message.Rows != null && Object.hasOwnProperty.call(message, "Rows"))
                        writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.Rows);
                    if (message.unmanaged != null && Object.hasOwnProperty.call(message, "unmanaged"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.unmanaged);
                    if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.username);
                    if (message.authMethod != null && Object.hasOwnProperty.call(message, "authMethod"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.authMethod);
                    if (message.privateKey != null && Object.hasOwnProperty.call(message, "privateKey"))
                        $root.sectran_chard.secterm.v1.SectermCredentialPrivateKey.encode(message.privateKey, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                        $root.sectran_chard.secterm.v1.SectermCredentialPassword.encode(message.password, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.hostname);
                    if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.port);
                    if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.protocol);
                    return writer;
                };

                /**
                 * Encodes the specified SectermConnectRequest message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermConnectRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermConnectRequest} message SectermConnectRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermConnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermConnectRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermConnectRequest} SectermConnectRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermConnectRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermConnectRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.token = reader.string();
                                break;
                            }
                        case 2: {
                                message.Colums = reader.fixed32();
                                break;
                            }
                        case 3: {
                                message.Rows = reader.fixed32();
                                break;
                            }
                        case 4: {
                                message.unmanaged = reader.bool();
                                break;
                            }
                        case 5: {
                                message.username = reader.string();
                                break;
                            }
                        case 6: {
                                message.authMethod = reader.int32();
                                break;
                            }
                        case 7: {
                                message.privateKey = $root.sectran_chard.secterm.v1.SectermCredentialPrivateKey.decode(reader, reader.uint32());
                                break;
                            }
                        case 8: {
                                message.password = $root.sectran_chard.secterm.v1.SectermCredentialPassword.decode(reader, reader.uint32());
                                break;
                            }
                        case 9: {
                                message.hostname = reader.string();
                                break;
                            }
                        case 10: {
                                message.port = reader.int32();
                                break;
                            }
                        case 11: {
                                message.protocol = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SectermConnectRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermConnectRequest} SectermConnectRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermConnectRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermConnectRequest message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermConnectRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.token != null && message.hasOwnProperty("token"))
                        if (!$util.isString(message.token))
                            return "token: string expected";
                    if (message.Colums != null && message.hasOwnProperty("Colums"))
                        if (!$util.isInteger(message.Colums))
                            return "Colums: integer expected";
                    if (message.Rows != null && message.hasOwnProperty("Rows"))
                        if (!$util.isInteger(message.Rows))
                            return "Rows: integer expected";
                    if (message.unmanaged != null && message.hasOwnProperty("unmanaged"))
                        if (typeof message.unmanaged !== "boolean")
                            return "unmanaged: boolean expected";
                    if (message.username != null && message.hasOwnProperty("username"))
                        if (!$util.isString(message.username))
                            return "username: string expected";
                    if (message.authMethod != null && message.hasOwnProperty("authMethod"))
                        switch (message.authMethod) {
                        default:
                            return "authMethod: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.privateKey != null && message.hasOwnProperty("privateKey")) {
                        properties.credential = 1;
                        {
                            let error = $root.sectran_chard.secterm.v1.SectermCredentialPrivateKey.verify(message.privateKey);
                            if (error)
                                return "privateKey." + error;
                        }
                    }
                    if (message.password != null && message.hasOwnProperty("password")) {
                        if (properties.credential === 1)
                            return "credential: multiple values";
                        properties.credential = 1;
                        {
                            let error = $root.sectran_chard.secterm.v1.SectermCredentialPassword.verify(message.password);
                            if (error)
                                return "password." + error;
                        }
                    }
                    if (message.hostname != null && message.hasOwnProperty("hostname"))
                        if (!$util.isString(message.hostname))
                            return "hostname: string expected";
                    if (message.port != null && message.hasOwnProperty("port"))
                        if (!$util.isInteger(message.port))
                            return "port: integer expected";
                    if (message.protocol != null && message.hasOwnProperty("protocol"))
                        switch (message.protocol) {
                        default:
                            return "protocol: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a SectermConnectRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermConnectRequest} SectermConnectRequest
                 */
                SectermConnectRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermConnectRequest)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermConnectRequest();
                    if (object.token != null)
                        message.token = String(object.token);
                    if (object.Colums != null)
                        message.Colums = object.Colums >>> 0;
                    if (object.Rows != null)
                        message.Rows = object.Rows >>> 0;
                    if (object.unmanaged != null)
                        message.unmanaged = Boolean(object.unmanaged);
                    if (object.username != null)
                        message.username = String(object.username);
                    switch (object.authMethod) {
                    default:
                        if (typeof object.authMethod === "number") {
                            message.authMethod = object.authMethod;
                            break;
                        }
                        break;
                    case "INTERACTIVE_AUTH":
                    case 0:
                        message.authMethod = 0;
                        break;
                    case "PUBLICKEY_AUTH":
                    case 1:
                        message.authMethod = 1;
                        break;
                    case "PASSWORD_AUTH":
                    case 2:
                        message.authMethod = 2;
                        break;
                    case "NO_CREDENTIALS":
                    case 3:
                        message.authMethod = 3;
                        break;
                    }
                    if (object.privateKey != null) {
                        if (typeof object.privateKey !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermConnectRequest.privateKey: object expected");
                        message.privateKey = $root.sectran_chard.secterm.v1.SectermCredentialPrivateKey.fromObject(object.privateKey);
                    }
                    if (object.password != null) {
                        if (typeof object.password !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermConnectRequest.password: object expected");
                        message.password = $root.sectran_chard.secterm.v1.SectermCredentialPassword.fromObject(object.password);
                    }
                    if (object.hostname != null)
                        message.hostname = String(object.hostname);
                    if (object.port != null)
                        message.port = object.port | 0;
                    switch (object.protocol) {
                    default:
                        if (typeof object.protocol === "number") {
                            message.protocol = object.protocol;
                            break;
                        }
                        break;
                    case "SECTERM_SSH":
                    case 0:
                        message.protocol = 0;
                        break;
                    case "SECTERM_TELNET":
                    case 1:
                        message.protocol = 1;
                        break;
                    case "SECTERM_SFTP":
                    case 2:
                        message.protocol = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SectermConnectRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermConnectRequest} message SectermConnectRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermConnectRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.token = "";
                        object.Colums = 0;
                        object.Rows = 0;
                        object.unmanaged = false;
                        object.username = "";
                        object.authMethod = options.enums === String ? "INTERACTIVE_AUTH" : 0;
                        object.hostname = "";
                        object.port = 0;
                        object.protocol = options.enums === String ? "SECTERM_SSH" : 0;
                    }
                    if (message.token != null && message.hasOwnProperty("token"))
                        object.token = message.token;
                    if (message.Colums != null && message.hasOwnProperty("Colums"))
                        object.Colums = message.Colums;
                    if (message.Rows != null && message.hasOwnProperty("Rows"))
                        object.Rows = message.Rows;
                    if (message.unmanaged != null && message.hasOwnProperty("unmanaged"))
                        object.unmanaged = message.unmanaged;
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.authMethod != null && message.hasOwnProperty("authMethod"))
                        object.authMethod = options.enums === String ? $root.sectran_chard.secterm.v1.AuthMethod[message.authMethod] === undefined ? message.authMethod : $root.sectran_chard.secterm.v1.AuthMethod[message.authMethod] : message.authMethod;
                    if (message.privateKey != null && message.hasOwnProperty("privateKey")) {
                        object.privateKey = $root.sectran_chard.secterm.v1.SectermCredentialPrivateKey.toObject(message.privateKey, options);
                        if (options.oneofs)
                            object.credential = "privateKey";
                    }
                    if (message.password != null && message.hasOwnProperty("password")) {
                        object.password = $root.sectran_chard.secterm.v1.SectermCredentialPassword.toObject(message.password, options);
                        if (options.oneofs)
                            object.credential = "password";
                    }
                    if (message.hostname != null && message.hasOwnProperty("hostname"))
                        object.hostname = message.hostname;
                    if (message.port != null && message.hasOwnProperty("port"))
                        object.port = message.port;
                    if (message.protocol != null && message.hasOwnProperty("protocol"))
                        object.protocol = options.enums === String ? $root.sectran_chard.secterm.v1.SectermProtocols[message.protocol] === undefined ? message.protocol : $root.sectran_chard.secterm.v1.SectermProtocols[message.protocol] : message.protocol;
                    return object;
                };

                /**
                 * Converts this SectermConnectRequest to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermConnectRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermConnectRequest
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermConnectRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermConnectRequest";
                };

                return SectermConnectRequest;
            })();

            /**
             * SectermCode enum.
             * @name sectran_chard.secterm.v1.SectermCode
             * @enum {number}
             * @property {number} WRONG_CREDENTIAL=0 WRONG_CREDENTIAL value
             * @property {number} NETWORK_UNREACHABLE=1 NETWORK_UNREACHABLE value
             * @property {number} UNSURPPORTED_AUTH_METHOD=2 UNSURPPORTED_AUTH_METHOD value
             * @property {number} LOGON_SUCCESS=3 LOGON_SUCCESS value
             */
            v1.SectermCode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "WRONG_CREDENTIAL"] = 0;
                values[valuesById[1] = "NETWORK_UNREACHABLE"] = 1;
                values[valuesById[2] = "UNSURPPORTED_AUTH_METHOD"] = 2;
                values[valuesById[3] = "LOGON_SUCCESS"] = 3;
                return values;
            })();

            v1.SectermConnectResponse = (function() {

                /**
                 * Properties of a SectermConnectResponse.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermConnectResponse
                 * @property {sectran_chard.secterm.v1.SectermCode|null} [code] SectermConnectResponse code
                 */

                /**
                 * Constructs a new SectermConnectResponse.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermConnectResponse.
                 * @implements ISectermConnectResponse
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermConnectResponse=} [properties] Properties to set
                 */
                function SectermConnectResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermConnectResponse code.
                 * @member {sectran_chard.secterm.v1.SectermCode} code
                 * @memberof sectran_chard.secterm.v1.SectermConnectResponse
                 * @instance
                 */
                SectermConnectResponse.prototype.code = 0;

                /**
                 * Creates a new SectermConnectResponse instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermConnectResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermConnectResponse=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermConnectResponse} SectermConnectResponse instance
                 */
                SectermConnectResponse.create = function create(properties) {
                    return new SectermConnectResponse(properties);
                };

                /**
                 * Encodes the specified SectermConnectResponse message. Does not implicitly {@link sectran_chard.secterm.v1.SectermConnectResponse.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermConnectResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermConnectResponse} message SectermConnectResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermConnectResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                    return writer;
                };

                /**
                 * Encodes the specified SectermConnectResponse message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermConnectResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermConnectResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermConnectResponse} message SectermConnectResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermConnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermConnectResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermConnectResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermConnectResponse} SectermConnectResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermConnectResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermConnectResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.code = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SectermConnectResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermConnectResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermConnectResponse} SectermConnectResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermConnectResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermConnectResponse message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermConnectResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermConnectResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.code != null && message.hasOwnProperty("code"))
                        switch (message.code) {
                        default:
                            return "code: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a SectermConnectResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermConnectResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermConnectResponse} SectermConnectResponse
                 */
                SectermConnectResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermConnectResponse)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermConnectResponse();
                    switch (object.code) {
                    default:
                        if (typeof object.code === "number") {
                            message.code = object.code;
                            break;
                        }
                        break;
                    case "WRONG_CREDENTIAL":
                    case 0:
                        message.code = 0;
                        break;
                    case "NETWORK_UNREACHABLE":
                    case 1:
                        message.code = 1;
                        break;
                    case "UNSURPPORTED_AUTH_METHOD":
                    case 2:
                        message.code = 2;
                        break;
                    case "LOGON_SUCCESS":
                    case 3:
                        message.code = 3;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SectermConnectResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermConnectResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermConnectResponse} message SectermConnectResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermConnectResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.code = options.enums === String ? "WRONG_CREDENTIAL" : 0;
                    if (message.code != null && message.hasOwnProperty("code"))
                        object.code = options.enums === String ? $root.sectran_chard.secterm.v1.SectermCode[message.code] === undefined ? message.code : $root.sectran_chard.secterm.v1.SectermCode[message.code] : message.code;
                    return object;
                };

                /**
                 * Converts this SectermConnectResponse to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermConnectResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermConnectResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermConnectResponse
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermConnectResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermConnectResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermConnectResponse";
                };

                return SectermConnectResponse;
            })();

            return v1;
        })();

        return secterm;
    })();

    return sectran_chard;
})();

export { $root as default };
