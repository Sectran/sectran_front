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
             * SectermMessageType enum.
             * @name sectran_chard.secterm.v1.SectermMessageType
             * @enum {number}
             * @property {number} SectermConnectRequestMessage=0 SectermConnectRequestMessage value
             * @property {number} SectermConnectResponseMessage=1 SectermConnectResponseMessage value
             * @property {number} SectranTeminalResizeMessage=2 SectranTeminalResizeMessage value
             * @property {number} SectranTeminalCharactersMessage=3 SectranTeminalCharactersMessage value
             */
            v1.SectermMessageType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SectermConnectRequestMessage"] = 0;
                values[valuesById[1] = "SectermConnectResponseMessage"] = 1;
                values[valuesById[2] = "SectranTeminalResizeMessage"] = 2;
                values[valuesById[3] = "SectranTeminalCharactersMessage"] = 3;
                return values;
            })();

            v1.SectermMessage = (function() {

                /**
                 * Properties of a SectermMessage.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermMessage
                 * @property {sectran_chard.secterm.v1.SectermMessageType|null} [mesType] SectermMessage mesType
                 * @property {sectran_chard.secterm.v1.ISectermConnectRequest|null} [request] SectermMessage request
                 * @property {sectran_chard.secterm.v1.ISectermConnectResponse|null} [response] SectermMessage response
                 * @property {sectran_chard.secterm.v1.ISectermTerminalResize|null} [resize] SectermMessage resize
                 * @property {sectran_chard.secterm.v1.ISectranTeminalCharacters|null} [characters] SectermMessage characters
                 */

                /**
                 * Constructs a new SectermMessage.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermMessage.
                 * @implements ISectermMessage
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermMessage=} [properties] Properties to set
                 */
                function SectermMessage(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermMessage mesType.
                 * @member {sectran_chard.secterm.v1.SectermMessageType} mesType
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                SectermMessage.prototype.mesType = 0;

                /**
                 * SectermMessage request.
                 * @member {sectran_chard.secterm.v1.ISectermConnectRequest|null|undefined} request
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                SectermMessage.prototype.request = null;

                /**
                 * SectermMessage response.
                 * @member {sectran_chard.secterm.v1.ISectermConnectResponse|null|undefined} response
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                SectermMessage.prototype.response = null;

                /**
                 * SectermMessage resize.
                 * @member {sectran_chard.secterm.v1.ISectermTerminalResize|null|undefined} resize
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                SectermMessage.prototype.resize = null;

                /**
                 * SectermMessage characters.
                 * @member {sectran_chard.secterm.v1.ISectranTeminalCharacters|null|undefined} characters
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                SectermMessage.prototype.characters = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * SectermMessage data.
                 * @member {"request"|"response"|"resize"|"characters"|undefined} data
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                Object.defineProperty(SectermMessage.prototype, "data", {
                    get: $util.oneOfGetter($oneOfFields = ["request", "response", "resize", "characters"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new SectermMessage instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermMessage=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermMessage} SectermMessage instance
                 */
                SectermMessage.create = function create(properties) {
                    return new SectermMessage(properties);
                };

                /**
                 * Encodes the specified SectermMessage message. Does not implicitly {@link sectran_chard.secterm.v1.SectermMessage.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermMessage} message SectermMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.mesType != null && Object.hasOwnProperty.call(message, "mesType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mesType);
                    if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                        $root.sectran_chard.secterm.v1.SectermConnectRequest.encode(message.request, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                        $root.sectran_chard.secterm.v1.SectermConnectResponse.encode(message.response, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.resize != null && Object.hasOwnProperty.call(message, "resize"))
                        $root.sectran_chard.secterm.v1.SectermTerminalResize.encode(message.resize, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.characters != null && Object.hasOwnProperty.call(message, "characters"))
                        $root.sectran_chard.secterm.v1.SectranTeminalCharacters.encode(message.characters, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SectermMessage message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermMessage} message SectermMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermMessage} SectermMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermMessage();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                message.mesType = reader.int32();
                                break;
                            }
                        case 3: {
                                message.request = $root.sectran_chard.secterm.v1.SectermConnectRequest.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.response = $root.sectran_chard.secterm.v1.SectermConnectResponse.decode(reader, reader.uint32());
                                break;
                            }
                        case 5: {
                                message.resize = $root.sectran_chard.secterm.v1.SectermTerminalResize.decode(reader, reader.uint32());
                                break;
                            }
                        case 6: {
                                message.characters = $root.sectran_chard.secterm.v1.SectranTeminalCharacters.decode(reader, reader.uint32());
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
                 * Decodes a SectermMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermMessage} SectermMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermMessage message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.mesType != null && message.hasOwnProperty("mesType"))
                        switch (message.mesType) {
                        default:
                            return "mesType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.request != null && message.hasOwnProperty("request")) {
                        properties.data = 1;
                        {
                            let error = $root.sectran_chard.secterm.v1.SectermConnectRequest.verify(message.request);
                            if (error)
                                return "request." + error;
                        }
                    }
                    if (message.response != null && message.hasOwnProperty("response")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.sectran_chard.secterm.v1.SectermConnectResponse.verify(message.response);
                            if (error)
                                return "response." + error;
                        }
                    }
                    if (message.resize != null && message.hasOwnProperty("resize")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.sectran_chard.secterm.v1.SectermTerminalResize.verify(message.resize);
                            if (error)
                                return "resize." + error;
                        }
                    }
                    if (message.characters != null && message.hasOwnProperty("characters")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.sectran_chard.secterm.v1.SectranTeminalCharacters.verify(message.characters);
                            if (error)
                                return "characters." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SectermMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermMessage} SectermMessage
                 */
                SectermMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermMessage)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermMessage();
                    switch (object.mesType) {
                    default:
                        if (typeof object.mesType === "number") {
                            message.mesType = object.mesType;
                            break;
                        }
                        break;
                    case "SectermConnectRequestMessage":
                    case 0:
                        message.mesType = 0;
                        break;
                    case "SectermConnectResponseMessage":
                    case 1:
                        message.mesType = 1;
                        break;
                    case "SectranTeminalResizeMessage":
                    case 2:
                        message.mesType = 2;
                        break;
                    case "SectranTeminalCharactersMessage":
                    case 3:
                        message.mesType = 3;
                        break;
                    }
                    if (object.request != null) {
                        if (typeof object.request !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermMessage.request: object expected");
                        message.request = $root.sectran_chard.secterm.v1.SectermConnectRequest.fromObject(object.request);
                    }
                    if (object.response != null) {
                        if (typeof object.response !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermMessage.response: object expected");
                        message.response = $root.sectran_chard.secterm.v1.SectermConnectResponse.fromObject(object.response);
                    }
                    if (object.resize != null) {
                        if (typeof object.resize !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermMessage.resize: object expected");
                        message.resize = $root.sectran_chard.secterm.v1.SectermTerminalResize.fromObject(object.resize);
                    }
                    if (object.characters != null) {
                        if (typeof object.characters !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermMessage.characters: object expected");
                        message.characters = $root.sectran_chard.secterm.v1.SectranTeminalCharacters.fromObject(object.characters);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SectermMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermMessage} message SectermMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.mesType = options.enums === String ? "SectermConnectRequestMessage" : 0;
                    if (message.mesType != null && message.hasOwnProperty("mesType"))
                        object.mesType = options.enums === String ? $root.sectran_chard.secterm.v1.SectermMessageType[message.mesType] === undefined ? message.mesType : $root.sectran_chard.secterm.v1.SectermMessageType[message.mesType] : message.mesType;
                    if (message.request != null && message.hasOwnProperty("request")) {
                        object.request = $root.sectran_chard.secterm.v1.SectermConnectRequest.toObject(message.request, options);
                        if (options.oneofs)
                            object.data = "request";
                    }
                    if (message.response != null && message.hasOwnProperty("response")) {
                        object.response = $root.sectran_chard.secterm.v1.SectermConnectResponse.toObject(message.response, options);
                        if (options.oneofs)
                            object.data = "response";
                    }
                    if (message.resize != null && message.hasOwnProperty("resize")) {
                        object.resize = $root.sectran_chard.secterm.v1.SectermTerminalResize.toObject(message.resize, options);
                        if (options.oneofs)
                            object.data = "resize";
                    }
                    if (message.characters != null && message.hasOwnProperty("characters")) {
                        object.characters = $root.sectran_chard.secterm.v1.SectranTeminalCharacters.toObject(message.characters, options);
                        if (options.oneofs)
                            object.data = "characters";
                    }
                    return object;
                };

                /**
                 * Converts this SectermMessage to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermMessage
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermMessage";
                };

                return SectermMessage;
            })();

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
             */
            v1.SectermProtocols = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SECTERM_SSH"] = 0;
                values[valuesById[1] = "SECTERM_TELNET"] = 1;
                return values;
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
                 * @property {Uint8Array|null} [privateKey] SectermConnectRequest privateKey
                 * @property {Uint8Array|null} [password] SectermConnectRequest password
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
                 * @member {Uint8Array|null|undefined} privateKey
                 * @memberof sectran_chard.secterm.v1.SectermConnectRequest
                 * @instance
                 */
                SectermConnectRequest.prototype.privateKey = null;

                /**
                 * SectermConnectRequest password.
                 * @member {Uint8Array|null|undefined} password
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
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.privateKey);
                    if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                        writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.password);
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
                                message.privateKey = reader.bytes();
                                break;
                            }
                        case 8: {
                                message.password = reader.bytes();
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
                        if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                            return "privateKey: buffer expected";
                    }
                    if (message.password != null && message.hasOwnProperty("password")) {
                        if (properties.credential === 1)
                            return "credential: multiple values";
                        properties.credential = 1;
                        if (!(message.password && typeof message.password.length === "number" || $util.isString(message.password)))
                            return "password: buffer expected";
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
                    if (object.privateKey != null)
                        if (typeof object.privateKey === "string")
                            $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                        else if (object.privateKey.length >= 0)
                            message.privateKey = object.privateKey;
                    if (object.password != null)
                        if (typeof object.password === "string")
                            $util.base64.decode(object.password, message.password = $util.newBuffer($util.base64.length(object.password)), 0);
                        else if (object.password.length >= 0)
                            message.password = object.password;
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
                        object.privateKey = options.bytes === String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.privateKey) : message.privateKey;
                        if (options.oneofs)
                            object.credential = "privateKey";
                    }
                    if (message.password != null && message.hasOwnProperty("password")) {
                        object.password = options.bytes === String ? $util.base64.encode(message.password, 0, message.password.length) : options.bytes === Array ? Array.prototype.slice.call(message.password) : message.password;
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

            v1.SectermTerminalResize = (function() {

                /**
                 * Properties of a SectermTerminalResize.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermTerminalResize
                 * @property {number|null} [colums] SectermTerminalResize colums
                 * @property {number|null} [rows] SectermTerminalResize rows
                 */

                /**
                 * Constructs a new SectermTerminalResize.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermTerminalResize.
                 * @implements ISectermTerminalResize
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermTerminalResize=} [properties] Properties to set
                 */
                function SectermTerminalResize(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermTerminalResize colums.
                 * @member {number} colums
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @instance
                 */
                SectermTerminalResize.prototype.colums = 0;

                /**
                 * SectermTerminalResize rows.
                 * @member {number} rows
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @instance
                 */
                SectermTerminalResize.prototype.rows = 0;

                /**
                 * Creates a new SectermTerminalResize instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermTerminalResize=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermTerminalResize} SectermTerminalResize instance
                 */
                SectermTerminalResize.create = function create(properties) {
                    return new SectermTerminalResize(properties);
                };

                /**
                 * Encodes the specified SectermTerminalResize message. Does not implicitly {@link sectran_chard.secterm.v1.SectermTerminalResize.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermTerminalResize} message SectermTerminalResize message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermTerminalResize.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.colums != null && Object.hasOwnProperty.call(message, "colums"))
                        writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.colums);
                    if (message.rows != null && Object.hasOwnProperty.call(message, "rows"))
                        writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.rows);
                    return writer;
                };

                /**
                 * Encodes the specified SectermTerminalResize message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermTerminalResize.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermTerminalResize} message SectermTerminalResize message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermTerminalResize.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermTerminalResize message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermTerminalResize} SectermTerminalResize
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermTerminalResize.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermTerminalResize();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.colums = reader.fixed32();
                                break;
                            }
                        case 2: {
                                message.rows = reader.fixed32();
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
                 * Decodes a SectermTerminalResize message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermTerminalResize} SectermTerminalResize
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermTerminalResize.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermTerminalResize message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermTerminalResize.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.colums != null && message.hasOwnProperty("colums"))
                        if (!$util.isInteger(message.colums))
                            return "colums: integer expected";
                    if (message.rows != null && message.hasOwnProperty("rows"))
                        if (!$util.isInteger(message.rows))
                            return "rows: integer expected";
                    return null;
                };

                /**
                 * Creates a SectermTerminalResize message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermTerminalResize} SectermTerminalResize
                 */
                SectermTerminalResize.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermTerminalResize)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermTerminalResize();
                    if (object.colums != null)
                        message.colums = object.colums >>> 0;
                    if (object.rows != null)
                        message.rows = object.rows >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a SectermTerminalResize message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermTerminalResize} message SectermTerminalResize
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermTerminalResize.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.colums = 0;
                        object.rows = 0;
                    }
                    if (message.colums != null && message.hasOwnProperty("colums"))
                        object.colums = message.colums;
                    if (message.rows != null && message.hasOwnProperty("rows"))
                        object.rows = message.rows;
                    return object;
                };

                /**
                 * Converts this SectermTerminalResize to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermTerminalResize.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermTerminalResize
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermTerminalResize
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermTerminalResize.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermTerminalResize";
                };

                return SectermTerminalResize;
            })();

            v1.SectranTeminalCharacters = (function() {

                /**
                 * Properties of a SectranTeminalCharacters.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectranTeminalCharacters
                 * @property {Uint8Array|null} [Data] SectranTeminalCharacters Data
                 */

                /**
                 * Constructs a new SectranTeminalCharacters.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectranTeminalCharacters.
                 * @implements ISectranTeminalCharacters
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectranTeminalCharacters=} [properties] Properties to set
                 */
                function SectranTeminalCharacters(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectranTeminalCharacters Data.
                 * @member {Uint8Array} Data
                 * @memberof sectran_chard.secterm.v1.SectranTeminalCharacters
                 * @instance
                 */
                SectranTeminalCharacters.prototype.Data = $util.newBuffer([]);

                /**
                 * Creates a new SectranTeminalCharacters instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectranTeminalCharacters
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectranTeminalCharacters=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectranTeminalCharacters} SectranTeminalCharacters instance
                 */
                SectranTeminalCharacters.create = function create(properties) {
                    return new SectranTeminalCharacters(properties);
                };

                /**
                 * Encodes the specified SectranTeminalCharacters message. Does not implicitly {@link sectran_chard.secterm.v1.SectranTeminalCharacters.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectranTeminalCharacters
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectranTeminalCharacters} message SectranTeminalCharacters message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectranTeminalCharacters.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Data);
                    return writer;
                };

                /**
                 * Encodes the specified SectranTeminalCharacters message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectranTeminalCharacters.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectranTeminalCharacters
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectranTeminalCharacters} message SectranTeminalCharacters message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectranTeminalCharacters.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectranTeminalCharacters message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectranTeminalCharacters
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectranTeminalCharacters} SectranTeminalCharacters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectranTeminalCharacters.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectranTeminalCharacters();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.Data = reader.bytes();
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
                 * Decodes a SectranTeminalCharacters message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectranTeminalCharacters
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectranTeminalCharacters} SectranTeminalCharacters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectranTeminalCharacters.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectranTeminalCharacters message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectranTeminalCharacters
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectranTeminalCharacters.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Data != null && message.hasOwnProperty("Data"))
                        if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                            return "Data: buffer expected";
                    return null;
                };

                /**
                 * Creates a SectranTeminalCharacters message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectranTeminalCharacters
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectranTeminalCharacters} SectranTeminalCharacters
                 */
                SectranTeminalCharacters.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectranTeminalCharacters)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectranTeminalCharacters();
                    if (object.Data != null)
                        if (typeof object.Data === "string")
                            $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                        else if (object.Data.length >= 0)
                            message.Data = object.Data;
                    return message;
                };

                /**
                 * Creates a plain object from a SectranTeminalCharacters message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectranTeminalCharacters
                 * @static
                 * @param {sectran_chard.secterm.v1.SectranTeminalCharacters} message SectranTeminalCharacters
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectranTeminalCharacters.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.Data = "";
                        else {
                            object.Data = [];
                            if (options.bytes !== Array)
                                object.Data = $util.newBuffer(object.Data);
                        }
                    if (message.Data != null && message.hasOwnProperty("Data"))
                        object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
                    return object;
                };

                /**
                 * Converts this SectranTeminalCharacters to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectranTeminalCharacters
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectranTeminalCharacters.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectranTeminalCharacters
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectranTeminalCharacters
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectranTeminalCharacters.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectranTeminalCharacters";
                };

                return SectranTeminalCharacters;
            })();

            return v1;
        })();

        return secterm;
    })();

    return sectran_chard;
})();

export { $root as default };
