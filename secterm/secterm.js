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

            v1.SectermMessage = (function() {

                /**
                 * Properties of a SectermMessage.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermMessage
                 * @property {sectran_chard.secterm.v1.ISectermConnectRequest|null} [request] SectermMessage request
                 * @property {sectran_chard.secterm.v1.ISectermConnectResponse|null} [response] SectermMessage response
                 * @property {sectran_chard.secterm.v1.ISectermTerminalResize|null} [resize] SectermMessage resize
                 * @property {sectran_chard.secterm.v1.ISectranTeminalCharacters|null} [characters] SectermMessage characters
                 * @property {sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest|null} [sftpInfoReq] SectermMessage sftpInfoReq
                 * @property {sectran_chard.secterm.v1.ISectermSftpListInfoResponse|null} [sftpInfoRsp] SectermMessage sftpInfoRsp
                 * @property {sectran_chard.secterm.v1.ISectermSftpCreate|null} [sftpCreateReq] SectermMessage sftpCreateReq
                 * @property {sectran_chard.secterm.v1.ISectermSftpMove|null} [sftpMoveReq] SectermMessage sftpMoveReq
                 * @property {sectran_chard.secterm.v1.ISectermSftpDelete|null} [sftpDelete] SectermMessage sftpDelete
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

                /**
                 * SectermMessage sftpInfoReq.
                 * @member {sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest|null|undefined} sftpInfoReq
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                SectermMessage.prototype.sftpInfoReq = null;

                /**
                 * SectermMessage sftpInfoRsp.
                 * @member {sectran_chard.secterm.v1.ISectermSftpListInfoResponse|null|undefined} sftpInfoRsp
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                SectermMessage.prototype.sftpInfoRsp = null;

                /**
                 * SectermMessage sftpCreateReq.
                 * @member {sectran_chard.secterm.v1.ISectermSftpCreate|null|undefined} sftpCreateReq
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                SectermMessage.prototype.sftpCreateReq = null;

                /**
                 * SectermMessage sftpMoveReq.
                 * @member {sectran_chard.secterm.v1.ISectermSftpMove|null|undefined} sftpMoveReq
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                SectermMessage.prototype.sftpMoveReq = null;

                /**
                 * SectermMessage sftpDelete.
                 * @member {sectran_chard.secterm.v1.ISectermSftpDelete|null|undefined} sftpDelete
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                SectermMessage.prototype.sftpDelete = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * SectermMessage data.
                 * @member {"request"|"response"|"resize"|"characters"|"sftpInfoReq"|"sftpInfoRsp"|"sftpCreateReq"|"sftpMoveReq"|"sftpDelete"|undefined} data
                 * @memberof sectran_chard.secterm.v1.SectermMessage
                 * @instance
                 */
                Object.defineProperty(SectermMessage.prototype, "data", {
                    get: $util.oneOfGetter($oneOfFields = ["request", "response", "resize", "characters", "sftpInfoReq", "sftpInfoRsp", "sftpCreateReq", "sftpMoveReq", "sftpDelete"]),
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
                    if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                        $root.sectran_chard.secterm.v1.SectermConnectRequest.encode(message.request, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                        $root.sectran_chard.secterm.v1.SectermConnectResponse.encode(message.response, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.resize != null && Object.hasOwnProperty.call(message, "resize"))
                        $root.sectran_chard.secterm.v1.SectermTerminalResize.encode(message.resize, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.characters != null && Object.hasOwnProperty.call(message, "characters"))
                        $root.sectran_chard.secterm.v1.SectranTeminalCharacters.encode(message.characters, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.sftpInfoReq != null && Object.hasOwnProperty.call(message, "sftpInfoReq"))
                        $root.sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest.encode(message.sftpInfoReq, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.sftpInfoRsp != null && Object.hasOwnProperty.call(message, "sftpInfoRsp"))
                        $root.sectran_chard.secterm.v1.SectermSftpListInfoResponse.encode(message.sftpInfoRsp, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.sftpCreateReq != null && Object.hasOwnProperty.call(message, "sftpCreateReq"))
                        $root.sectran_chard.secterm.v1.SectermSftpCreate.encode(message.sftpCreateReq, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.sftpMoveReq != null && Object.hasOwnProperty.call(message, "sftpMoveReq"))
                        $root.sectran_chard.secterm.v1.SectermSftpMove.encode(message.sftpMoveReq, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    if (message.sftpDelete != null && Object.hasOwnProperty.call(message, "sftpDelete"))
                        $root.sectran_chard.secterm.v1.SectermSftpDelete.encode(message.sftpDelete, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
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
                        case 7: {
                                message.sftpInfoReq = $root.sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest.decode(reader, reader.uint32());
                                break;
                            }
                        case 8: {
                                message.sftpInfoRsp = $root.sectran_chard.secterm.v1.SectermSftpListInfoResponse.decode(reader, reader.uint32());
                                break;
                            }
                        case 9: {
                                message.sftpCreateReq = $root.sectran_chard.secterm.v1.SectermSftpCreate.decode(reader, reader.uint32());
                                break;
                            }
                        case 10: {
                                message.sftpMoveReq = $root.sectran_chard.secterm.v1.SectermSftpMove.decode(reader, reader.uint32());
                                break;
                            }
                        case 11: {
                                message.sftpDelete = $root.sectran_chard.secterm.v1.SectermSftpDelete.decode(reader, reader.uint32());
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
                    if (message.sftpInfoReq != null && message.hasOwnProperty("sftpInfoReq")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest.verify(message.sftpInfoReq);
                            if (error)
                                return "sftpInfoReq." + error;
                        }
                    }
                    if (message.sftpInfoRsp != null && message.hasOwnProperty("sftpInfoRsp")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.sectran_chard.secterm.v1.SectermSftpListInfoResponse.verify(message.sftpInfoRsp);
                            if (error)
                                return "sftpInfoRsp." + error;
                        }
                    }
                    if (message.sftpCreateReq != null && message.hasOwnProperty("sftpCreateReq")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.sectran_chard.secterm.v1.SectermSftpCreate.verify(message.sftpCreateReq);
                            if (error)
                                return "sftpCreateReq." + error;
                        }
                    }
                    if (message.sftpMoveReq != null && message.hasOwnProperty("sftpMoveReq")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.sectran_chard.secterm.v1.SectermSftpMove.verify(message.sftpMoveReq);
                            if (error)
                                return "sftpMoveReq." + error;
                        }
                    }
                    if (message.sftpDelete != null && message.hasOwnProperty("sftpDelete")) {
                        if (properties.data === 1)
                            return "data: multiple values";
                        properties.data = 1;
                        {
                            let error = $root.sectran_chard.secterm.v1.SectermSftpDelete.verify(message.sftpDelete);
                            if (error)
                                return "sftpDelete." + error;
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
                    if (object.sftpInfoReq != null) {
                        if (typeof object.sftpInfoReq !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermMessage.sftpInfoReq: object expected");
                        message.sftpInfoReq = $root.sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest.fromObject(object.sftpInfoReq);
                    }
                    if (object.sftpInfoRsp != null) {
                        if (typeof object.sftpInfoRsp !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermMessage.sftpInfoRsp: object expected");
                        message.sftpInfoRsp = $root.sectran_chard.secterm.v1.SectermSftpListInfoResponse.fromObject(object.sftpInfoRsp);
                    }
                    if (object.sftpCreateReq != null) {
                        if (typeof object.sftpCreateReq !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermMessage.sftpCreateReq: object expected");
                        message.sftpCreateReq = $root.sectran_chard.secterm.v1.SectermSftpCreate.fromObject(object.sftpCreateReq);
                    }
                    if (object.sftpMoveReq != null) {
                        if (typeof object.sftpMoveReq !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermMessage.sftpMoveReq: object expected");
                        message.sftpMoveReq = $root.sectran_chard.secterm.v1.SectermSftpMove.fromObject(object.sftpMoveReq);
                    }
                    if (object.sftpDelete != null) {
                        if (typeof object.sftpDelete !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermMessage.sftpDelete: object expected");
                        message.sftpDelete = $root.sectran_chard.secterm.v1.SectermSftpDelete.fromObject(object.sftpDelete);
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
                    if (message.sftpInfoReq != null && message.hasOwnProperty("sftpInfoReq")) {
                        object.sftpInfoReq = $root.sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest.toObject(message.sftpInfoReq, options);
                        if (options.oneofs)
                            object.data = "sftpInfoReq";
                    }
                    if (message.sftpInfoRsp != null && message.hasOwnProperty("sftpInfoRsp")) {
                        object.sftpInfoRsp = $root.sectran_chard.secterm.v1.SectermSftpListInfoResponse.toObject(message.sftpInfoRsp, options);
                        if (options.oneofs)
                            object.data = "sftpInfoRsp";
                    }
                    if (message.sftpCreateReq != null && message.hasOwnProperty("sftpCreateReq")) {
                        object.sftpCreateReq = $root.sectran_chard.secterm.v1.SectermSftpCreate.toObject(message.sftpCreateReq, options);
                        if (options.oneofs)
                            object.data = "sftpCreateReq";
                    }
                    if (message.sftpMoveReq != null && message.hasOwnProperty("sftpMoveReq")) {
                        object.sftpMoveReq = $root.sectran_chard.secterm.v1.SectermSftpMove.toObject(message.sftpMoveReq, options);
                        if (options.oneofs)
                            object.data = "sftpMoveReq";
                    }
                    if (message.sftpDelete != null && message.hasOwnProperty("sftpDelete")) {
                        object.sftpDelete = $root.sectran_chard.secterm.v1.SectermSftpDelete.toObject(message.sftpDelete, options);
                        if (options.oneofs)
                            object.data = "sftpDelete";
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

            v1.FileSystemObject = (function() {

                /**
                 * Properties of a FileSystemObject.
                 * @memberof sectran_chard.secterm.v1
                 * @interface IFileSystemObject
                 * @property {number|Long|null} [ModTime] FileSystemObject ModTime
                 * @property {number|Long|null} [Size] FileSystemObject Size
                 * @property {number|null} [Mode] FileSystemObject Mode
                 * @property {boolean|null} [IsDir] FileSystemObject IsDir
                 * @property {string|null} [Path] FileSystemObject Path
                 */

                /**
                 * Constructs a new FileSystemObject.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a FileSystemObject.
                 * @implements IFileSystemObject
                 * @constructor
                 * @param {sectran_chard.secterm.v1.IFileSystemObject=} [properties] Properties to set
                 */
                function FileSystemObject(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FileSystemObject ModTime.
                 * @member {number|Long} ModTime
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @instance
                 */
                FileSystemObject.prototype.ModTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * FileSystemObject Size.
                 * @member {number|Long} Size
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @instance
                 */
                FileSystemObject.prototype.Size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * FileSystemObject Mode.
                 * @member {number} Mode
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @instance
                 */
                FileSystemObject.prototype.Mode = 0;

                /**
                 * FileSystemObject IsDir.
                 * @member {boolean} IsDir
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @instance
                 */
                FileSystemObject.prototype.IsDir = false;

                /**
                 * FileSystemObject Path.
                 * @member {string} Path
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @instance
                 */
                FileSystemObject.prototype.Path = "";

                /**
                 * Creates a new FileSystemObject instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @static
                 * @param {sectran_chard.secterm.v1.IFileSystemObject=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.FileSystemObject} FileSystemObject instance
                 */
                FileSystemObject.create = function create(properties) {
                    return new FileSystemObject(properties);
                };

                /**
                 * Encodes the specified FileSystemObject message. Does not implicitly {@link sectran_chard.secterm.v1.FileSystemObject.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @static
                 * @param {sectran_chard.secterm.v1.IFileSystemObject} message FileSystemObject message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileSystemObject.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ModTime != null && Object.hasOwnProperty.call(message, "ModTime"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.ModTime);
                    if (message.Size != null && Object.hasOwnProperty.call(message, "Size"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Size);
                    if (message.Mode != null && Object.hasOwnProperty.call(message, "Mode"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.Mode);
                    if (message.IsDir != null && Object.hasOwnProperty.call(message, "IsDir"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.IsDir);
                    if (message.Path != null && Object.hasOwnProperty.call(message, "Path"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.Path);
                    return writer;
                };

                /**
                 * Encodes the specified FileSystemObject message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.FileSystemObject.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @static
                 * @param {sectran_chard.secterm.v1.IFileSystemObject} message FileSystemObject message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileSystemObject.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FileSystemObject message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.FileSystemObject} FileSystemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileSystemObject.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.FileSystemObject();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.ModTime = reader.uint64();
                                break;
                            }
                        case 2: {
                                message.Size = reader.int64();
                                break;
                            }
                        case 3: {
                                message.Mode = reader.uint32();
                                break;
                            }
                        case 4: {
                                message.IsDir = reader.bool();
                                break;
                            }
                        case 6: {
                                message.Path = reader.string();
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
                 * Decodes a FileSystemObject message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.FileSystemObject} FileSystemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileSystemObject.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FileSystemObject message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileSystemObject.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ModTime != null && message.hasOwnProperty("ModTime"))
                        if (!$util.isInteger(message.ModTime) && !(message.ModTime && $util.isInteger(message.ModTime.low) && $util.isInteger(message.ModTime.high)))
                            return "ModTime: integer|Long expected";
                    if (message.Size != null && message.hasOwnProperty("Size"))
                        if (!$util.isInteger(message.Size) && !(message.Size && $util.isInteger(message.Size.low) && $util.isInteger(message.Size.high)))
                            return "Size: integer|Long expected";
                    if (message.Mode != null && message.hasOwnProperty("Mode"))
                        if (!$util.isInteger(message.Mode))
                            return "Mode: integer expected";
                    if (message.IsDir != null && message.hasOwnProperty("IsDir"))
                        if (typeof message.IsDir !== "boolean")
                            return "IsDir: boolean expected";
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        if (!$util.isString(message.Path))
                            return "Path: string expected";
                    return null;
                };

                /**
                 * Creates a FileSystemObject message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.FileSystemObject} FileSystemObject
                 */
                FileSystemObject.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.FileSystemObject)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.FileSystemObject();
                    if (object.ModTime != null)
                        if ($util.Long)
                            (message.ModTime = $util.Long.fromValue(object.ModTime)).unsigned = true;
                        else if (typeof object.ModTime === "string")
                            message.ModTime = parseInt(object.ModTime, 10);
                        else if (typeof object.ModTime === "number")
                            message.ModTime = object.ModTime;
                        else if (typeof object.ModTime === "object")
                            message.ModTime = new $util.LongBits(object.ModTime.low >>> 0, object.ModTime.high >>> 0).toNumber(true);
                    if (object.Size != null)
                        if ($util.Long)
                            (message.Size = $util.Long.fromValue(object.Size)).unsigned = false;
                        else if (typeof object.Size === "string")
                            message.Size = parseInt(object.Size, 10);
                        else if (typeof object.Size === "number")
                            message.Size = object.Size;
                        else if (typeof object.Size === "object")
                            message.Size = new $util.LongBits(object.Size.low >>> 0, object.Size.high >>> 0).toNumber();
                    if (object.Mode != null)
                        message.Mode = object.Mode >>> 0;
                    if (object.IsDir != null)
                        message.IsDir = Boolean(object.IsDir);
                    if (object.Path != null)
                        message.Path = String(object.Path);
                    return message;
                };

                /**
                 * Creates a plain object from a FileSystemObject message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @static
                 * @param {sectran_chard.secterm.v1.FileSystemObject} message FileSystemObject
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileSystemObject.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.ModTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.ModTime = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.Size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.Size = options.longs === String ? "0" : 0;
                        object.Mode = 0;
                        object.IsDir = false;
                        object.Path = "";
                    }
                    if (message.ModTime != null && message.hasOwnProperty("ModTime"))
                        if (typeof message.ModTime === "number")
                            object.ModTime = options.longs === String ? String(message.ModTime) : message.ModTime;
                        else
                            object.ModTime = options.longs === String ? $util.Long.prototype.toString.call(message.ModTime) : options.longs === Number ? new $util.LongBits(message.ModTime.low >>> 0, message.ModTime.high >>> 0).toNumber(true) : message.ModTime;
                    if (message.Size != null && message.hasOwnProperty("Size"))
                        if (typeof message.Size === "number")
                            object.Size = options.longs === String ? String(message.Size) : message.Size;
                        else
                            object.Size = options.longs === String ? $util.Long.prototype.toString.call(message.Size) : options.longs === Number ? new $util.LongBits(message.Size.low >>> 0, message.Size.high >>> 0).toNumber() : message.Size;
                    if (message.Mode != null && message.hasOwnProperty("Mode"))
                        object.Mode = message.Mode;
                    if (message.IsDir != null && message.hasOwnProperty("IsDir"))
                        object.IsDir = message.IsDir;
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        object.Path = message.Path;
                    return object;
                };

                /**
                 * Converts this FileSystemObject to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileSystemObject.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for FileSystemObject
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.FileSystemObject
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FileSystemObject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.FileSystemObject";
                };

                return FileSystemObject;
            })();

            v1.SectermSftpErrorMsg = (function() {

                /**
                 * Properties of a SectermSftpErrorMsg.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermSftpErrorMsg
                 * @property {string|null} [msg] SectermSftpErrorMsg msg
                 */

                /**
                 * Constructs a new SectermSftpErrorMsg.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermSftpErrorMsg.
                 * @implements ISectermSftpErrorMsg
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermSftpErrorMsg=} [properties] Properties to set
                 */
                function SectermSftpErrorMsg(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermSftpErrorMsg msg.
                 * @member {string} msg
                 * @memberof sectran_chard.secterm.v1.SectermSftpErrorMsg
                 * @instance
                 */
                SectermSftpErrorMsg.prototype.msg = "";

                /**
                 * Creates a new SectermSftpErrorMsg instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermSftpErrorMsg
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpErrorMsg=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermSftpErrorMsg} SectermSftpErrorMsg instance
                 */
                SectermSftpErrorMsg.create = function create(properties) {
                    return new SectermSftpErrorMsg(properties);
                };

                /**
                 * Encodes the specified SectermSftpErrorMsg message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpErrorMsg.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermSftpErrorMsg
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpErrorMsg} message SectermSftpErrorMsg message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpErrorMsg.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
                    return writer;
                };

                /**
                 * Encodes the specified SectermSftpErrorMsg message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpErrorMsg.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpErrorMsg
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpErrorMsg} message SectermSftpErrorMsg message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpErrorMsg.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermSftpErrorMsg message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermSftpErrorMsg
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermSftpErrorMsg} SectermSftpErrorMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpErrorMsg.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermSftpErrorMsg();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.msg = reader.string();
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
                 * Decodes a SectermSftpErrorMsg message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpErrorMsg
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermSftpErrorMsg} SectermSftpErrorMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpErrorMsg.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermSftpErrorMsg message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermSftpErrorMsg
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermSftpErrorMsg.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.msg != null && message.hasOwnProperty("msg"))
                        if (!$util.isString(message.msg))
                            return "msg: string expected";
                    return null;
                };

                /**
                 * Creates a SectermSftpErrorMsg message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpErrorMsg
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermSftpErrorMsg} SectermSftpErrorMsg
                 */
                SectermSftpErrorMsg.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermSftpErrorMsg)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermSftpErrorMsg();
                    if (object.msg != null)
                        message.msg = String(object.msg);
                    return message;
                };

                /**
                 * Creates a plain object from a SectermSftpErrorMsg message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpErrorMsg
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermSftpErrorMsg} message SectermSftpErrorMsg
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermSftpErrorMsg.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.msg = "";
                    if (message.msg != null && message.hasOwnProperty("msg"))
                        object.msg = message.msg;
                    return object;
                };

                /**
                 * Converts this SectermSftpErrorMsg to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermSftpErrorMsg
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermSftpErrorMsg.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermSftpErrorMsg
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermSftpErrorMsg
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermSftpErrorMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermSftpErrorMsg";
                };

                return SectermSftpErrorMsg;
            })();

            v1.SectermSftpDirectoryInfoRequest = (function() {

                /**
                 * Properties of a SectermSftpDirectoryInfoRequest.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermSftpDirectoryInfoRequest
                 * @property {string|null} [Path] SectermSftpDirectoryInfoRequest Path
                 */

                /**
                 * Constructs a new SectermSftpDirectoryInfoRequest.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermSftpDirectoryInfoRequest.
                 * @implements ISectermSftpDirectoryInfoRequest
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest=} [properties] Properties to set
                 */
                function SectermSftpDirectoryInfoRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermSftpDirectoryInfoRequest Path.
                 * @member {string} Path
                 * @memberof sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest
                 * @instance
                 */
                SectermSftpDirectoryInfoRequest.prototype.Path = "";

                /**
                 * Creates a new SectermSftpDirectoryInfoRequest instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest} SectermSftpDirectoryInfoRequest instance
                 */
                SectermSftpDirectoryInfoRequest.create = function create(properties) {
                    return new SectermSftpDirectoryInfoRequest(properties);
                };

                /**
                 * Encodes the specified SectermSftpDirectoryInfoRequest message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest} message SectermSftpDirectoryInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpDirectoryInfoRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Path != null && Object.hasOwnProperty.call(message, "Path"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Path);
                    return writer;
                };

                /**
                 * Encodes the specified SectermSftpDirectoryInfoRequest message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest} message SectermSftpDirectoryInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpDirectoryInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermSftpDirectoryInfoRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest} SectermSftpDirectoryInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpDirectoryInfoRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.Path = reader.string();
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
                 * Decodes a SectermSftpDirectoryInfoRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest} SectermSftpDirectoryInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpDirectoryInfoRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermSftpDirectoryInfoRequest message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermSftpDirectoryInfoRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        if (!$util.isString(message.Path))
                            return "Path: string expected";
                    return null;
                };

                /**
                 * Creates a SectermSftpDirectoryInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest} SectermSftpDirectoryInfoRequest
                 */
                SectermSftpDirectoryInfoRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest();
                    if (object.Path != null)
                        message.Path = String(object.Path);
                    return message;
                };

                /**
                 * Creates a plain object from a SectermSftpDirectoryInfoRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest} message SectermSftpDirectoryInfoRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermSftpDirectoryInfoRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.Path = "";
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        object.Path = message.Path;
                    return object;
                };

                /**
                 * Converts this SectermSftpDirectoryInfoRequest to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermSftpDirectoryInfoRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermSftpDirectoryInfoRequest
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermSftpDirectoryInfoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest";
                };

                return SectermSftpDirectoryInfoRequest;
            })();

            v1.SectermSftpListInfoResponse = (function() {

                /**
                 * Properties of a SectermSftpListInfoResponse.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermSftpListInfoResponse
                 * @property {Array.<sectran_chard.secterm.v1.IFileSystemObject>|null} [Fso] SectermSftpListInfoResponse Fso
                 */

                /**
                 * Constructs a new SectermSftpListInfoResponse.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermSftpListInfoResponse.
                 * @implements ISectermSftpListInfoResponse
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermSftpListInfoResponse=} [properties] Properties to set
                 */
                function SectermSftpListInfoResponse(properties) {
                    this.Fso = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermSftpListInfoResponse Fso.
                 * @member {Array.<sectran_chard.secterm.v1.IFileSystemObject>} Fso
                 * @memberof sectran_chard.secterm.v1.SectermSftpListInfoResponse
                 * @instance
                 */
                SectermSftpListInfoResponse.prototype.Fso = $util.emptyArray;

                /**
                 * Creates a new SectermSftpListInfoResponse instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermSftpListInfoResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpListInfoResponse=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermSftpListInfoResponse} SectermSftpListInfoResponse instance
                 */
                SectermSftpListInfoResponse.create = function create(properties) {
                    return new SectermSftpListInfoResponse(properties);
                };

                /**
                 * Encodes the specified SectermSftpListInfoResponse message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpListInfoResponse.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermSftpListInfoResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpListInfoResponse} message SectermSftpListInfoResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpListInfoResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Fso != null && message.Fso.length)
                        for (let i = 0; i < message.Fso.length; ++i)
                            $root.sectran_chard.secterm.v1.FileSystemObject.encode(message.Fso[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SectermSftpListInfoResponse message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpListInfoResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpListInfoResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpListInfoResponse} message SectermSftpListInfoResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpListInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermSftpListInfoResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermSftpListInfoResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermSftpListInfoResponse} SectermSftpListInfoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpListInfoResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermSftpListInfoResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.Fso && message.Fso.length))
                                    message.Fso = [];
                                message.Fso.push($root.sectran_chard.secterm.v1.FileSystemObject.decode(reader, reader.uint32()));
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
                 * Decodes a SectermSftpListInfoResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpListInfoResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermSftpListInfoResponse} SectermSftpListInfoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpListInfoResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermSftpListInfoResponse message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermSftpListInfoResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermSftpListInfoResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Fso != null && message.hasOwnProperty("Fso")) {
                        if (!Array.isArray(message.Fso))
                            return "Fso: array expected";
                        for (let i = 0; i < message.Fso.length; ++i) {
                            let error = $root.sectran_chard.secterm.v1.FileSystemObject.verify(message.Fso[i]);
                            if (error)
                                return "Fso." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SectermSftpListInfoResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpListInfoResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermSftpListInfoResponse} SectermSftpListInfoResponse
                 */
                SectermSftpListInfoResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermSftpListInfoResponse)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermSftpListInfoResponse();
                    if (object.Fso) {
                        if (!Array.isArray(object.Fso))
                            throw TypeError(".sectran_chard.secterm.v1.SectermSftpListInfoResponse.Fso: array expected");
                        message.Fso = [];
                        for (let i = 0; i < object.Fso.length; ++i) {
                            if (typeof object.Fso[i] !== "object")
                                throw TypeError(".sectran_chard.secterm.v1.SectermSftpListInfoResponse.Fso: object expected");
                            message.Fso[i] = $root.sectran_chard.secterm.v1.FileSystemObject.fromObject(object.Fso[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SectermSftpListInfoResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpListInfoResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermSftpListInfoResponse} message SectermSftpListInfoResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermSftpListInfoResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.Fso = [];
                    if (message.Fso && message.Fso.length) {
                        object.Fso = [];
                        for (let j = 0; j < message.Fso.length; ++j)
                            object.Fso[j] = $root.sectran_chard.secterm.v1.FileSystemObject.toObject(message.Fso[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this SectermSftpListInfoResponse to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermSftpListInfoResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermSftpListInfoResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermSftpListInfoResponse
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermSftpListInfoResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermSftpListInfoResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermSftpListInfoResponse";
                };

                return SectermSftpListInfoResponse;
            })();

            /**
             * FileType enum.
             * @name sectran_chard.secterm.v1.FileType
             * @enum {number}
             * @property {number} Dir=0 Dir value
             * @property {number} File=1 File value
             */
            v1.FileType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Dir"] = 0;
                values[valuesById[1] = "File"] = 1;
                return values;
            })();

            v1.SectermSftpCreate = (function() {

                /**
                 * Properties of a SectermSftpCreate.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermSftpCreate
                 * @property {sectran_chard.secterm.v1.FileType|null} [FileType] SectermSftpCreate FileType
                 * @property {string|null} [Path] SectermSftpCreate Path
                 */

                /**
                 * Constructs a new SectermSftpCreate.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermSftpCreate.
                 * @implements ISectermSftpCreate
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermSftpCreate=} [properties] Properties to set
                 */
                function SectermSftpCreate(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermSftpCreate FileType.
                 * @member {sectran_chard.secterm.v1.FileType} FileType
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @instance
                 */
                SectermSftpCreate.prototype.FileType = 0;

                /**
                 * SectermSftpCreate Path.
                 * @member {string} Path
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @instance
                 */
                SectermSftpCreate.prototype.Path = "";

                /**
                 * Creates a new SectermSftpCreate instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpCreate=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermSftpCreate} SectermSftpCreate instance
                 */
                SectermSftpCreate.create = function create(properties) {
                    return new SectermSftpCreate(properties);
                };

                /**
                 * Encodes the specified SectermSftpCreate message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpCreate.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpCreate} message SectermSftpCreate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpCreate.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.FileType != null && Object.hasOwnProperty.call(message, "FileType"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FileType);
                    if (message.Path != null && Object.hasOwnProperty.call(message, "Path"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.Path);
                    return writer;
                };

                /**
                 * Encodes the specified SectermSftpCreate message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpCreate.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpCreate} message SectermSftpCreate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpCreate.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermSftpCreate message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermSftpCreate} SectermSftpCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpCreate.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermSftpCreate();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.FileType = reader.int32();
                                break;
                            }
                        case 2: {
                                message.Path = reader.string();
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
                 * Decodes a SectermSftpCreate message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermSftpCreate} SectermSftpCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpCreate.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermSftpCreate message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermSftpCreate.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.FileType != null && message.hasOwnProperty("FileType"))
                        switch (message.FileType) {
                        default:
                            return "FileType: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        if (!$util.isString(message.Path))
                            return "Path: string expected";
                    return null;
                };

                /**
                 * Creates a SectermSftpCreate message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermSftpCreate} SectermSftpCreate
                 */
                SectermSftpCreate.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermSftpCreate)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermSftpCreate();
                    switch (object.FileType) {
                    default:
                        if (typeof object.FileType === "number") {
                            message.FileType = object.FileType;
                            break;
                        }
                        break;
                    case "Dir":
                    case 0:
                        message.FileType = 0;
                        break;
                    case "File":
                    case 1:
                        message.FileType = 1;
                        break;
                    }
                    if (object.Path != null)
                        message.Path = String(object.Path);
                    return message;
                };

                /**
                 * Creates a plain object from a SectermSftpCreate message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermSftpCreate} message SectermSftpCreate
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermSftpCreate.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.FileType = options.enums === String ? "Dir" : 0;
                        object.Path = "";
                    }
                    if (message.FileType != null && message.hasOwnProperty("FileType"))
                        object.FileType = options.enums === String ? $root.sectran_chard.secterm.v1.FileType[message.FileType] === undefined ? message.FileType : $root.sectran_chard.secterm.v1.FileType[message.FileType] : message.FileType;
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        object.Path = message.Path;
                    return object;
                };

                /**
                 * Converts this SectermSftpCreate to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermSftpCreate.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermSftpCreate
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermSftpCreate
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermSftpCreate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermSftpCreate";
                };

                return SectermSftpCreate;
            })();

            v1.SectermSftpMove = (function() {

                /**
                 * Properties of a SectermSftpMove.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermSftpMove
                 * @property {string|null} [OriginPath] SectermSftpMove OriginPath
                 * @property {string|null} [NewPath] SectermSftpMove NewPath
                 */

                /**
                 * Constructs a new SectermSftpMove.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermSftpMove.
                 * @implements ISectermSftpMove
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermSftpMove=} [properties] Properties to set
                 */
                function SectermSftpMove(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermSftpMove OriginPath.
                 * @member {string} OriginPath
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @instance
                 */
                SectermSftpMove.prototype.OriginPath = "";

                /**
                 * SectermSftpMove NewPath.
                 * @member {string} NewPath
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @instance
                 */
                SectermSftpMove.prototype.NewPath = "";

                /**
                 * Creates a new SectermSftpMove instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpMove=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermSftpMove} SectermSftpMove instance
                 */
                SectermSftpMove.create = function create(properties) {
                    return new SectermSftpMove(properties);
                };

                /**
                 * Encodes the specified SectermSftpMove message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpMove.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpMove} message SectermSftpMove message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpMove.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.OriginPath != null && Object.hasOwnProperty.call(message, "OriginPath"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.OriginPath);
                    if (message.NewPath != null && Object.hasOwnProperty.call(message, "NewPath"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.NewPath);
                    return writer;
                };

                /**
                 * Encodes the specified SectermSftpMove message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpMove.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpMove} message SectermSftpMove message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpMove.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermSftpMove message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermSftpMove} SectermSftpMove
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpMove.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermSftpMove();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.OriginPath = reader.string();
                                break;
                            }
                        case 2: {
                                message.NewPath = reader.string();
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
                 * Decodes a SectermSftpMove message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermSftpMove} SectermSftpMove
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpMove.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermSftpMove message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermSftpMove.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.OriginPath != null && message.hasOwnProperty("OriginPath"))
                        if (!$util.isString(message.OriginPath))
                            return "OriginPath: string expected";
                    if (message.NewPath != null && message.hasOwnProperty("NewPath"))
                        if (!$util.isString(message.NewPath))
                            return "NewPath: string expected";
                    return null;
                };

                /**
                 * Creates a SectermSftpMove message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermSftpMove} SectermSftpMove
                 */
                SectermSftpMove.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermSftpMove)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermSftpMove();
                    if (object.OriginPath != null)
                        message.OriginPath = String(object.OriginPath);
                    if (object.NewPath != null)
                        message.NewPath = String(object.NewPath);
                    return message;
                };

                /**
                 * Creates a plain object from a SectermSftpMove message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermSftpMove} message SectermSftpMove
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermSftpMove.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.OriginPath = "";
                        object.NewPath = "";
                    }
                    if (message.OriginPath != null && message.hasOwnProperty("OriginPath"))
                        object.OriginPath = message.OriginPath;
                    if (message.NewPath != null && message.hasOwnProperty("NewPath"))
                        object.NewPath = message.NewPath;
                    return object;
                };

                /**
                 * Converts this SectermSftpMove to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermSftpMove.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermSftpMove
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermSftpMove
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermSftpMove.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermSftpMove";
                };

                return SectermSftpMove;
            })();

            v1.SectermSftpDelete = (function() {

                /**
                 * Properties of a SectermSftpDelete.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermSftpDelete
                 * @property {string|null} [Path] SectermSftpDelete Path
                 */

                /**
                 * Constructs a new SectermSftpDelete.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermSftpDelete.
                 * @implements ISectermSftpDelete
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermSftpDelete=} [properties] Properties to set
                 */
                function SectermSftpDelete(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermSftpDelete Path.
                 * @member {string} Path
                 * @memberof sectran_chard.secterm.v1.SectermSftpDelete
                 * @instance
                 */
                SectermSftpDelete.prototype.Path = "";

                /**
                 * Creates a new SectermSftpDelete instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermSftpDelete
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDelete=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermSftpDelete} SectermSftpDelete instance
                 */
                SectermSftpDelete.create = function create(properties) {
                    return new SectermSftpDelete(properties);
                };

                /**
                 * Encodes the specified SectermSftpDelete message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDelete.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermSftpDelete
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDelete} message SectermSftpDelete message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpDelete.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Path != null && Object.hasOwnProperty.call(message, "Path"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Path);
                    return writer;
                };

                /**
                 * Encodes the specified SectermSftpDelete message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDelete.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpDelete
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDelete} message SectermSftpDelete message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpDelete.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermSftpDelete message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermSftpDelete
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermSftpDelete} SectermSftpDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpDelete.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermSftpDelete();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.Path = reader.string();
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
                 * Decodes a SectermSftpDelete message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpDelete
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermSftpDelete} SectermSftpDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpDelete.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermSftpDelete message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermSftpDelete
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermSftpDelete.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        if (!$util.isString(message.Path))
                            return "Path: string expected";
                    return null;
                };

                /**
                 * Creates a SectermSftpDelete message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpDelete
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermSftpDelete} SectermSftpDelete
                 */
                SectermSftpDelete.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermSftpDelete)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermSftpDelete();
                    if (object.Path != null)
                        message.Path = String(object.Path);
                    return message;
                };

                /**
                 * Creates a plain object from a SectermSftpDelete message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpDelete
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermSftpDelete} message SectermSftpDelete
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermSftpDelete.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.Path = "";
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        object.Path = message.Path;
                    return object;
                };

                /**
                 * Converts this SectermSftpDelete to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermSftpDelete
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermSftpDelete.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermSftpDelete
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermSftpDelete
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermSftpDelete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermSftpDelete";
                };

                return SectermSftpDelete;
            })();

            v1.SectermSftpDownloadReq = (function() {

                /**
                 * Properties of a SectermSftpDownloadReq.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermSftpDownloadReq
                 * @property {string|null} [Path] SectermSftpDownloadReq Path
                 */

                /**
                 * Constructs a new SectermSftpDownloadReq.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermSftpDownloadReq.
                 * @implements ISectermSftpDownloadReq
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermSftpDownloadReq=} [properties] Properties to set
                 */
                function SectermSftpDownloadReq(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermSftpDownloadReq Path.
                 * @member {string} Path
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadReq
                 * @instance
                 */
                SectermSftpDownloadReq.prototype.Path = "";

                /**
                 * Creates a new SectermSftpDownloadReq instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDownloadReq=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermSftpDownloadReq} SectermSftpDownloadReq instance
                 */
                SectermSftpDownloadReq.create = function create(properties) {
                    return new SectermSftpDownloadReq(properties);
                };

                /**
                 * Encodes the specified SectermSftpDownloadReq message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDownloadReq.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDownloadReq} message SectermSftpDownloadReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpDownloadReq.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Path != null && Object.hasOwnProperty.call(message, "Path"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Path);
                    return writer;
                };

                /**
                 * Encodes the specified SectermSftpDownloadReq message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDownloadReq.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDownloadReq} message SectermSftpDownloadReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpDownloadReq.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermSftpDownloadReq message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermSftpDownloadReq} SectermSftpDownloadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpDownloadReq.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermSftpDownloadReq();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.Path = reader.string();
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
                 * Decodes a SectermSftpDownloadReq message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermSftpDownloadReq} SectermSftpDownloadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpDownloadReq.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermSftpDownloadReq message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadReq
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermSftpDownloadReq.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        if (!$util.isString(message.Path))
                            return "Path: string expected";
                    return null;
                };

                /**
                 * Creates a SectermSftpDownloadReq message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadReq
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermSftpDownloadReq} SectermSftpDownloadReq
                 */
                SectermSftpDownloadReq.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermSftpDownloadReq)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermSftpDownloadReq();
                    if (object.Path != null)
                        message.Path = String(object.Path);
                    return message;
                };

                /**
                 * Creates a plain object from a SectermSftpDownloadReq message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermSftpDownloadReq} message SectermSftpDownloadReq
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermSftpDownloadReq.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.Path = "";
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        object.Path = message.Path;
                    return object;
                };

                /**
                 * Converts this SectermSftpDownloadReq to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadReq
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermSftpDownloadReq.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermSftpDownloadReq
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadReq
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermSftpDownloadReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermSftpDownloadReq";
                };

                return SectermSftpDownloadReq;
            })();

            v1.SectermSftpDownloadRsp = (function() {

                /**
                 * Properties of a SectermSftpDownloadRsp.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermSftpDownloadRsp
                 * @property {string|null} [DownloadUrl] SectermSftpDownloadRsp DownloadUrl
                 */

                /**
                 * Constructs a new SectermSftpDownloadRsp.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermSftpDownloadRsp.
                 * @implements ISectermSftpDownloadRsp
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermSftpDownloadRsp=} [properties] Properties to set
                 */
                function SectermSftpDownloadRsp(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermSftpDownloadRsp DownloadUrl.
                 * @member {string} DownloadUrl
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadRsp
                 * @instance
                 */
                SectermSftpDownloadRsp.prototype.DownloadUrl = "";

                /**
                 * Creates a new SectermSftpDownloadRsp instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadRsp
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDownloadRsp=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermSftpDownloadRsp} SectermSftpDownloadRsp instance
                 */
                SectermSftpDownloadRsp.create = function create(properties) {
                    return new SectermSftpDownloadRsp(properties);
                };

                /**
                 * Encodes the specified SectermSftpDownloadRsp message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDownloadRsp.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadRsp
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDownloadRsp} message SectermSftpDownloadRsp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpDownloadRsp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.DownloadUrl != null && Object.hasOwnProperty.call(message, "DownloadUrl"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.DownloadUrl);
                    return writer;
                };

                /**
                 * Encodes the specified SectermSftpDownloadRsp message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDownloadRsp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadRsp
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpDownloadRsp} message SectermSftpDownloadRsp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpDownloadRsp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermSftpDownloadRsp message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadRsp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermSftpDownloadRsp} SectermSftpDownloadRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpDownloadRsp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermSftpDownloadRsp();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.DownloadUrl = reader.string();
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
                 * Decodes a SectermSftpDownloadRsp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadRsp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermSftpDownloadRsp} SectermSftpDownloadRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpDownloadRsp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermSftpDownloadRsp message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadRsp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermSftpDownloadRsp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.DownloadUrl != null && message.hasOwnProperty("DownloadUrl"))
                        if (!$util.isString(message.DownloadUrl))
                            return "DownloadUrl: string expected";
                    return null;
                };

                /**
                 * Creates a SectermSftpDownloadRsp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadRsp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermSftpDownloadRsp} SectermSftpDownloadRsp
                 */
                SectermSftpDownloadRsp.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermSftpDownloadRsp)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermSftpDownloadRsp();
                    if (object.DownloadUrl != null)
                        message.DownloadUrl = String(object.DownloadUrl);
                    return message;
                };

                /**
                 * Creates a plain object from a SectermSftpDownloadRsp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadRsp
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermSftpDownloadRsp} message SectermSftpDownloadRsp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermSftpDownloadRsp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.DownloadUrl = "";
                    if (message.DownloadUrl != null && message.hasOwnProperty("DownloadUrl"))
                        object.DownloadUrl = message.DownloadUrl;
                    return object;
                };

                /**
                 * Converts this SectermSftpDownloadRsp to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadRsp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermSftpDownloadRsp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermSftpDownloadRsp
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermSftpDownloadRsp
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermSftpDownloadRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermSftpDownloadRsp";
                };

                return SectermSftpDownloadRsp;
            })();

            v1.SectermSftpUploadReq = (function() {

                /**
                 * Properties of a SectermSftpUploadReq.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermSftpUploadReq
                 * @property {string|null} [Path] SectermSftpUploadReq Path
                 * @property {string|null} [Token] SectermSftpUploadReq Token
                 */

                /**
                 * Constructs a new SectermSftpUploadReq.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermSftpUploadReq.
                 * @implements ISectermSftpUploadReq
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermSftpUploadReq=} [properties] Properties to set
                 */
                function SectermSftpUploadReq(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermSftpUploadReq Path.
                 * @member {string} Path
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @instance
                 */
                SectermSftpUploadReq.prototype.Path = "";

                /**
                 * SectermSftpUploadReq Token.
                 * @member {string} Token
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @instance
                 */
                SectermSftpUploadReq.prototype.Token = "";

                /**
                 * Creates a new SectermSftpUploadReq instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpUploadReq=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermSftpUploadReq} SectermSftpUploadReq instance
                 */
                SectermSftpUploadReq.create = function create(properties) {
                    return new SectermSftpUploadReq(properties);
                };

                /**
                 * Encodes the specified SectermSftpUploadReq message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpUploadReq.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpUploadReq} message SectermSftpUploadReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpUploadReq.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Path != null && Object.hasOwnProperty.call(message, "Path"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Path);
                    if (message.Token != null && Object.hasOwnProperty.call(message, "Token"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.Token);
                    return writer;
                };

                /**
                 * Encodes the specified SectermSftpUploadReq message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpUploadReq.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermSftpUploadReq} message SectermSftpUploadReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermSftpUploadReq.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermSftpUploadReq message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermSftpUploadReq} SectermSftpUploadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpUploadReq.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermSftpUploadReq();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.Path = reader.string();
                                break;
                            }
                        case 2: {
                                message.Token = reader.string();
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
                 * Decodes a SectermSftpUploadReq message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermSftpUploadReq} SectermSftpUploadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermSftpUploadReq.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermSftpUploadReq message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermSftpUploadReq.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        if (!$util.isString(message.Path))
                            return "Path: string expected";
                    if (message.Token != null && message.hasOwnProperty("Token"))
                        if (!$util.isString(message.Token))
                            return "Token: string expected";
                    return null;
                };

                /**
                 * Creates a SectermSftpUploadReq message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermSftpUploadReq} SectermSftpUploadReq
                 */
                SectermSftpUploadReq.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermSftpUploadReq)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermSftpUploadReq();
                    if (object.Path != null)
                        message.Path = String(object.Path);
                    if (object.Token != null)
                        message.Token = String(object.Token);
                    return message;
                };

                /**
                 * Creates a plain object from a SectermSftpUploadReq message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermSftpUploadReq} message SectermSftpUploadReq
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermSftpUploadReq.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.Path = "";
                        object.Token = "";
                    }
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        object.Path = message.Path;
                    if (message.Token != null && message.hasOwnProperty("Token"))
                        object.Token = message.Token;
                    return object;
                };

                /**
                 * Converts this SectermSftpUploadReq to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermSftpUploadReq.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermSftpUploadReq
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermSftpUploadReq
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermSftpUploadReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermSftpUploadReq";
                };

                return SectermSftpUploadReq;
            })();

            return v1;
        })();

        return secterm;
    })();

    return sectran_chard;
})();

export { $root as default };
