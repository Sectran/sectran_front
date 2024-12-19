/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const secterm = $root.secterm = (() => {

    /**
     * Namespace secterm.
     * @exports secterm
     * @namespace
     */
    const secterm = {};

    secterm.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof secterm
         * @namespace
         */
        const v1 = {};

        /**
         * SectermFileCmd enum.
         * @name secterm.v1.SectermFileCmd
         * @enum {number}
         * @property {number} TRANS_ERROR=0 TRANS_ERROR value
         * @property {number} TRANS_FILE_EXISTED=1 TRANS_FILE_EXISTED value
         * @property {number} TRANS_CANCLE=2 TRANS_CANCLE value
         * @property {number} TRANS_SUCCESS=3 TRANS_SUCCESS value
         */
        v1.SectermFileCmd = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TRANS_ERROR"] = 0;
            values[valuesById[1] = "TRANS_FILE_EXISTED"] = 1;
            values[valuesById[2] = "TRANS_CANCLE"] = 2;
            values[valuesById[3] = "TRANS_SUCCESS"] = 3;
            return values;
        })();

        /**
         * ActionMode enum.
         * @name secterm.v1.ActionMode
         * @enum {number}
         * @property {number} ACTIVE=0 ACTIVE value
         * @property {number} PASSIVE=1 PASSIVE value
         */
        v1.ActionMode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ACTIVE"] = 0;
            values[valuesById[1] = "PASSIVE"] = 1;
            return values;
        })();

        /**
         * TransProtocol enum.
         * @name secterm.v1.TransProtocol
         * @enum {number}
         * @property {number} ZMODEM=0 ZMODEM value
         * @property {number} SFTP=1 SFTP value
         * @property {number} SCP=2 SCP value
         * @property {number} FTP=3 FTP value
         */
        v1.TransProtocol = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ZMODEM"] = 0;
            values[valuesById[1] = "SFTP"] = 1;
            values[valuesById[2] = "SCP"] = 2;
            values[valuesById[3] = "FTP"] = 3;
            return values;
        })();

        v1.SectermFileInfo = (function() {

            /**
             * Properties of a SectermFileInfo.
             * @memberof secterm.v1
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
             * @memberof secterm.v1
             * @classdesc Represents a SectermFileInfo.
             * @implements ISectermFileInfo
             * @constructor
             * @param {secterm.v1.ISectermFileInfo=} [properties] Properties to set
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
             * @memberof secterm.v1.SectermFileInfo
             * @instance
             */
            SectermFileInfo.prototype.Name = "";

            /**
             * SectermFileInfo Path.
             * @member {string} Path
             * @memberof secterm.v1.SectermFileInfo
             * @instance
             */
            SectermFileInfo.prototype.Path = "";

            /**
             * SectermFileInfo ModTime.
             * @member {number|Long} ModTime
             * @memberof secterm.v1.SectermFileInfo
             * @instance
             */
            SectermFileInfo.prototype.ModTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SectermFileInfo Size.
             * @member {number|Long} Size
             * @memberof secterm.v1.SectermFileInfo
             * @instance
             */
            SectermFileInfo.prototype.Size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SectermFileInfo Mode.
             * @member {number} Mode
             * @memberof secterm.v1.SectermFileInfo
             * @instance
             */
            SectermFileInfo.prototype.Mode = 0;

            /**
             * SectermFileInfo IsDir.
             * @member {boolean} IsDir
             * @memberof secterm.v1.SectermFileInfo
             * @instance
             */
            SectermFileInfo.prototype.IsDir = false;

            /**
             * Creates a new SectermFileInfo instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectermFileInfo
             * @static
             * @param {secterm.v1.ISectermFileInfo=} [properties] Properties to set
             * @returns {secterm.v1.SectermFileInfo} SectermFileInfo instance
             */
            SectermFileInfo.create = function create(properties) {
                return new SectermFileInfo(properties);
            };

            /**
             * Encodes the specified SectermFileInfo message. Does not implicitly {@link secterm.v1.SectermFileInfo.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectermFileInfo
             * @static
             * @param {secterm.v1.ISectermFileInfo} message SectermFileInfo message or plain object to encode
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
             * Encodes the specified SectermFileInfo message, length delimited. Does not implicitly {@link secterm.v1.SectermFileInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectermFileInfo
             * @static
             * @param {secterm.v1.ISectermFileInfo} message SectermFileInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectermFileInfo message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectermFileInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectermFileInfo} SectermFileInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectermFileInfo();
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
             * @memberof secterm.v1.SectermFileInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectermFileInfo} SectermFileInfo
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
             * @memberof secterm.v1.SectermFileInfo
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
             * @memberof secterm.v1.SectermFileInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectermFileInfo} SectermFileInfo
             */
            SectermFileInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectermFileInfo)
                    return object;
                let message = new $root.secterm.v1.SectermFileInfo();
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
             * @memberof secterm.v1.SectermFileInfo
             * @static
             * @param {secterm.v1.SectermFileInfo} message SectermFileInfo
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
             * @memberof secterm.v1.SectermFileInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectermFileInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectermFileInfo
             * @function getTypeUrl
             * @memberof secterm.v1.SectermFileInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectermFileInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectermFileInfo";
            };

            return SectermFileInfo;
        })();

        v1.SectermFileListRequest = (function() {

            /**
             * Properties of a SectermFileListRequest.
             * @memberof secterm.v1
             * @interface ISectermFileListRequest
             * @property {string|null} [dirPath] SectermFileListRequest dirPath
             */

            /**
             * Constructs a new SectermFileListRequest.
             * @memberof secterm.v1
             * @classdesc Represents a SectermFileListRequest.
             * @implements ISectermFileListRequest
             * @constructor
             * @param {secterm.v1.ISectermFileListRequest=} [properties] Properties to set
             */
            function SectermFileListRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SectermFileListRequest dirPath.
             * @member {string} dirPath
             * @memberof secterm.v1.SectermFileListRequest
             * @instance
             */
            SectermFileListRequest.prototype.dirPath = "";

            /**
             * Creates a new SectermFileListRequest instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectermFileListRequest
             * @static
             * @param {secterm.v1.ISectermFileListRequest=} [properties] Properties to set
             * @returns {secterm.v1.SectermFileListRequest} SectermFileListRequest instance
             */
            SectermFileListRequest.create = function create(properties) {
                return new SectermFileListRequest(properties);
            };

            /**
             * Encodes the specified SectermFileListRequest message. Does not implicitly {@link secterm.v1.SectermFileListRequest.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectermFileListRequest
             * @static
             * @param {secterm.v1.ISectermFileListRequest} message SectermFileListRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileListRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dirPath != null && Object.hasOwnProperty.call(message, "dirPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.dirPath);
                return writer;
            };

            /**
             * Encodes the specified SectermFileListRequest message, length delimited. Does not implicitly {@link secterm.v1.SectermFileListRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectermFileListRequest
             * @static
             * @param {secterm.v1.ISectermFileListRequest} message SectermFileListRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileListRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectermFileListRequest message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectermFileListRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectermFileListRequest} SectermFileListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileListRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectermFileListRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.dirPath = reader.string();
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
             * @memberof secterm.v1.SectermFileListRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectermFileListRequest} SectermFileListRequest
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
             * @memberof secterm.v1.SectermFileListRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SectermFileListRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dirPath != null && message.hasOwnProperty("dirPath"))
                    if (!$util.isString(message.dirPath))
                        return "dirPath: string expected";
                return null;
            };

            /**
             * Creates a SectermFileListRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof secterm.v1.SectermFileListRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectermFileListRequest} SectermFileListRequest
             */
            SectermFileListRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectermFileListRequest)
                    return object;
                let message = new $root.secterm.v1.SectermFileListRequest();
                if (object.dirPath != null)
                    message.dirPath = String(object.dirPath);
                return message;
            };

            /**
             * Creates a plain object from a SectermFileListRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof secterm.v1.SectermFileListRequest
             * @static
             * @param {secterm.v1.SectermFileListRequest} message SectermFileListRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SectermFileListRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.dirPath = "";
                if (message.dirPath != null && message.hasOwnProperty("dirPath"))
                    object.dirPath = message.dirPath;
                return object;
            };

            /**
             * Converts this SectermFileListRequest to JSON.
             * @function toJSON
             * @memberof secterm.v1.SectermFileListRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectermFileListRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectermFileListRequest
             * @function getTypeUrl
             * @memberof secterm.v1.SectermFileListRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectermFileListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectermFileListRequest";
            };

            return SectermFileListRequest;
        })();

        v1.SectermFileListResponse = (function() {

            /**
             * Properties of a SectermFileListResponse.
             * @memberof secterm.v1
             * @interface ISectermFileListResponse
             * @property {Array.<secterm.v1.ISectermFileInfo>|null} [FileInfo] SectermFileListResponse FileInfo
             */

            /**
             * Constructs a new SectermFileListResponse.
             * @memberof secterm.v1
             * @classdesc Represents a SectermFileListResponse.
             * @implements ISectermFileListResponse
             * @constructor
             * @param {secterm.v1.ISectermFileListResponse=} [properties] Properties to set
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
             * @member {Array.<secterm.v1.ISectermFileInfo>} FileInfo
             * @memberof secterm.v1.SectermFileListResponse
             * @instance
             */
            SectermFileListResponse.prototype.FileInfo = $util.emptyArray;

            /**
             * Creates a new SectermFileListResponse instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectermFileListResponse
             * @static
             * @param {secterm.v1.ISectermFileListResponse=} [properties] Properties to set
             * @returns {secterm.v1.SectermFileListResponse} SectermFileListResponse instance
             */
            SectermFileListResponse.create = function create(properties) {
                return new SectermFileListResponse(properties);
            };

            /**
             * Encodes the specified SectermFileListResponse message. Does not implicitly {@link secterm.v1.SectermFileListResponse.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectermFileListResponse
             * @static
             * @param {secterm.v1.ISectermFileListResponse} message SectermFileListResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileListResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.FileInfo != null && message.FileInfo.length)
                    for (let i = 0; i < message.FileInfo.length; ++i)
                        $root.secterm.v1.SectermFileInfo.encode(message.FileInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SectermFileListResponse message, length delimited. Does not implicitly {@link secterm.v1.SectermFileListResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectermFileListResponse
             * @static
             * @param {secterm.v1.ISectermFileListResponse} message SectermFileListResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileListResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectermFileListResponse message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectermFileListResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectermFileListResponse} SectermFileListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileListResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectermFileListResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.FileInfo && message.FileInfo.length))
                                message.FileInfo = [];
                            message.FileInfo.push($root.secterm.v1.SectermFileInfo.decode(reader, reader.uint32()));
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
             * @memberof secterm.v1.SectermFileListResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectermFileListResponse} SectermFileListResponse
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
             * @memberof secterm.v1.SectermFileListResponse
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
                        let error = $root.secterm.v1.SectermFileInfo.verify(message.FileInfo[i]);
                        if (error)
                            return "FileInfo." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SectermFileListResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof secterm.v1.SectermFileListResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectermFileListResponse} SectermFileListResponse
             */
            SectermFileListResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectermFileListResponse)
                    return object;
                let message = new $root.secterm.v1.SectermFileListResponse();
                if (object.FileInfo) {
                    if (!Array.isArray(object.FileInfo))
                        throw TypeError(".secterm.v1.SectermFileListResponse.FileInfo: array expected");
                    message.FileInfo = [];
                    for (let i = 0; i < object.FileInfo.length; ++i) {
                        if (typeof object.FileInfo[i] !== "object")
                            throw TypeError(".secterm.v1.SectermFileListResponse.FileInfo: object expected");
                        message.FileInfo[i] = $root.secterm.v1.SectermFileInfo.fromObject(object.FileInfo[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SectermFileListResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof secterm.v1.SectermFileListResponse
             * @static
             * @param {secterm.v1.SectermFileListResponse} message SectermFileListResponse
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
                        object.FileInfo[j] = $root.secterm.v1.SectermFileInfo.toObject(message.FileInfo[j], options);
                }
                return object;
            };

            /**
             * Converts this SectermFileListResponse to JSON.
             * @function toJSON
             * @memberof secterm.v1.SectermFileListResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectermFileListResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectermFileListResponse
             * @function getTypeUrl
             * @memberof secterm.v1.SectermFileListResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectermFileListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectermFileListResponse";
            };

            return SectermFileListResponse;
        })();

        v1.SectermFileMove = (function() {

            /**
             * Properties of a SectermFileMove.
             * @memberof secterm.v1
             * @interface ISectermFileMove
             * @property {string|null} [filePath] SectermFileMove filePath
             * @property {string|null} [DstPath] SectermFileMove DstPath
             * @property {boolean|null} [force] SectermFileMove force
             * @property {boolean|null} [recursion] SectermFileMove recursion
             */

            /**
             * Constructs a new SectermFileMove.
             * @memberof secterm.v1
             * @classdesc Represents a SectermFileMove.
             * @implements ISectermFileMove
             * @constructor
             * @param {secterm.v1.ISectermFileMove=} [properties] Properties to set
             */
            function SectermFileMove(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SectermFileMove filePath.
             * @member {string} filePath
             * @memberof secterm.v1.SectermFileMove
             * @instance
             */
            SectermFileMove.prototype.filePath = "";

            /**
             * SectermFileMove DstPath.
             * @member {string} DstPath
             * @memberof secterm.v1.SectermFileMove
             * @instance
             */
            SectermFileMove.prototype.DstPath = "";

            /**
             * SectermFileMove force.
             * @member {boolean} force
             * @memberof secterm.v1.SectermFileMove
             * @instance
             */
            SectermFileMove.prototype.force = false;

            /**
             * SectermFileMove recursion.
             * @member {boolean} recursion
             * @memberof secterm.v1.SectermFileMove
             * @instance
             */
            SectermFileMove.prototype.recursion = false;

            /**
             * Creates a new SectermFileMove instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectermFileMove
             * @static
             * @param {secterm.v1.ISectermFileMove=} [properties] Properties to set
             * @returns {secterm.v1.SectermFileMove} SectermFileMove instance
             */
            SectermFileMove.create = function create(properties) {
                return new SectermFileMove(properties);
            };

            /**
             * Encodes the specified SectermFileMove message. Does not implicitly {@link secterm.v1.SectermFileMove.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectermFileMove
             * @static
             * @param {secterm.v1.ISectermFileMove} message SectermFileMove message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileMove.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filePath != null && Object.hasOwnProperty.call(message, "filePath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filePath);
                if (message.DstPath != null && Object.hasOwnProperty.call(message, "DstPath"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.DstPath);
                if (message.force != null && Object.hasOwnProperty.call(message, "force"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.force);
                if (message.recursion != null && Object.hasOwnProperty.call(message, "recursion"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.recursion);
                return writer;
            };

            /**
             * Encodes the specified SectermFileMove message, length delimited. Does not implicitly {@link secterm.v1.SectermFileMove.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectermFileMove
             * @static
             * @param {secterm.v1.ISectermFileMove} message SectermFileMove message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileMove.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectermFileMove message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectermFileMove
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectermFileMove} SectermFileMove
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileMove.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectermFileMove();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filePath = reader.string();
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
                    case 4: {
                            message.recursion = reader.bool();
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
             * @memberof secterm.v1.SectermFileMove
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectermFileMove} SectermFileMove
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
             * @memberof secterm.v1.SectermFileMove
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SectermFileMove.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filePath != null && message.hasOwnProperty("filePath"))
                    if (!$util.isString(message.filePath))
                        return "filePath: string expected";
                if (message.DstPath != null && message.hasOwnProperty("DstPath"))
                    if (!$util.isString(message.DstPath))
                        return "DstPath: string expected";
                if (message.force != null && message.hasOwnProperty("force"))
                    if (typeof message.force !== "boolean")
                        return "force: boolean expected";
                if (message.recursion != null && message.hasOwnProperty("recursion"))
                    if (typeof message.recursion !== "boolean")
                        return "recursion: boolean expected";
                return null;
            };

            /**
             * Creates a SectermFileMove message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof secterm.v1.SectermFileMove
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectermFileMove} SectermFileMove
             */
            SectermFileMove.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectermFileMove)
                    return object;
                let message = new $root.secterm.v1.SectermFileMove();
                if (object.filePath != null)
                    message.filePath = String(object.filePath);
                if (object.DstPath != null)
                    message.DstPath = String(object.DstPath);
                if (object.force != null)
                    message.force = Boolean(object.force);
                if (object.recursion != null)
                    message.recursion = Boolean(object.recursion);
                return message;
            };

            /**
             * Creates a plain object from a SectermFileMove message. Also converts values to other types if specified.
             * @function toObject
             * @memberof secterm.v1.SectermFileMove
             * @static
             * @param {secterm.v1.SectermFileMove} message SectermFileMove
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SectermFileMove.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.filePath = "";
                    object.DstPath = "";
                    object.force = false;
                    object.recursion = false;
                }
                if (message.filePath != null && message.hasOwnProperty("filePath"))
                    object.filePath = message.filePath;
                if (message.DstPath != null && message.hasOwnProperty("DstPath"))
                    object.DstPath = message.DstPath;
                if (message.force != null && message.hasOwnProperty("force"))
                    object.force = message.force;
                if (message.recursion != null && message.hasOwnProperty("recursion"))
                    object.recursion = message.recursion;
                return object;
            };

            /**
             * Converts this SectermFileMove to JSON.
             * @function toJSON
             * @memberof secterm.v1.SectermFileMove
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectermFileMove.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectermFileMove
             * @function getTypeUrl
             * @memberof secterm.v1.SectermFileMove
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectermFileMove.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectermFileMove";
            };

            return SectermFileMove;
        })();

        v1.SectermFileDelete = (function() {

            /**
             * Properties of a SectermFileDelete.
             * @memberof secterm.v1
             * @interface ISectermFileDelete
             * @property {Array.<string>|null} [Path] SectermFileDelete Path
             */

            /**
             * Constructs a new SectermFileDelete.
             * @memberof secterm.v1
             * @classdesc Represents a SectermFileDelete.
             * @implements ISectermFileDelete
             * @constructor
             * @param {secterm.v1.ISectermFileDelete=} [properties] Properties to set
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
             * @memberof secterm.v1.SectermFileDelete
             * @instance
             */
            SectermFileDelete.prototype.Path = $util.emptyArray;

            /**
             * Creates a new SectermFileDelete instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectermFileDelete
             * @static
             * @param {secterm.v1.ISectermFileDelete=} [properties] Properties to set
             * @returns {secterm.v1.SectermFileDelete} SectermFileDelete instance
             */
            SectermFileDelete.create = function create(properties) {
                return new SectermFileDelete(properties);
            };

            /**
             * Encodes the specified SectermFileDelete message. Does not implicitly {@link secterm.v1.SectermFileDelete.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectermFileDelete
             * @static
             * @param {secterm.v1.ISectermFileDelete} message SectermFileDelete message or plain object to encode
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
             * Encodes the specified SectermFileDelete message, length delimited. Does not implicitly {@link secterm.v1.SectermFileDelete.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectermFileDelete
             * @static
             * @param {secterm.v1.ISectermFileDelete} message SectermFileDelete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileDelete.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectermFileDelete message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectermFileDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectermFileDelete} SectermFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileDelete.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectermFileDelete();
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
             * @memberof secterm.v1.SectermFileDelete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectermFileDelete} SectermFileDelete
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
             * @memberof secterm.v1.SectermFileDelete
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
             * @memberof secterm.v1.SectermFileDelete
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectermFileDelete} SectermFileDelete
             */
            SectermFileDelete.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectermFileDelete)
                    return object;
                let message = new $root.secterm.v1.SectermFileDelete();
                if (object.Path) {
                    if (!Array.isArray(object.Path))
                        throw TypeError(".secterm.v1.SectermFileDelete.Path: array expected");
                    message.Path = [];
                    for (let i = 0; i < object.Path.length; ++i)
                        message.Path[i] = String(object.Path[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a SectermFileDelete message. Also converts values to other types if specified.
             * @function toObject
             * @memberof secterm.v1.SectermFileDelete
             * @static
             * @param {secterm.v1.SectermFileDelete} message SectermFileDelete
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
             * @memberof secterm.v1.SectermFileDelete
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectermFileDelete.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectermFileDelete
             * @function getTypeUrl
             * @memberof secterm.v1.SectermFileDelete
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectermFileDelete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectermFileDelete";
            };

            return SectermFileDelete;
        })();

        v1.SectermFileCreate = (function() {

            /**
             * Properties of a SectermFileCreate.
             * @memberof secterm.v1
             * @interface ISectermFileCreate
             * @property {secterm.v1.ISectermFileInfo|null} [file] SectermFileCreate file
             */

            /**
             * Constructs a new SectermFileCreate.
             * @memberof secterm.v1
             * @classdesc Represents a SectermFileCreate.
             * @implements ISectermFileCreate
             * @constructor
             * @param {secterm.v1.ISectermFileCreate=} [properties] Properties to set
             */
            function SectermFileCreate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SectermFileCreate file.
             * @member {secterm.v1.ISectermFileInfo|null|undefined} file
             * @memberof secterm.v1.SectermFileCreate
             * @instance
             */
            SectermFileCreate.prototype.file = null;

            /**
             * Creates a new SectermFileCreate instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectermFileCreate
             * @static
             * @param {secterm.v1.ISectermFileCreate=} [properties] Properties to set
             * @returns {secterm.v1.SectermFileCreate} SectermFileCreate instance
             */
            SectermFileCreate.create = function create(properties) {
                return new SectermFileCreate(properties);
            };

            /**
             * Encodes the specified SectermFileCreate message. Does not implicitly {@link secterm.v1.SectermFileCreate.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectermFileCreate
             * @static
             * @param {secterm.v1.ISectermFileCreate} message SectermFileCreate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileCreate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                    $root.secterm.v1.SectermFileInfo.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SectermFileCreate message, length delimited. Does not implicitly {@link secterm.v1.SectermFileCreate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectermFileCreate
             * @static
             * @param {secterm.v1.ISectermFileCreate} message SectermFileCreate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileCreate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectermFileCreate message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectermFileCreate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectermFileCreate} SectermFileCreate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileCreate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectermFileCreate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.file = $root.secterm.v1.SectermFileInfo.decode(reader, reader.uint32());
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
             * @memberof secterm.v1.SectermFileCreate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectermFileCreate} SectermFileCreate
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
             * @memberof secterm.v1.SectermFileCreate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SectermFileCreate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    let error = $root.secterm.v1.SectermFileInfo.verify(message.file);
                    if (error)
                        return "file." + error;
                }
                return null;
            };

            /**
             * Creates a SectermFileCreate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof secterm.v1.SectermFileCreate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectermFileCreate} SectermFileCreate
             */
            SectermFileCreate.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectermFileCreate)
                    return object;
                let message = new $root.secterm.v1.SectermFileCreate();
                if (object.file != null) {
                    if (typeof object.file !== "object")
                        throw TypeError(".secterm.v1.SectermFileCreate.file: object expected");
                    message.file = $root.secterm.v1.SectermFileInfo.fromObject(object.file);
                }
                return message;
            };

            /**
             * Creates a plain object from a SectermFileCreate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof secterm.v1.SectermFileCreate
             * @static
             * @param {secterm.v1.SectermFileCreate} message SectermFileCreate
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
                    object.file = $root.secterm.v1.SectermFileInfo.toObject(message.file, options);
                return object;
            };

            /**
             * Converts this SectermFileCreate to JSON.
             * @function toJSON
             * @memberof secterm.v1.SectermFileCreate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectermFileCreate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectermFileCreate
             * @function getTypeUrl
             * @memberof secterm.v1.SectermFileCreate
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectermFileCreate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectermFileCreate";
            };

            return SectermFileCreate;
        })();

        v1.SectermFileTransReq = (function() {

            /**
             * Properties of a SectermFileTransReq.
             * @memberof secterm.v1
             * @interface ISectermFileTransReq
             * @property {boolean|null} [upload] SectermFileTransReq upload
             * @property {string|null} [uuid] SectermFileTransReq uuid
             * @property {secterm.v1.TransProtocol|null} [proto] SectermFileTransReq proto
             * @property {secterm.v1.ActionMode|null} [mode] SectermFileTransReq mode
             * @property {string|null} [filename] SectermFileTransReq filename
             * @property {string|null} [filepath] SectermFileTransReq filepath
             * @property {boolean|null} [cover] SectermFileTransReq cover
             */

            /**
             * Constructs a new SectermFileTransReq.
             * @memberof secterm.v1
             * @classdesc Represents a SectermFileTransReq.
             * @implements ISectermFileTransReq
             * @constructor
             * @param {secterm.v1.ISectermFileTransReq=} [properties] Properties to set
             */
            function SectermFileTransReq(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SectermFileTransReq upload.
             * @member {boolean} upload
             * @memberof secterm.v1.SectermFileTransReq
             * @instance
             */
            SectermFileTransReq.prototype.upload = false;

            /**
             * SectermFileTransReq uuid.
             * @member {string} uuid
             * @memberof secterm.v1.SectermFileTransReq
             * @instance
             */
            SectermFileTransReq.prototype.uuid = "";

            /**
             * SectermFileTransReq proto.
             * @member {secterm.v1.TransProtocol} proto
             * @memberof secterm.v1.SectermFileTransReq
             * @instance
             */
            SectermFileTransReq.prototype.proto = 0;

            /**
             * SectermFileTransReq mode.
             * @member {secterm.v1.ActionMode} mode
             * @memberof secterm.v1.SectermFileTransReq
             * @instance
             */
            SectermFileTransReq.prototype.mode = 0;

            /**
             * SectermFileTransReq filename.
             * @member {string} filename
             * @memberof secterm.v1.SectermFileTransReq
             * @instance
             */
            SectermFileTransReq.prototype.filename = "";

            /**
             * SectermFileTransReq filepath.
             * @member {string} filepath
             * @memberof secterm.v1.SectermFileTransReq
             * @instance
             */
            SectermFileTransReq.prototype.filepath = "";

            /**
             * SectermFileTransReq cover.
             * @member {boolean} cover
             * @memberof secterm.v1.SectermFileTransReq
             * @instance
             */
            SectermFileTransReq.prototype.cover = false;

            /**
             * Creates a new SectermFileTransReq instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectermFileTransReq
             * @static
             * @param {secterm.v1.ISectermFileTransReq=} [properties] Properties to set
             * @returns {secterm.v1.SectermFileTransReq} SectermFileTransReq instance
             */
            SectermFileTransReq.create = function create(properties) {
                return new SectermFileTransReq(properties);
            };

            /**
             * Encodes the specified SectermFileTransReq message. Does not implicitly {@link secterm.v1.SectermFileTransReq.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectermFileTransReq
             * @static
             * @param {secterm.v1.ISectermFileTransReq} message SectermFileTransReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileTransReq.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.upload != null && Object.hasOwnProperty.call(message, "upload"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.upload);
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.uuid);
                if (message.proto != null && Object.hasOwnProperty.call(message, "proto"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.proto);
                if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.mode);
                if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.filename);
                if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.filepath);
                if (message.cover != null && Object.hasOwnProperty.call(message, "cover"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.cover);
                return writer;
            };

            /**
             * Encodes the specified SectermFileTransReq message, length delimited. Does not implicitly {@link secterm.v1.SectermFileTransReq.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectermFileTransReq
             * @static
             * @param {secterm.v1.ISectermFileTransReq} message SectermFileTransReq message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileTransReq.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectermFileTransReq message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectermFileTransReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectermFileTransReq} SectermFileTransReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileTransReq.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectermFileTransReq();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.upload = reader.bool();
                            break;
                        }
                    case 3: {
                            message.uuid = reader.string();
                            break;
                        }
                    case 4: {
                            message.proto = reader.int32();
                            break;
                        }
                    case 5: {
                            message.mode = reader.int32();
                            break;
                        }
                    case 6: {
                            message.filename = reader.string();
                            break;
                        }
                    case 7: {
                            message.filepath = reader.string();
                            break;
                        }
                    case 8: {
                            message.cover = reader.bool();
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
             * Decodes a SectermFileTransReq message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof secterm.v1.SectermFileTransReq
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectermFileTransReq} SectermFileTransReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileTransReq.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SectermFileTransReq message.
             * @function verify
             * @memberof secterm.v1.SectermFileTransReq
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SectermFileTransReq.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.upload != null && message.hasOwnProperty("upload"))
                    if (typeof message.upload !== "boolean")
                        return "upload: boolean expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.proto != null && message.hasOwnProperty("proto"))
                    switch (message.proto) {
                    default:
                        return "proto: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.mode != null && message.hasOwnProperty("mode"))
                    switch (message.mode) {
                    default:
                        return "mode: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.filename != null && message.hasOwnProperty("filename"))
                    if (!$util.isString(message.filename))
                        return "filename: string expected";
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    if (!$util.isString(message.filepath))
                        return "filepath: string expected";
                if (message.cover != null && message.hasOwnProperty("cover"))
                    if (typeof message.cover !== "boolean")
                        return "cover: boolean expected";
                return null;
            };

            /**
             * Creates a SectermFileTransReq message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof secterm.v1.SectermFileTransReq
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectermFileTransReq} SectermFileTransReq
             */
            SectermFileTransReq.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectermFileTransReq)
                    return object;
                let message = new $root.secterm.v1.SectermFileTransReq();
                if (object.upload != null)
                    message.upload = Boolean(object.upload);
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                switch (object.proto) {
                default:
                    if (typeof object.proto === "number") {
                        message.proto = object.proto;
                        break;
                    }
                    break;
                case "ZMODEM":
                case 0:
                    message.proto = 0;
                    break;
                case "SFTP":
                case 1:
                    message.proto = 1;
                    break;
                case "SCP":
                case 2:
                    message.proto = 2;
                    break;
                case "FTP":
                case 3:
                    message.proto = 3;
                    break;
                }
                switch (object.mode) {
                default:
                    if (typeof object.mode === "number") {
                        message.mode = object.mode;
                        break;
                    }
                    break;
                case "ACTIVE":
                case 0:
                    message.mode = 0;
                    break;
                case "PASSIVE":
                case 1:
                    message.mode = 1;
                    break;
                }
                if (object.filename != null)
                    message.filename = String(object.filename);
                if (object.filepath != null)
                    message.filepath = String(object.filepath);
                if (object.cover != null)
                    message.cover = Boolean(object.cover);
                return message;
            };

            /**
             * Creates a plain object from a SectermFileTransReq message. Also converts values to other types if specified.
             * @function toObject
             * @memberof secterm.v1.SectermFileTransReq
             * @static
             * @param {secterm.v1.SectermFileTransReq} message SectermFileTransReq
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SectermFileTransReq.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.upload = false;
                    object.uuid = "";
                    object.proto = options.enums === String ? "ZMODEM" : 0;
                    object.mode = options.enums === String ? "ACTIVE" : 0;
                    object.filename = "";
                    object.filepath = "";
                    object.cover = false;
                }
                if (message.upload != null && message.hasOwnProperty("upload"))
                    object.upload = message.upload;
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.proto != null && message.hasOwnProperty("proto"))
                    object.proto = options.enums === String ? $root.secterm.v1.TransProtocol[message.proto] === undefined ? message.proto : $root.secterm.v1.TransProtocol[message.proto] : message.proto;
                if (message.mode != null && message.hasOwnProperty("mode"))
                    object.mode = options.enums === String ? $root.secterm.v1.ActionMode[message.mode] === undefined ? message.mode : $root.secterm.v1.ActionMode[message.mode] : message.mode;
                if (message.filename != null && message.hasOwnProperty("filename"))
                    object.filename = message.filename;
                if (message.filepath != null && message.hasOwnProperty("filepath"))
                    object.filepath = message.filepath;
                if (message.cover != null && message.hasOwnProperty("cover"))
                    object.cover = message.cover;
                return object;
            };

            /**
             * Converts this SectermFileTransReq to JSON.
             * @function toJSON
             * @memberof secterm.v1.SectermFileTransReq
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectermFileTransReq.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectermFileTransReq
             * @function getTypeUrl
             * @memberof secterm.v1.SectermFileTransReq
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectermFileTransReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectermFileTransReq";
            };

            return SectermFileTransReq;
        })();

        v1.SectermFileTransRes = (function() {

            /**
             * Properties of a SectermFileTransRes.
             * @memberof secterm.v1
             * @interface ISectermFileTransRes
             * @property {string|null} [uuid] SectermFileTransRes uuid
             */

            /**
             * Constructs a new SectermFileTransRes.
             * @memberof secterm.v1
             * @classdesc Represents a SectermFileTransRes.
             * @implements ISectermFileTransRes
             * @constructor
             * @param {secterm.v1.ISectermFileTransRes=} [properties] Properties to set
             */
            function SectermFileTransRes(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SectermFileTransRes uuid.
             * @member {string} uuid
             * @memberof secterm.v1.SectermFileTransRes
             * @instance
             */
            SectermFileTransRes.prototype.uuid = "";

            /**
             * Creates a new SectermFileTransRes instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectermFileTransRes
             * @static
             * @param {secterm.v1.ISectermFileTransRes=} [properties] Properties to set
             * @returns {secterm.v1.SectermFileTransRes} SectermFileTransRes instance
             */
            SectermFileTransRes.create = function create(properties) {
                return new SectermFileTransRes(properties);
            };

            /**
             * Encodes the specified SectermFileTransRes message. Does not implicitly {@link secterm.v1.SectermFileTransRes.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectermFileTransRes
             * @static
             * @param {secterm.v1.ISectermFileTransRes} message SectermFileTransRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileTransRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                return writer;
            };

            /**
             * Encodes the specified SectermFileTransRes message, length delimited. Does not implicitly {@link secterm.v1.SectermFileTransRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectermFileTransRes
             * @static
             * @param {secterm.v1.ISectermFileTransRes} message SectermFileTransRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileTransRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectermFileTransRes message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectermFileTransRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectermFileTransRes} SectermFileTransRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileTransRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectermFileTransRes();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.uuid = reader.string();
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
             * Decodes a SectermFileTransRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof secterm.v1.SectermFileTransRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectermFileTransRes} SectermFileTransRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileTransRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SectermFileTransRes message.
             * @function verify
             * @memberof secterm.v1.SectermFileTransRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SectermFileTransRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                return null;
            };

            /**
             * Creates a SectermFileTransRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof secterm.v1.SectermFileTransRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectermFileTransRes} SectermFileTransRes
             */
            SectermFileTransRes.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectermFileTransRes)
                    return object;
                let message = new $root.secterm.v1.SectermFileTransRes();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                return message;
            };

            /**
             * Creates a plain object from a SectermFileTransRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof secterm.v1.SectermFileTransRes
             * @static
             * @param {secterm.v1.SectermFileTransRes} message SectermFileTransRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SectermFileTransRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.uuid = "";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                return object;
            };

            /**
             * Converts this SectermFileTransRes to JSON.
             * @function toJSON
             * @memberof secterm.v1.SectermFileTransRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectermFileTransRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectermFileTransRes
             * @function getTypeUrl
             * @memberof secterm.v1.SectermFileTransRes
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectermFileTransRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectermFileTransRes";
            };

            return SectermFileTransRes;
        })();

        v1.SectermFileCmdMessage = (function() {

            /**
             * Properties of a SectermFileCmdMessage.
             * @memberof secterm.v1
             * @interface ISectermFileCmdMessage
             * @property {secterm.v1.SectermFileCmd|null} [cmd] SectermFileCmdMessage cmd
             */

            /**
             * Constructs a new SectermFileCmdMessage.
             * @memberof secterm.v1
             * @classdesc Represents a SectermFileCmdMessage.
             * @implements ISectermFileCmdMessage
             * @constructor
             * @param {secterm.v1.ISectermFileCmdMessage=} [properties] Properties to set
             */
            function SectermFileCmdMessage(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SectermFileCmdMessage cmd.
             * @member {secterm.v1.SectermFileCmd} cmd
             * @memberof secterm.v1.SectermFileCmdMessage
             * @instance
             */
            SectermFileCmdMessage.prototype.cmd = 0;

            /**
             * Creates a new SectermFileCmdMessage instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectermFileCmdMessage
             * @static
             * @param {secterm.v1.ISectermFileCmdMessage=} [properties] Properties to set
             * @returns {secterm.v1.SectermFileCmdMessage} SectermFileCmdMessage instance
             */
            SectermFileCmdMessage.create = function create(properties) {
                return new SectermFileCmdMessage(properties);
            };

            /**
             * Encodes the specified SectermFileCmdMessage message. Does not implicitly {@link secterm.v1.SectermFileCmdMessage.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectermFileCmdMessage
             * @static
             * @param {secterm.v1.ISectermFileCmdMessage} message SectermFileCmdMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileCmdMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
                return writer;
            };

            /**
             * Encodes the specified SectermFileCmdMessage message, length delimited. Does not implicitly {@link secterm.v1.SectermFileCmdMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectermFileCmdMessage
             * @static
             * @param {secterm.v1.ISectermFileCmdMessage} message SectermFileCmdMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileCmdMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectermFileCmdMessage message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectermFileCmdMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectermFileCmdMessage} SectermFileCmdMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileCmdMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectermFileCmdMessage();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.cmd = reader.int32();
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
             * Decodes a SectermFileCmdMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof secterm.v1.SectermFileCmdMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectermFileCmdMessage} SectermFileCmdMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileCmdMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SectermFileCmdMessage message.
             * @function verify
             * @memberof secterm.v1.SectermFileCmdMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SectermFileCmdMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cmd != null && message.hasOwnProperty("cmd"))
                    switch (message.cmd) {
                    default:
                        return "cmd: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                return null;
            };

            /**
             * Creates a SectermFileCmdMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof secterm.v1.SectermFileCmdMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectermFileCmdMessage} SectermFileCmdMessage
             */
            SectermFileCmdMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectermFileCmdMessage)
                    return object;
                let message = new $root.secterm.v1.SectermFileCmdMessage();
                switch (object.cmd) {
                default:
                    if (typeof object.cmd === "number") {
                        message.cmd = object.cmd;
                        break;
                    }
                    break;
                case "TRANS_ERROR":
                case 0:
                    message.cmd = 0;
                    break;
                case "TRANS_FILE_EXISTED":
                case 1:
                    message.cmd = 1;
                    break;
                case "TRANS_CANCLE":
                case 2:
                    message.cmd = 2;
                    break;
                case "TRANS_SUCCESS":
                case 3:
                    message.cmd = 3;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a SectermFileCmdMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof secterm.v1.SectermFileCmdMessage
             * @static
             * @param {secterm.v1.SectermFileCmdMessage} message SectermFileCmdMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SectermFileCmdMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.cmd = options.enums === String ? "TRANS_ERROR" : 0;
                if (message.cmd != null && message.hasOwnProperty("cmd"))
                    object.cmd = options.enums === String ? $root.secterm.v1.SectermFileCmd[message.cmd] === undefined ? message.cmd : $root.secterm.v1.SectermFileCmd[message.cmd] : message.cmd;
                return object;
            };

            /**
             * Converts this SectermFileCmdMessage to JSON.
             * @function toJSON
             * @memberof secterm.v1.SectermFileCmdMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectermFileCmdMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectermFileCmdMessage
             * @function getTypeUrl
             * @memberof secterm.v1.SectermFileCmdMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectermFileCmdMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectermFileCmdMessage";
            };

            return SectermFileCmdMessage;
        })();

        v1.SectermFileMessage = (function() {

            /**
             * Properties of a SectermFileMessage.
             * @memberof secterm.v1
             * @interface ISectermFileMessage
             * @property {secterm.v1.ISectermFileListRequest|null} [fileListReq] SectermFileMessage fileListReq
             * @property {secterm.v1.ISectermFileListResponse|null} [fileListRes] SectermFileMessage fileListRes
             * @property {secterm.v1.ISectermFileMove|null} [fileMv] SectermFileMessage fileMv
             * @property {secterm.v1.ISectermFileDelete|null} [fileDel] SectermFileMessage fileDel
             * @property {secterm.v1.ISectermFileCreate|null} [fileCreate] SectermFileMessage fileCreate
             * @property {secterm.v1.ISectermFileCmdMessage|null} [fileCmd] SectermFileMessage fileCmd
             * @property {secterm.v1.ISectermFileTransReq|null} [fileTransReq] SectermFileMessage fileTransReq
             * @property {secterm.v1.ISectermFileTransRes|null} [fileTransRes] SectermFileMessage fileTransRes
             */

            /**
             * Constructs a new SectermFileMessage.
             * @memberof secterm.v1
             * @classdesc Represents a SectermFileMessage.
             * @implements ISectermFileMessage
             * @constructor
             * @param {secterm.v1.ISectermFileMessage=} [properties] Properties to set
             */
            function SectermFileMessage(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SectermFileMessage fileListReq.
             * @member {secterm.v1.ISectermFileListRequest|null|undefined} fileListReq
             * @memberof secterm.v1.SectermFileMessage
             * @instance
             */
            SectermFileMessage.prototype.fileListReq = null;

            /**
             * SectermFileMessage fileListRes.
             * @member {secterm.v1.ISectermFileListResponse|null|undefined} fileListRes
             * @memberof secterm.v1.SectermFileMessage
             * @instance
             */
            SectermFileMessage.prototype.fileListRes = null;

            /**
             * SectermFileMessage fileMv.
             * @member {secterm.v1.ISectermFileMove|null|undefined} fileMv
             * @memberof secterm.v1.SectermFileMessage
             * @instance
             */
            SectermFileMessage.prototype.fileMv = null;

            /**
             * SectermFileMessage fileDel.
             * @member {secterm.v1.ISectermFileDelete|null|undefined} fileDel
             * @memberof secterm.v1.SectermFileMessage
             * @instance
             */
            SectermFileMessage.prototype.fileDel = null;

            /**
             * SectermFileMessage fileCreate.
             * @member {secterm.v1.ISectermFileCreate|null|undefined} fileCreate
             * @memberof secterm.v1.SectermFileMessage
             * @instance
             */
            SectermFileMessage.prototype.fileCreate = null;

            /**
             * SectermFileMessage fileCmd.
             * @member {secterm.v1.ISectermFileCmdMessage|null|undefined} fileCmd
             * @memberof secterm.v1.SectermFileMessage
             * @instance
             */
            SectermFileMessage.prototype.fileCmd = null;

            /**
             * SectermFileMessage fileTransReq.
             * @member {secterm.v1.ISectermFileTransReq|null|undefined} fileTransReq
             * @memberof secterm.v1.SectermFileMessage
             * @instance
             */
            SectermFileMessage.prototype.fileTransReq = null;

            /**
             * SectermFileMessage fileTransRes.
             * @member {secterm.v1.ISectermFileTransRes|null|undefined} fileTransRes
             * @memberof secterm.v1.SectermFileMessage
             * @instance
             */
            SectermFileMessage.prototype.fileTransRes = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * SectermFileMessage data.
             * @member {"fileListReq"|"fileListRes"|"fileMv"|"fileDel"|"fileCreate"|"fileCmd"|"fileTransReq"|"fileTransRes"|undefined} data
             * @memberof secterm.v1.SectermFileMessage
             * @instance
             */
            Object.defineProperty(SectermFileMessage.prototype, "data", {
                get: $util.oneOfGetter($oneOfFields = ["fileListReq", "fileListRes", "fileMv", "fileDel", "fileCreate", "fileCmd", "fileTransReq", "fileTransRes"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SectermFileMessage instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectermFileMessage
             * @static
             * @param {secterm.v1.ISectermFileMessage=} [properties] Properties to set
             * @returns {secterm.v1.SectermFileMessage} SectermFileMessage instance
             */
            SectermFileMessage.create = function create(properties) {
                return new SectermFileMessage(properties);
            };

            /**
             * Encodes the specified SectermFileMessage message. Does not implicitly {@link secterm.v1.SectermFileMessage.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectermFileMessage
             * @static
             * @param {secterm.v1.ISectermFileMessage} message SectermFileMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fileListReq != null && Object.hasOwnProperty.call(message, "fileListReq"))
                    $root.secterm.v1.SectermFileListRequest.encode(message.fileListReq, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.fileListRes != null && Object.hasOwnProperty.call(message, "fileListRes"))
                    $root.secterm.v1.SectermFileListResponse.encode(message.fileListRes, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.fileMv != null && Object.hasOwnProperty.call(message, "fileMv"))
                    $root.secterm.v1.SectermFileMove.encode(message.fileMv, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.fileDel != null && Object.hasOwnProperty.call(message, "fileDel"))
                    $root.secterm.v1.SectermFileDelete.encode(message.fileDel, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.fileCreate != null && Object.hasOwnProperty.call(message, "fileCreate"))
                    $root.secterm.v1.SectermFileCreate.encode(message.fileCreate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.fileCmd != null && Object.hasOwnProperty.call(message, "fileCmd"))
                    $root.secterm.v1.SectermFileCmdMessage.encode(message.fileCmd, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.fileTransReq != null && Object.hasOwnProperty.call(message, "fileTransReq"))
                    $root.secterm.v1.SectermFileTransReq.encode(message.fileTransReq, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.fileTransRes != null && Object.hasOwnProperty.call(message, "fileTransRes"))
                    $root.secterm.v1.SectermFileTransRes.encode(message.fileTransRes, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SectermFileMessage message, length delimited. Does not implicitly {@link secterm.v1.SectermFileMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectermFileMessage
             * @static
             * @param {secterm.v1.ISectermFileMessage} message SectermFileMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermFileMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectermFileMessage message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectermFileMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectermFileMessage} SectermFileMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectermFileMessage();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.fileListReq = $root.secterm.v1.SectermFileListRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.fileListRes = $root.secterm.v1.SectermFileListResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.fileMv = $root.secterm.v1.SectermFileMove.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.fileDel = $root.secterm.v1.SectermFileDelete.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.fileCreate = $root.secterm.v1.SectermFileCreate.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.fileCmd = $root.secterm.v1.SectermFileCmdMessage.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.fileTransReq = $root.secterm.v1.SectermFileTransReq.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.fileTransRes = $root.secterm.v1.SectermFileTransRes.decode(reader, reader.uint32());
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
             * Decodes a SectermFileMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof secterm.v1.SectermFileMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectermFileMessage} SectermFileMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermFileMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SectermFileMessage message.
             * @function verify
             * @memberof secterm.v1.SectermFileMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SectermFileMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.fileListReq != null && message.hasOwnProperty("fileListReq")) {
                    properties.data = 1;
                    {
                        let error = $root.secterm.v1.SectermFileListRequest.verify(message.fileListReq);
                        if (error)
                            return "fileListReq." + error;
                    }
                }
                if (message.fileListRes != null && message.hasOwnProperty("fileListRes")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        let error = $root.secterm.v1.SectermFileListResponse.verify(message.fileListRes);
                        if (error)
                            return "fileListRes." + error;
                    }
                }
                if (message.fileMv != null && message.hasOwnProperty("fileMv")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        let error = $root.secterm.v1.SectermFileMove.verify(message.fileMv);
                        if (error)
                            return "fileMv." + error;
                    }
                }
                if (message.fileDel != null && message.hasOwnProperty("fileDel")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        let error = $root.secterm.v1.SectermFileDelete.verify(message.fileDel);
                        if (error)
                            return "fileDel." + error;
                    }
                }
                if (message.fileCreate != null && message.hasOwnProperty("fileCreate")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        let error = $root.secterm.v1.SectermFileCreate.verify(message.fileCreate);
                        if (error)
                            return "fileCreate." + error;
                    }
                }
                if (message.fileCmd != null && message.hasOwnProperty("fileCmd")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        let error = $root.secterm.v1.SectermFileCmdMessage.verify(message.fileCmd);
                        if (error)
                            return "fileCmd." + error;
                    }
                }
                if (message.fileTransReq != null && message.hasOwnProperty("fileTransReq")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        let error = $root.secterm.v1.SectermFileTransReq.verify(message.fileTransReq);
                        if (error)
                            return "fileTransReq." + error;
                    }
                }
                if (message.fileTransRes != null && message.hasOwnProperty("fileTransRes")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    {
                        let error = $root.secterm.v1.SectermFileTransRes.verify(message.fileTransRes);
                        if (error)
                            return "fileTransRes." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SectermFileMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof secterm.v1.SectermFileMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectermFileMessage} SectermFileMessage
             */
            SectermFileMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectermFileMessage)
                    return object;
                let message = new $root.secterm.v1.SectermFileMessage();
                if (object.fileListReq != null) {
                    if (typeof object.fileListReq !== "object")
                        throw TypeError(".secterm.v1.SectermFileMessage.fileListReq: object expected");
                    message.fileListReq = $root.secterm.v1.SectermFileListRequest.fromObject(object.fileListReq);
                }
                if (object.fileListRes != null) {
                    if (typeof object.fileListRes !== "object")
                        throw TypeError(".secterm.v1.SectermFileMessage.fileListRes: object expected");
                    message.fileListRes = $root.secterm.v1.SectermFileListResponse.fromObject(object.fileListRes);
                }
                if (object.fileMv != null) {
                    if (typeof object.fileMv !== "object")
                        throw TypeError(".secterm.v1.SectermFileMessage.fileMv: object expected");
                    message.fileMv = $root.secterm.v1.SectermFileMove.fromObject(object.fileMv);
                }
                if (object.fileDel != null) {
                    if (typeof object.fileDel !== "object")
                        throw TypeError(".secterm.v1.SectermFileMessage.fileDel: object expected");
                    message.fileDel = $root.secterm.v1.SectermFileDelete.fromObject(object.fileDel);
                }
                if (object.fileCreate != null) {
                    if (typeof object.fileCreate !== "object")
                        throw TypeError(".secterm.v1.SectermFileMessage.fileCreate: object expected");
                    message.fileCreate = $root.secterm.v1.SectermFileCreate.fromObject(object.fileCreate);
                }
                if (object.fileCmd != null) {
                    if (typeof object.fileCmd !== "object")
                        throw TypeError(".secterm.v1.SectermFileMessage.fileCmd: object expected");
                    message.fileCmd = $root.secterm.v1.SectermFileCmdMessage.fromObject(object.fileCmd);
                }
                if (object.fileTransReq != null) {
                    if (typeof object.fileTransReq !== "object")
                        throw TypeError(".secterm.v1.SectermFileMessage.fileTransReq: object expected");
                    message.fileTransReq = $root.secterm.v1.SectermFileTransReq.fromObject(object.fileTransReq);
                }
                if (object.fileTransRes != null) {
                    if (typeof object.fileTransRes !== "object")
                        throw TypeError(".secterm.v1.SectermFileMessage.fileTransRes: object expected");
                    message.fileTransRes = $root.secterm.v1.SectermFileTransRes.fromObject(object.fileTransRes);
                }
                return message;
            };

            /**
             * Creates a plain object from a SectermFileMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof secterm.v1.SectermFileMessage
             * @static
             * @param {secterm.v1.SectermFileMessage} message SectermFileMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SectermFileMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (message.fileListReq != null && message.hasOwnProperty("fileListReq")) {
                    object.fileListReq = $root.secterm.v1.SectermFileListRequest.toObject(message.fileListReq, options);
                    if (options.oneofs)
                        object.data = "fileListReq";
                }
                if (message.fileListRes != null && message.hasOwnProperty("fileListRes")) {
                    object.fileListRes = $root.secterm.v1.SectermFileListResponse.toObject(message.fileListRes, options);
                    if (options.oneofs)
                        object.data = "fileListRes";
                }
                if (message.fileMv != null && message.hasOwnProperty("fileMv")) {
                    object.fileMv = $root.secterm.v1.SectermFileMove.toObject(message.fileMv, options);
                    if (options.oneofs)
                        object.data = "fileMv";
                }
                if (message.fileDel != null && message.hasOwnProperty("fileDel")) {
                    object.fileDel = $root.secterm.v1.SectermFileDelete.toObject(message.fileDel, options);
                    if (options.oneofs)
                        object.data = "fileDel";
                }
                if (message.fileCreate != null && message.hasOwnProperty("fileCreate")) {
                    object.fileCreate = $root.secterm.v1.SectermFileCreate.toObject(message.fileCreate, options);
                    if (options.oneofs)
                        object.data = "fileCreate";
                }
                if (message.fileCmd != null && message.hasOwnProperty("fileCmd")) {
                    object.fileCmd = $root.secterm.v1.SectermFileCmdMessage.toObject(message.fileCmd, options);
                    if (options.oneofs)
                        object.data = "fileCmd";
                }
                if (message.fileTransReq != null && message.hasOwnProperty("fileTransReq")) {
                    object.fileTransReq = $root.secterm.v1.SectermFileTransReq.toObject(message.fileTransReq, options);
                    if (options.oneofs)
                        object.data = "fileTransReq";
                }
                if (message.fileTransRes != null && message.hasOwnProperty("fileTransRes")) {
                    object.fileTransRes = $root.secterm.v1.SectermFileTransRes.toObject(message.fileTransRes, options);
                    if (options.oneofs)
                        object.data = "fileTransRes";
                }
                return object;
            };

            /**
             * Converts this SectermFileMessage to JSON.
             * @function toJSON
             * @memberof secterm.v1.SectermFileMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectermFileMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectermFileMessage
             * @function getTypeUrl
             * @memberof secterm.v1.SectermFileMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectermFileMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectermFileMessage";
            };

            return SectermFileMessage;
        })();

        return v1;
    })();

    return secterm;
})();

export { $root as default };
