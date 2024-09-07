import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace secterm. */
export namespace secterm {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of a SectermTerminalResize. */
        interface ISectermTerminalResize {

            /** SectermTerminalResize colums */
            colums?: (number|null);

            /** SectermTerminalResize rows */
            rows?: (number|null);
        }

        /** Represents a SectermTerminalResize. */
        class SectermTerminalResize implements ISectermTerminalResize {

            /**
             * Constructs a new SectermTerminalResize.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermTerminalResize);

            /** SectermTerminalResize colums. */
            public colums: number;

            /** SectermTerminalResize rows. */
            public rows: number;

            /**
             * Creates a new SectermTerminalResize instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermTerminalResize instance
             */
            public static create(properties?: secterm.v1.ISectermTerminalResize): secterm.v1.SectermTerminalResize;

            /**
             * Encodes the specified SectermTerminalResize message. Does not implicitly {@link secterm.v1.SectermTerminalResize.verify|verify} messages.
             * @param message SectermTerminalResize message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermTerminalResize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermTerminalResize message, length delimited. Does not implicitly {@link secterm.v1.SectermTerminalResize.verify|verify} messages.
             * @param message SectermTerminalResize message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermTerminalResize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermTerminalResize message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermTerminalResize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermTerminalResize;

            /**
             * Decodes a SectermTerminalResize message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermTerminalResize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermTerminalResize;

            /**
             * Verifies a SectermTerminalResize message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermTerminalResize message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermTerminalResize
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermTerminalResize;

            /**
             * Creates a plain object from a SectermTerminalResize message. Also converts values to other types if specified.
             * @param message SectermTerminalResize
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermTerminalResize, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermTerminalResize to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermTerminalResize
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SectranTeminalCharacters. */
        interface ISectranTeminalCharacters {

            /** SectranTeminalCharacters Data */
            Data?: (Uint8Array|null);
        }

        /** Represents a SectranTeminalCharacters. */
        class SectranTeminalCharacters implements ISectranTeminalCharacters {

            /**
             * Constructs a new SectranTeminalCharacters.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectranTeminalCharacters);

            /** SectranTeminalCharacters Data. */
            public Data: Uint8Array;

            /**
             * Creates a new SectranTeminalCharacters instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectranTeminalCharacters instance
             */
            public static create(properties?: secterm.v1.ISectranTeminalCharacters): secterm.v1.SectranTeminalCharacters;

            /**
             * Encodes the specified SectranTeminalCharacters message. Does not implicitly {@link secterm.v1.SectranTeminalCharacters.verify|verify} messages.
             * @param message SectranTeminalCharacters message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectranTeminalCharacters, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectranTeminalCharacters message, length delimited. Does not implicitly {@link secterm.v1.SectranTeminalCharacters.verify|verify} messages.
             * @param message SectranTeminalCharacters message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectranTeminalCharacters, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectranTeminalCharacters message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectranTeminalCharacters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectranTeminalCharacters;

            /**
             * Decodes a SectranTeminalCharacters message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectranTeminalCharacters
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectranTeminalCharacters;

            /**
             * Verifies a SectranTeminalCharacters message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectranTeminalCharacters message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectranTeminalCharacters
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectranTeminalCharacters;

            /**
             * Creates a plain object from a SectranTeminalCharacters message. Also converts values to other types if specified.
             * @param message SectranTeminalCharacters
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectranTeminalCharacters, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectranTeminalCharacters to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectranTeminalCharacters
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
