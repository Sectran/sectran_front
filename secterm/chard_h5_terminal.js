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

        v1.SectermTerminalResize = (function() {

            /**
             * Properties of a SectermTerminalResize.
             * @memberof secterm.v1
             * @interface ISectermTerminalResize
             * @property {number|null} [colums] SectermTerminalResize colums
             * @property {number|null} [rows] SectermTerminalResize rows
             */

            /**
             * Constructs a new SectermTerminalResize.
             * @memberof secterm.v1
             * @classdesc Represents a SectermTerminalResize.
             * @implements ISectermTerminalResize
             * @constructor
             * @param {secterm.v1.ISectermTerminalResize=} [properties] Properties to set
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
             * @memberof secterm.v1.SectermTerminalResize
             * @instance
             */
            SectermTerminalResize.prototype.colums = 0;

            /**
             * SectermTerminalResize rows.
             * @member {number} rows
             * @memberof secterm.v1.SectermTerminalResize
             * @instance
             */
            SectermTerminalResize.prototype.rows = 0;

            /**
             * Creates a new SectermTerminalResize instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectermTerminalResize
             * @static
             * @param {secterm.v1.ISectermTerminalResize=} [properties] Properties to set
             * @returns {secterm.v1.SectermTerminalResize} SectermTerminalResize instance
             */
            SectermTerminalResize.create = function create(properties) {
                return new SectermTerminalResize(properties);
            };

            /**
             * Encodes the specified SectermTerminalResize message. Does not implicitly {@link secterm.v1.SectermTerminalResize.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectermTerminalResize
             * @static
             * @param {secterm.v1.ISectermTerminalResize} message SectermTerminalResize message or plain object to encode
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
             * Encodes the specified SectermTerminalResize message, length delimited. Does not implicitly {@link secterm.v1.SectermTerminalResize.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectermTerminalResize
             * @static
             * @param {secterm.v1.ISectermTerminalResize} message SectermTerminalResize message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectermTerminalResize.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectermTerminalResize message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectermTerminalResize
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectermTerminalResize} SectermTerminalResize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectermTerminalResize.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectermTerminalResize();
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
             * @memberof secterm.v1.SectermTerminalResize
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectermTerminalResize} SectermTerminalResize
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
             * @memberof secterm.v1.SectermTerminalResize
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
             * @memberof secterm.v1.SectermTerminalResize
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectermTerminalResize} SectermTerminalResize
             */
            SectermTerminalResize.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectermTerminalResize)
                    return object;
                let message = new $root.secterm.v1.SectermTerminalResize();
                if (object.colums != null)
                    message.colums = object.colums >>> 0;
                if (object.rows != null)
                    message.rows = object.rows >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SectermTerminalResize message. Also converts values to other types if specified.
             * @function toObject
             * @memberof secterm.v1.SectermTerminalResize
             * @static
             * @param {secterm.v1.SectermTerminalResize} message SectermTerminalResize
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
             * @memberof secterm.v1.SectermTerminalResize
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectermTerminalResize.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectermTerminalResize
             * @function getTypeUrl
             * @memberof secterm.v1.SectermTerminalResize
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectermTerminalResize.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectermTerminalResize";
            };

            return SectermTerminalResize;
        })();

        v1.SectranTeminalCharacters = (function() {

            /**
             * Properties of a SectranTeminalCharacters.
             * @memberof secterm.v1
             * @interface ISectranTeminalCharacters
             * @property {Uint8Array|null} [Data] SectranTeminalCharacters Data
             */

            /**
             * Constructs a new SectranTeminalCharacters.
             * @memberof secterm.v1
             * @classdesc Represents a SectranTeminalCharacters.
             * @implements ISectranTeminalCharacters
             * @constructor
             * @param {secterm.v1.ISectranTeminalCharacters=} [properties] Properties to set
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
             * @memberof secterm.v1.SectranTeminalCharacters
             * @instance
             */
            SectranTeminalCharacters.prototype.Data = $util.newBuffer([]);

            /**
             * Creates a new SectranTeminalCharacters instance using the specified properties.
             * @function create
             * @memberof secterm.v1.SectranTeminalCharacters
             * @static
             * @param {secterm.v1.ISectranTeminalCharacters=} [properties] Properties to set
             * @returns {secterm.v1.SectranTeminalCharacters} SectranTeminalCharacters instance
             */
            SectranTeminalCharacters.create = function create(properties) {
                return new SectranTeminalCharacters(properties);
            };

            /**
             * Encodes the specified SectranTeminalCharacters message. Does not implicitly {@link secterm.v1.SectranTeminalCharacters.verify|verify} messages.
             * @function encode
             * @memberof secterm.v1.SectranTeminalCharacters
             * @static
             * @param {secterm.v1.ISectranTeminalCharacters} message SectranTeminalCharacters message or plain object to encode
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
             * Encodes the specified SectranTeminalCharacters message, length delimited. Does not implicitly {@link secterm.v1.SectranTeminalCharacters.verify|verify} messages.
             * @function encodeDelimited
             * @memberof secterm.v1.SectranTeminalCharacters
             * @static
             * @param {secterm.v1.ISectranTeminalCharacters} message SectranTeminalCharacters message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SectranTeminalCharacters.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SectranTeminalCharacters message from the specified reader or buffer.
             * @function decode
             * @memberof secterm.v1.SectranTeminalCharacters
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {secterm.v1.SectranTeminalCharacters} SectranTeminalCharacters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SectranTeminalCharacters.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.secterm.v1.SectranTeminalCharacters();
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
             * @memberof secterm.v1.SectranTeminalCharacters
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {secterm.v1.SectranTeminalCharacters} SectranTeminalCharacters
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
             * @memberof secterm.v1.SectranTeminalCharacters
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
             * @memberof secterm.v1.SectranTeminalCharacters
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {secterm.v1.SectranTeminalCharacters} SectranTeminalCharacters
             */
            SectranTeminalCharacters.fromObject = function fromObject(object) {
                if (object instanceof $root.secterm.v1.SectranTeminalCharacters)
                    return object;
                let message = new $root.secterm.v1.SectranTeminalCharacters();
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
             * @memberof secterm.v1.SectranTeminalCharacters
             * @static
             * @param {secterm.v1.SectranTeminalCharacters} message SectranTeminalCharacters
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
             * @memberof secterm.v1.SectranTeminalCharacters
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SectranTeminalCharacters.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SectranTeminalCharacters
             * @function getTypeUrl
             * @memberof secterm.v1.SectranTeminalCharacters
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SectranTeminalCharacters.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/secterm.v1.SectranTeminalCharacters";
            };

            return SectranTeminalCharacters;
        })();

        return v1;
    })();

    return secterm;
})();

export { $root as default };
