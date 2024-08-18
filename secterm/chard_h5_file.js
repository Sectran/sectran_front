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

            v1.SectermFileInfo = (function() {

                /**
                 * Properties of a SectermFileInfo.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermFileInfo
                 * @property {string|null} [Name] SectermFileInfo Name
                 * @property {string|null} [Path] SectermFileInfo Path
                 * @property {number|Long|null} [ModTime] SectermFileInfo ModTime
                 * @property {number|Long|null} [Size] SectermFileInfo Size
                 * @property {number|null} [Mode] SectermFileInfo Mode
                 * @property {boolean|null} [IsDir] SectermFileInfo IsDir
                 */

                /**
                 * Constructs a new SectermFileInfo.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermFileInfo.
                 * @implements ISectermFileInfo
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermFileInfo=} [properties] Properties to set
                 */
                function SectermFileInfo(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermFileInfo Name.
                 * @member {string} Name
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @instance
                 */
                SectermFileInfo.prototype.Name = "";

                /**
                 * SectermFileInfo Path.
                 * @member {string} Path
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @instance
                 */
                SectermFileInfo.prototype.Path = "";

                /**
                 * SectermFileInfo ModTime.
                 * @member {number|Long} ModTime
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @instance
                 */
                SectermFileInfo.prototype.ModTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * SectermFileInfo Size.
                 * @member {number|Long} Size
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @instance
                 */
                SectermFileInfo.prototype.Size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * SectermFileInfo Mode.
                 * @member {number} Mode
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @instance
                 */
                SectermFileInfo.prototype.Mode = 0;

                /**
                 * SectermFileInfo IsDir.
                 * @member {boolean} IsDir
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @instance
                 */
                SectermFileInfo.prototype.IsDir = false;

                /**
                 * Creates a new SectermFileInfo instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileInfo=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermFileInfo} SectermFileInfo instance
                 */
                SectermFileInfo.create = function create(properties) {
                    return new SectermFileInfo(properties);
                };

                /**
                 * Encodes the specified SectermFileInfo message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileInfo.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileInfo} message SectermFileInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
                    if (message.Path != null && Object.hasOwnProperty.call(message, "Path"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.Path);
                    if (message.ModTime != null && Object.hasOwnProperty.call(message, "ModTime"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.ModTime);
                    if (message.Size != null && Object.hasOwnProperty.call(message, "Size"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.Size);
                    if (message.Mode != null && Object.hasOwnProperty.call(message, "Mode"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.Mode);
                    if (message.IsDir != null && Object.hasOwnProperty.call(message, "IsDir"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.IsDir);
                    return writer;
                };

                /**
                 * Encodes the specified SectermFileInfo message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileInfo} message SectermFileInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermFileInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermFileInfo} SectermFileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermFileInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.Name = reader.string();
                                break;
                            }
                        case 2: {
                                message.Path = reader.string();
                                break;
                            }
                        case 3: {
                                message.ModTime = reader.uint64();
                                break;
                            }
                        case 4: {
                                message.Size = reader.uint64();
                                break;
                            }
                        case 5: {
                                message.Mode = reader.uint32();
                                break;
                            }
                        case 6: {
                                message.IsDir = reader.bool();
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
                 * Decodes a SectermFileInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermFileInfo} SectermFileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermFileInfo message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermFileInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Name != null && message.hasOwnProperty("Name"))
                        if (!$util.isString(message.Name))
                            return "Name: string expected";
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        if (!$util.isString(message.Path))
                            return "Path: string expected";
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
                    return null;
                };

                /**
                 * Creates a SectermFileInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermFileInfo} SectermFileInfo
                 */
                SectermFileInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermFileInfo)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermFileInfo();
                    if (object.Name != null)
                        message.Name = String(object.Name);
                    if (object.Path != null)
                        message.Path = String(object.Path);
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
                            (message.Size = $util.Long.fromValue(object.Size)).unsigned = true;
                        else if (typeof object.Size === "string")
                            message.Size = parseInt(object.Size, 10);
                        else if (typeof object.Size === "number")
                            message.Size = object.Size;
                        else if (typeof object.Size === "object")
                            message.Size = new $util.LongBits(object.Size.low >>> 0, object.Size.high >>> 0).toNumber(true);
                    if (object.Mode != null)
                        message.Mode = object.Mode >>> 0;
                    if (object.IsDir != null)
                        message.IsDir = Boolean(object.IsDir);
                    return message;
                };

                /**
                 * Creates a plain object from a SectermFileInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermFileInfo} message SectermFileInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermFileInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.Name = "";
                        object.Path = "";
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.ModTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.ModTime = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.Size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.Size = options.longs === String ? "0" : 0;
                        object.Mode = 0;
                        object.IsDir = false;
                    }
                    if (message.Name != null && message.hasOwnProperty("Name"))
                        object.Name = message.Name;
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        object.Path = message.Path;
                    if (message.ModTime != null && message.hasOwnProperty("ModTime"))
                        if (typeof message.ModTime === "number")
                            object.ModTime = options.longs === String ? String(message.ModTime) : message.ModTime;
                        else
                            object.ModTime = options.longs === String ? $util.Long.prototype.toString.call(message.ModTime) : options.longs === Number ? new $util.LongBits(message.ModTime.low >>> 0, message.ModTime.high >>> 0).toNumber(true) : message.ModTime;
                    if (message.Size != null && message.hasOwnProperty("Size"))
                        if (typeof message.Size === "number")
                            object.Size = options.longs === String ? String(message.Size) : message.Size;
                        else
                            object.Size = options.longs === String ? $util.Long.prototype.toString.call(message.Size) : options.longs === Number ? new $util.LongBits(message.Size.low >>> 0, message.Size.high >>> 0).toNumber(true) : message.Size;
                    if (message.Mode != null && message.hasOwnProperty("Mode"))
                        object.Mode = message.Mode;
                    if (message.IsDir != null && message.hasOwnProperty("IsDir"))
                        object.IsDir = message.IsDir;
                    return object;
                };

                /**
                 * Converts this SectermFileInfo to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermFileInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermFileInfo
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermFileInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermFileInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermFileInfo";
                };

                return SectermFileInfo;
            })();

            v1.SectermFileListRequest = (function() {

                /**
                 * Properties of a SectermFileListRequest.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermFileListRequest
                 * @property {string|null} [Path] SectermFileListRequest Path
                 */

                /**
                 * Constructs a new SectermFileListRequest.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermFileListRequest.
                 * @implements ISectermFileListRequest
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermFileListRequest=} [properties] Properties to set
                 */
                function SectermFileListRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermFileListRequest Path.
                 * @member {string} Path
                 * @memberof sectran_chard.secterm.v1.SectermFileListRequest
                 * @instance
                 */
                SectermFileListRequest.prototype.Path = "";

                /**
                 * Creates a new SectermFileListRequest instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermFileListRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileListRequest=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermFileListRequest} SectermFileListRequest instance
                 */
                SectermFileListRequest.create = function create(properties) {
                    return new SectermFileListRequest(properties);
                };

                /**
                 * Encodes the specified SectermFileListRequest message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileListRequest.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermFileListRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileListRequest} message SectermFileListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileListRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Path != null && Object.hasOwnProperty.call(message, "Path"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Path);
                    return writer;
                };

                /**
                 * Encodes the specified SectermFileListRequest message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileListRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileListRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileListRequest} message SectermFileListRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileListRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermFileListRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermFileListRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermFileListRequest} SectermFileListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileListRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermFileListRequest();
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
                 * Decodes a SectermFileListRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileListRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermFileListRequest} SectermFileListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileListRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermFileListRequest message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermFileListRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermFileListRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        if (!$util.isString(message.Path))
                            return "Path: string expected";
                    return null;
                };

                /**
                 * Creates a SectermFileListRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermFileListRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermFileListRequest} SectermFileListRequest
                 */
                SectermFileListRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermFileListRequest)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermFileListRequest();
                    if (object.Path != null)
                        message.Path = String(object.Path);
                    return message;
                };

                /**
                 * Creates a plain object from a SectermFileListRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermFileListRequest
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermFileListRequest} message SectermFileListRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermFileListRequest.toObject = function toObject(message, options) {
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
                 * Converts this SectermFileListRequest to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermFileListRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermFileListRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermFileListRequest
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermFileListRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermFileListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermFileListRequest";
                };

                return SectermFileListRequest;
            })();

            v1.SectermFileListResponse = (function() {

                /**
                 * Properties of a SectermFileListResponse.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermFileListResponse
                 * @property {Array.<sectran_chard.secterm.v1.ISectermFileInfo>|null} [FileInfo] SectermFileListResponse FileInfo
                 */

                /**
                 * Constructs a new SectermFileListResponse.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermFileListResponse.
                 * @implements ISectermFileListResponse
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermFileListResponse=} [properties] Properties to set
                 */
                function SectermFileListResponse(properties) {
                    this.FileInfo = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermFileListResponse FileInfo.
                 * @member {Array.<sectran_chard.secterm.v1.ISectermFileInfo>} FileInfo
                 * @memberof sectran_chard.secterm.v1.SectermFileListResponse
                 * @instance
                 */
                SectermFileListResponse.prototype.FileInfo = $util.emptyArray;

                /**
                 * Creates a new SectermFileListResponse instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermFileListResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileListResponse=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermFileListResponse} SectermFileListResponse instance
                 */
                SectermFileListResponse.create = function create(properties) {
                    return new SectermFileListResponse(properties);
                };

                /**
                 * Encodes the specified SectermFileListResponse message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileListResponse.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermFileListResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileListResponse} message SectermFileListResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileListResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.FileInfo != null && message.FileInfo.length)
                        for (let i = 0; i < message.FileInfo.length; ++i)
                            $root.sectran_chard.secterm.v1.SectermFileInfo.encode(message.FileInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SectermFileListResponse message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileListResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileListResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileListResponse} message SectermFileListResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileListResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermFileListResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermFileListResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermFileListResponse} SectermFileListResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileListResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermFileListResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.FileInfo && message.FileInfo.length))
                                    message.FileInfo = [];
                                message.FileInfo.push($root.sectran_chard.secterm.v1.SectermFileInfo.decode(reader, reader.uint32()));
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
                 * Decodes a SectermFileListResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileListResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermFileListResponse} SectermFileListResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileListResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermFileListResponse message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermFileListResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermFileListResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.FileInfo != null && message.hasOwnProperty("FileInfo")) {
                        if (!Array.isArray(message.FileInfo))
                            return "FileInfo: array expected";
                        for (let i = 0; i < message.FileInfo.length; ++i) {
                            let error = $root.sectran_chard.secterm.v1.SectermFileInfo.verify(message.FileInfo[i]);
                            if (error)
                                return "FileInfo." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SectermFileListResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermFileListResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermFileListResponse} SectermFileListResponse
                 */
                SectermFileListResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermFileListResponse)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermFileListResponse();
                    if (object.FileInfo) {
                        if (!Array.isArray(object.FileInfo))
                            throw TypeError(".sectran_chard.secterm.v1.SectermFileListResponse.FileInfo: array expected");
                        message.FileInfo = [];
                        for (let i = 0; i < object.FileInfo.length; ++i) {
                            if (typeof object.FileInfo[i] !== "object")
                                throw TypeError(".sectran_chard.secterm.v1.SectermFileListResponse.FileInfo: object expected");
                            message.FileInfo[i] = $root.sectran_chard.secterm.v1.SectermFileInfo.fromObject(object.FileInfo[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SectermFileListResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermFileListResponse
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermFileListResponse} message SectermFileListResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermFileListResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.FileInfo = [];
                    if (message.FileInfo && message.FileInfo.length) {
                        object.FileInfo = [];
                        for (let j = 0; j < message.FileInfo.length; ++j)
                            object.FileInfo[j] = $root.sectran_chard.secterm.v1.SectermFileInfo.toObject(message.FileInfo[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this SectermFileListResponse to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermFileListResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermFileListResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermFileListResponse
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermFileListResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermFileListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermFileListResponse";
                };

                return SectermFileListResponse;
            })();

            v1.SectermFileMove = (function() {

                /**
                 * Properties of a SectermFileMove.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermFileMove
                 * @property {string|null} [Path] SectermFileMove Path
                 * @property {string|null} [DstPath] SectermFileMove DstPath
                 * @property {boolean|null} [force] SectermFileMove force
                 */

                /**
                 * Constructs a new SectermFileMove.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermFileMove.
                 * @implements ISectermFileMove
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermFileMove=} [properties] Properties to set
                 */
                function SectermFileMove(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermFileMove Path.
                 * @member {string} Path
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @instance
                 */
                SectermFileMove.prototype.Path = "";

                /**
                 * SectermFileMove DstPath.
                 * @member {string} DstPath
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @instance
                 */
                SectermFileMove.prototype.DstPath = "";

                /**
                 * SectermFileMove force.
                 * @member {boolean} force
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @instance
                 */
                SectermFileMove.prototype.force = false;

                /**
                 * Creates a new SectermFileMove instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileMove=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermFileMove} SectermFileMove instance
                 */
                SectermFileMove.create = function create(properties) {
                    return new SectermFileMove(properties);
                };

                /**
                 * Encodes the specified SectermFileMove message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileMove.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileMove} message SectermFileMove message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileMove.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Path != null && Object.hasOwnProperty.call(message, "Path"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Path);
                    if (message.DstPath != null && Object.hasOwnProperty.call(message, "DstPath"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.DstPath);
                    if (message.force != null && Object.hasOwnProperty.call(message, "force"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.force);
                    return writer;
                };

                /**
                 * Encodes the specified SectermFileMove message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileMove.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileMove} message SectermFileMove message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileMove.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermFileMove message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermFileMove} SectermFileMove
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileMove.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermFileMove();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.Path = reader.string();
                                break;
                            }
                        case 2: {
                                message.DstPath = reader.string();
                                break;
                            }
                        case 3: {
                                message.force = reader.bool();
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
                 * Decodes a SectermFileMove message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermFileMove} SectermFileMove
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileMove.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermFileMove message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermFileMove.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        if (!$util.isString(message.Path))
                            return "Path: string expected";
                    if (message.DstPath != null && message.hasOwnProperty("DstPath"))
                        if (!$util.isString(message.DstPath))
                            return "DstPath: string expected";
                    if (message.force != null && message.hasOwnProperty("force"))
                        if (typeof message.force !== "boolean")
                            return "force: boolean expected";
                    return null;
                };

                /**
                 * Creates a SectermFileMove message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermFileMove} SectermFileMove
                 */
                SectermFileMove.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermFileMove)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermFileMove();
                    if (object.Path != null)
                        message.Path = String(object.Path);
                    if (object.DstPath != null)
                        message.DstPath = String(object.DstPath);
                    if (object.force != null)
                        message.force = Boolean(object.force);
                    return message;
                };

                /**
                 * Creates a plain object from a SectermFileMove message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermFileMove} message SectermFileMove
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermFileMove.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.Path = "";
                        object.DstPath = "";
                        object.force = false;
                    }
                    if (message.Path != null && message.hasOwnProperty("Path"))
                        object.Path = message.Path;
                    if (message.DstPath != null && message.hasOwnProperty("DstPath"))
                        object.DstPath = message.DstPath;
                    if (message.force != null && message.hasOwnProperty("force"))
                        object.force = message.force;
                    return object;
                };

                /**
                 * Converts this SectermFileMove to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermFileMove.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermFileMove
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermFileMove
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermFileMove.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermFileMove";
                };

                return SectermFileMove;
            })();

            v1.SectermFileDelete = (function() {

                /**
                 * Properties of a SectermFileDelete.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermFileDelete
                 * @property {Array.<string>|null} [Path] SectermFileDelete Path
                 */

                /**
                 * Constructs a new SectermFileDelete.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermFileDelete.
                 * @implements ISectermFileDelete
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermFileDelete=} [properties] Properties to set
                 */
                function SectermFileDelete(properties) {
                    this.Path = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermFileDelete Path.
                 * @member {Array.<string>} Path
                 * @memberof sectran_chard.secterm.v1.SectermFileDelete
                 * @instance
                 */
                SectermFileDelete.prototype.Path = $util.emptyArray;

                /**
                 * Creates a new SectermFileDelete instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermFileDelete
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileDelete=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermFileDelete} SectermFileDelete instance
                 */
                SectermFileDelete.create = function create(properties) {
                    return new SectermFileDelete(properties);
                };

                /**
                 * Encodes the specified SectermFileDelete message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileDelete.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermFileDelete
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileDelete} message SectermFileDelete message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileDelete.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Path != null && message.Path.length)
                        for (let i = 0; i < message.Path.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Path[i]);
                    return writer;
                };

                /**
                 * Encodes the specified SectermFileDelete message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileDelete.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileDelete
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileDelete} message SectermFileDelete message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileDelete.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermFileDelete message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermFileDelete
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermFileDelete} SectermFileDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileDelete.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermFileDelete();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.Path && message.Path.length))
                                    message.Path = [];
                                message.Path.push(reader.string());
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
                 * Decodes a SectermFileDelete message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileDelete
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermFileDelete} SectermFileDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileDelete.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermFileDelete message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermFileDelete
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermFileDelete.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Path != null && message.hasOwnProperty("Path")) {
                        if (!Array.isArray(message.Path))
                            return "Path: array expected";
                        for (let i = 0; i < message.Path.length; ++i)
                            if (!$util.isString(message.Path[i]))
                                return "Path: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a SectermFileDelete message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermFileDelete
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermFileDelete} SectermFileDelete
                 */
                SectermFileDelete.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermFileDelete)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermFileDelete();
                    if (object.Path) {
                        if (!Array.isArray(object.Path))
                            throw TypeError(".sectran_chard.secterm.v1.SectermFileDelete.Path: array expected");
                        message.Path = [];
                        for (let i = 0; i < object.Path.length; ++i)
                            message.Path[i] = String(object.Path[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SectermFileDelete message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermFileDelete
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermFileDelete} message SectermFileDelete
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermFileDelete.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.Path = [];
                    if (message.Path && message.Path.length) {
                        object.Path = [];
                        for (let j = 0; j < message.Path.length; ++j)
                            object.Path[j] = message.Path[j];
                    }
                    return object;
                };

                /**
                 * Converts this SectermFileDelete to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermFileDelete
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermFileDelete.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermFileDelete
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermFileDelete
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermFileDelete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermFileDelete";
                };

                return SectermFileDelete;
            })();

            v1.SectermFileCreate = (function() {

                /**
                 * Properties of a SectermFileCreate.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermFileCreate
                 * @property {sectran_chard.secterm.v1.ISectermFileInfo|null} [file] SectermFileCreate file
                 */

                /**
                 * Constructs a new SectermFileCreate.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermFileCreate.
                 * @implements ISectermFileCreate
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermFileCreate=} [properties] Properties to set
                 */
                function SectermFileCreate(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermFileCreate file.
                 * @member {sectran_chard.secterm.v1.ISectermFileInfo|null|undefined} file
                 * @memberof sectran_chard.secterm.v1.SectermFileCreate
                 * @instance
                 */
                SectermFileCreate.prototype.file = null;

                /**
                 * Creates a new SectermFileCreate instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermFileCreate
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileCreate=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermFileCreate} SectermFileCreate instance
                 */
                SectermFileCreate.create = function create(properties) {
                    return new SectermFileCreate(properties);
                };

                /**
                 * Encodes the specified SectermFileCreate message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileCreate.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermFileCreate
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileCreate} message SectermFileCreate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileCreate.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                        $root.sectran_chard.secterm.v1.SectermFileInfo.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SectermFileCreate message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileCreate.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileCreate
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileCreate} message SectermFileCreate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileCreate.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermFileCreate message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermFileCreate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermFileCreate} SectermFileCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileCreate.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermFileCreate();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.file = $root.sectran_chard.secterm.v1.SectermFileInfo.decode(reader, reader.uint32());
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
                 * Decodes a SectermFileCreate message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileCreate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermFileCreate} SectermFileCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileCreate.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermFileCreate message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermFileCreate
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermFileCreate.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        let error = $root.sectran_chard.secterm.v1.SectermFileInfo.verify(message.file);
                        if (error)
                            return "file." + error;
                    }
                    return null;
                };

                /**
                 * Creates a SectermFileCreate message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermFileCreate
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermFileCreate} SectermFileCreate
                 */
                SectermFileCreate.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermFileCreate)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermFileCreate();
                    if (object.file != null) {
                        if (typeof object.file !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermFileCreate.file: object expected");
                        message.file = $root.sectran_chard.secterm.v1.SectermFileInfo.fromObject(object.file);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SectermFileCreate message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermFileCreate
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermFileCreate} message SectermFileCreate
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermFileCreate.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.file = null;
                    if (message.file != null && message.hasOwnProperty("file"))
                        object.file = $root.sectran_chard.secterm.v1.SectermFileInfo.toObject(message.file, options);
                    return object;
                };

                /**
                 * Converts this SectermFileCreate to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermFileCreate
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermFileCreate.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermFileCreate
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermFileCreate
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermFileCreate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermFileCreate";
                };

                return SectermFileCreate;
            })();

            v1.SectermFileDownloadReq = (function() {

                /**
                 * Properties of a SectermFileDownloadReq.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermFileDownloadReq
                 * @property {Array.<sectran_chard.secterm.v1.ISectermFileInfo>|null} [FileInfo] SectermFileDownloadReq FileInfo
                 */

                /**
                 * Constructs a new SectermFileDownloadReq.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermFileDownloadReq.
                 * @implements ISectermFileDownloadReq
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermFileDownloadReq=} [properties] Properties to set
                 */
                function SectermFileDownloadReq(properties) {
                    this.FileInfo = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermFileDownloadReq FileInfo.
                 * @member {Array.<sectran_chard.secterm.v1.ISectermFileInfo>} FileInfo
                 * @memberof sectran_chard.secterm.v1.SectermFileDownloadReq
                 * @instance
                 */
                SectermFileDownloadReq.prototype.FileInfo = $util.emptyArray;

                /**
                 * Creates a new SectermFileDownloadReq instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermFileDownloadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileDownloadReq=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermFileDownloadReq} SectermFileDownloadReq instance
                 */
                SectermFileDownloadReq.create = function create(properties) {
                    return new SectermFileDownloadReq(properties);
                };

                /**
                 * Encodes the specified SectermFileDownloadReq message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileDownloadReq.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermFileDownloadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileDownloadReq} message SectermFileDownloadReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileDownloadReq.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.FileInfo != null && message.FileInfo.length)
                        for (let i = 0; i < message.FileInfo.length; ++i)
                            $root.sectran_chard.secterm.v1.SectermFileInfo.encode(message.FileInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SectermFileDownloadReq message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileDownloadReq.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileDownloadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileDownloadReq} message SectermFileDownloadReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileDownloadReq.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermFileDownloadReq message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermFileDownloadReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermFileDownloadReq} SectermFileDownloadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileDownloadReq.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermFileDownloadReq();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.FileInfo && message.FileInfo.length))
                                    message.FileInfo = [];
                                message.FileInfo.push($root.sectran_chard.secterm.v1.SectermFileInfo.decode(reader, reader.uint32()));
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
                 * Decodes a SectermFileDownloadReq message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileDownloadReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermFileDownloadReq} SectermFileDownloadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileDownloadReq.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermFileDownloadReq message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermFileDownloadReq
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermFileDownloadReq.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.FileInfo != null && message.hasOwnProperty("FileInfo")) {
                        if (!Array.isArray(message.FileInfo))
                            return "FileInfo: array expected";
                        for (let i = 0; i < message.FileInfo.length; ++i) {
                            let error = $root.sectran_chard.secterm.v1.SectermFileInfo.verify(message.FileInfo[i]);
                            if (error)
                                return "FileInfo." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SectermFileDownloadReq message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermFileDownloadReq
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermFileDownloadReq} SectermFileDownloadReq
                 */
                SectermFileDownloadReq.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermFileDownloadReq)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermFileDownloadReq();
                    if (object.FileInfo) {
                        if (!Array.isArray(object.FileInfo))
                            throw TypeError(".sectran_chard.secterm.v1.SectermFileDownloadReq.FileInfo: array expected");
                        message.FileInfo = [];
                        for (let i = 0; i < object.FileInfo.length; ++i) {
                            if (typeof object.FileInfo[i] !== "object")
                                throw TypeError(".sectran_chard.secterm.v1.SectermFileDownloadReq.FileInfo: object expected");
                            message.FileInfo[i] = $root.sectran_chard.secterm.v1.SectermFileInfo.fromObject(object.FileInfo[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SectermFileDownloadReq message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermFileDownloadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermFileDownloadReq} message SectermFileDownloadReq
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermFileDownloadReq.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.FileInfo = [];
                    if (message.FileInfo && message.FileInfo.length) {
                        object.FileInfo = [];
                        for (let j = 0; j < message.FileInfo.length; ++j)
                            object.FileInfo[j] = $root.sectran_chard.secterm.v1.SectermFileInfo.toObject(message.FileInfo[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this SectermFileDownloadReq to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermFileDownloadReq
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermFileDownloadReq.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermFileDownloadReq
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermFileDownloadReq
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermFileDownloadReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermFileDownloadReq";
                };

                return SectermFileDownloadReq;
            })();

            v1.SectermFileUploadReq = (function() {

                /**
                 * Properties of a SectermFileUploadReq.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermFileUploadReq
                 * @property {string|null} [DstPath] SectermFileUploadReq DstPath
                 * @property {Array.<sectran_chard.secterm.v1.ISectermFileInfo>|null} [FileInfo] SectermFileUploadReq FileInfo
                 */

                /**
                 * Constructs a new SectermFileUploadReq.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermFileUploadReq.
                 * @implements ISectermFileUploadReq
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermFileUploadReq=} [properties] Properties to set
                 */
                function SectermFileUploadReq(properties) {
                    this.FileInfo = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermFileUploadReq DstPath.
                 * @member {string} DstPath
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @instance
                 */
                SectermFileUploadReq.prototype.DstPath = "";

                /**
                 * SectermFileUploadReq FileInfo.
                 * @member {Array.<sectran_chard.secterm.v1.ISectermFileInfo>} FileInfo
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @instance
                 */
                SectermFileUploadReq.prototype.FileInfo = $util.emptyArray;

                /**
                 * Creates a new SectermFileUploadReq instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileUploadReq=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermFileUploadReq} SectermFileUploadReq instance
                 */
                SectermFileUploadReq.create = function create(properties) {
                    return new SectermFileUploadReq(properties);
                };

                /**
                 * Encodes the specified SectermFileUploadReq message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileUploadReq.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileUploadReq} message SectermFileUploadReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileUploadReq.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.DstPath != null && Object.hasOwnProperty.call(message, "DstPath"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.DstPath);
                    if (message.FileInfo != null && message.FileInfo.length)
                        for (let i = 0; i < message.FileInfo.length; ++i)
                            $root.sectran_chard.secterm.v1.SectermFileInfo.encode(message.FileInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SectermFileUploadReq message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileUploadReq.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileUploadReq} message SectermFileUploadReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileUploadReq.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermFileUploadReq message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermFileUploadReq} SectermFileUploadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileUploadReq.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermFileUploadReq();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.DstPath = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.FileInfo && message.FileInfo.length))
                                    message.FileInfo = [];
                                message.FileInfo.push($root.sectran_chard.secterm.v1.SectermFileInfo.decode(reader, reader.uint32()));
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
                 * Decodes a SectermFileUploadReq message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermFileUploadReq} SectermFileUploadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileUploadReq.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermFileUploadReq message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermFileUploadReq.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.DstPath != null && message.hasOwnProperty("DstPath"))
                        if (!$util.isString(message.DstPath))
                            return "DstPath: string expected";
                    if (message.FileInfo != null && message.hasOwnProperty("FileInfo")) {
                        if (!Array.isArray(message.FileInfo))
                            return "FileInfo: array expected";
                        for (let i = 0; i < message.FileInfo.length; ++i) {
                            let error = $root.sectran_chard.secterm.v1.SectermFileInfo.verify(message.FileInfo[i]);
                            if (error)
                                return "FileInfo." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SectermFileUploadReq message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermFileUploadReq} SectermFileUploadReq
                 */
                SectermFileUploadReq.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermFileUploadReq)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermFileUploadReq();
                    if (object.DstPath != null)
                        message.DstPath = String(object.DstPath);
                    if (object.FileInfo) {
                        if (!Array.isArray(object.FileInfo))
                            throw TypeError(".sectran_chard.secterm.v1.SectermFileUploadReq.FileInfo: array expected");
                        message.FileInfo = [];
                        for (let i = 0; i < object.FileInfo.length; ++i) {
                            if (typeof object.FileInfo[i] !== "object")
                                throw TypeError(".sectran_chard.secterm.v1.SectermFileUploadReq.FileInfo: object expected");
                            message.FileInfo[i] = $root.sectran_chard.secterm.v1.SectermFileInfo.fromObject(object.FileInfo[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SectermFileUploadReq message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermFileUploadReq} message SectermFileUploadReq
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermFileUploadReq.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.FileInfo = [];
                    if (options.defaults)
                        object.DstPath = "";
                    if (message.DstPath != null && message.hasOwnProperty("DstPath"))
                        object.DstPath = message.DstPath;
                    if (message.FileInfo && message.FileInfo.length) {
                        object.FileInfo = [];
                        for (let j = 0; j < message.FileInfo.length; ++j)
                            object.FileInfo[j] = $root.sectran_chard.secterm.v1.SectermFileInfo.toObject(message.FileInfo[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this SectermFileUploadReq to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermFileUploadReq.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermFileUploadReq
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermFileUploadReq
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermFileUploadReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermFileUploadReq";
                };

                return SectermFileUploadReq;
            })();

            v1.SectermFileData = (function() {

                /**
                 * Properties of a SectermFileData.
                 * @memberof sectran_chard.secterm.v1
                 * @interface ISectermFileData
                 * @property {sectran_chard.secterm.v1.ISectermFileInfo|null} [file] SectermFileData file
                 * @property {Uint8Array|null} [data] SectermFileData data
                 */

                /**
                 * Constructs a new SectermFileData.
                 * @memberof sectran_chard.secterm.v1
                 * @classdesc Represents a SectermFileData.
                 * @implements ISectermFileData
                 * @constructor
                 * @param {sectran_chard.secterm.v1.ISectermFileData=} [properties] Properties to set
                 */
                function SectermFileData(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SectermFileData file.
                 * @member {sectran_chard.secterm.v1.ISectermFileInfo|null|undefined} file
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @instance
                 */
                SectermFileData.prototype.file = null;

                /**
                 * SectermFileData data.
                 * @member {Uint8Array} data
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @instance
                 */
                SectermFileData.prototype.data = $util.newBuffer([]);

                /**
                 * Creates a new SectermFileData instance using the specified properties.
                 * @function create
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileData=} [properties] Properties to set
                 * @returns {sectran_chard.secterm.v1.SectermFileData} SectermFileData instance
                 */
                SectermFileData.create = function create(properties) {
                    return new SectermFileData(properties);
                };

                /**
                 * Encodes the specified SectermFileData message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileData.verify|verify} messages.
                 * @function encode
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileData} message SectermFileData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileData.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                        $root.sectran_chard.secterm.v1.SectermFileInfo.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                    return writer;
                };

                /**
                 * Encodes the specified SectermFileData message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @static
                 * @param {sectran_chard.secterm.v1.ISectermFileData} message SectermFileData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SectermFileData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SectermFileData message from the specified reader or buffer.
                 * @function decode
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {sectran_chard.secterm.v1.SectermFileData} SectermFileData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileData.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.sectran_chard.secterm.v1.SectermFileData();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.file = $root.sectran_chard.secterm.v1.SectermFileInfo.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.data = reader.bytes();
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
                 * Decodes a SectermFileData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {sectran_chard.secterm.v1.SectermFileData} SectermFileData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SectermFileData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SectermFileData message.
                 * @function verify
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SectermFileData.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        let error = $root.sectran_chard.secterm.v1.SectermFileInfo.verify(message.file);
                        if (error)
                            return "file." + error;
                    }
                    if (message.data != null && message.hasOwnProperty("data"))
                        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                            return "data: buffer expected";
                    return null;
                };

                /**
                 * Creates a SectermFileData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {sectran_chard.secterm.v1.SectermFileData} SectermFileData
                 */
                SectermFileData.fromObject = function fromObject(object) {
                    if (object instanceof $root.sectran_chard.secterm.v1.SectermFileData)
                        return object;
                    let message = new $root.sectran_chard.secterm.v1.SectermFileData();
                    if (object.file != null) {
                        if (typeof object.file !== "object")
                            throw TypeError(".sectran_chard.secterm.v1.SectermFileData.file: object expected");
                        message.file = $root.sectran_chard.secterm.v1.SectermFileInfo.fromObject(object.file);
                    }
                    if (object.data != null)
                        if (typeof object.data === "string")
                            $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                        else if (object.data.length >= 0)
                            message.data = object.data;
                    return message;
                };

                /**
                 * Creates a plain object from a SectermFileData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @static
                 * @param {sectran_chard.secterm.v1.SectermFileData} message SectermFileData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SectermFileData.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.file = null;
                        if (options.bytes === String)
                            object.data = "";
                        else {
                            object.data = [];
                            if (options.bytes !== Array)
                                object.data = $util.newBuffer(object.data);
                        }
                    }
                    if (message.file != null && message.hasOwnProperty("file"))
                        object.file = $root.sectran_chard.secterm.v1.SectermFileInfo.toObject(message.file, options);
                    if (message.data != null && message.hasOwnProperty("data"))
                        object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                    return object;
                };

                /**
                 * Converts this SectermFileData to JSON.
                 * @function toJSON
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SectermFileData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SectermFileData
                 * @function getTypeUrl
                 * @memberof sectran_chard.secterm.v1.SectermFileData
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SectermFileData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/sectran_chard.secterm.v1.SectermFileData";
                };

                return SectermFileData;
            })();

            return v1;
        })();

        return secterm;
    })();

    return sectran_chard;
})();

export { $root as default };
