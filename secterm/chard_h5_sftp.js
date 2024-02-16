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
