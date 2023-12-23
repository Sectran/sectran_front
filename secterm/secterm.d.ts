import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace sectran_chard. */
export namespace sectran_chard {

    /** Namespace secterm. */
    namespace secterm {

        /** Namespace v1. */
        namespace v1 {

            /** SectermMessageType enum. */
            enum SectermMessageType {
                SectermConnectRequestMessage = 0,
                SectermConnectResponseMessage = 1,
                SectranTeminalResizeMessage = 2,
                SectranTeminalCharactersMessage = 3
            }

            /** Properties of a SectermMessage. */
            interface ISectermMessage {

                /** SectermMessage mesType */
                mesType?: (sectran_chard.secterm.v1.SectermMessageType|null);

                /** SectermMessage request */
                request?: (sectran_chard.secterm.v1.ISectermConnectRequest|null);

                /** SectermMessage response */
                response?: (sectran_chard.secterm.v1.ISectermConnectResponse|null);

                /** SectermMessage resize */
                resize?: (sectran_chard.secterm.v1.ISectermTerminalResize|null);

                /** SectermMessage characters */
                characters?: (sectran_chard.secterm.v1.ISectranTeminalCharacters|null);
            }

            /** Represents a SectermMessage. */
            class SectermMessage implements ISectermMessage {

                /**
                 * Constructs a new SectermMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermMessage);

                /** SectermMessage mesType. */
                public mesType: sectran_chard.secterm.v1.SectermMessageType;

                /** SectermMessage request. */
                public request?: (sectran_chard.secterm.v1.ISectermConnectRequest|null);

                /** SectermMessage response. */
                public response?: (sectran_chard.secterm.v1.ISectermConnectResponse|null);

                /** SectermMessage resize. */
                public resize?: (sectran_chard.secterm.v1.ISectermTerminalResize|null);

                /** SectermMessage characters. */
                public characters?: (sectran_chard.secterm.v1.ISectranTeminalCharacters|null);

                /** SectermMessage data. */
                public data?: ("request"|"response"|"resize"|"characters");

                /**
                 * Creates a new SectermMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermMessage instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermMessage): sectran_chard.secterm.v1.SectermMessage;

                /**
                 * Encodes the specified SectermMessage message. Does not implicitly {@link sectran_chard.secterm.v1.SectermMessage.verify|verify} messages.
                 * @param message SectermMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermMessage message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermMessage.verify|verify} messages.
                 * @param message SectermMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermMessage;

                /**
                 * Decodes a SectermMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermMessage;

                /**
                 * Verifies a SectermMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermMessage
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermMessage;

                /**
                 * Creates a plain object from a SectermMessage message. Also converts values to other types if specified.
                 * @param message SectermMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** AuthMethod enum. */
            enum AuthMethod {
                INTERACTIVE_AUTH = 0,
                PUBLICKEY_AUTH = 1,
                PASSWORD_AUTH = 2,
                NO_CREDENTIALS = 3
            }

            /** SectermProtocols enum. */
            enum SectermProtocols {
                SECTERM_SSH = 0,
                SECTERM_TELNET = 1
            }

            /** Properties of a SectermConnectRequest. */
            interface ISectermConnectRequest {

                /** SectermConnectRequest token */
                token?: (string|null);

                /** SectermConnectRequest Colums */
                Colums?: (number|null);

                /** SectermConnectRequest Rows */
                Rows?: (number|null);

                /** SectermConnectRequest unmanaged */
                unmanaged?: (boolean|null);

                /** SectermConnectRequest username */
                username?: (string|null);

                /** SectermConnectRequest authMethod */
                authMethod?: (sectran_chard.secterm.v1.AuthMethod|null);

                /** SectermConnectRequest privateKey */
                privateKey?: (Uint8Array|null);

                /** SectermConnectRequest password */
                password?: (Uint8Array|null);

                /** SectermConnectRequest hostname */
                hostname?: (string|null);

                /** SectermConnectRequest port */
                port?: (number|null);

                /** SectermConnectRequest protocol */
                protocol?: (sectran_chard.secterm.v1.SectermProtocols|null);
            }

            /** Represents a SectermConnectRequest. */
            class SectermConnectRequest implements ISectermConnectRequest {

                /**
                 * Constructs a new SectermConnectRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermConnectRequest);

                /** SectermConnectRequest token. */
                public token: string;

                /** SectermConnectRequest Colums. */
                public Colums: number;

                /** SectermConnectRequest Rows. */
                public Rows: number;

                /** SectermConnectRequest unmanaged. */
                public unmanaged: boolean;

                /** SectermConnectRequest username. */
                public username: string;

                /** SectermConnectRequest authMethod. */
                public authMethod: sectran_chard.secterm.v1.AuthMethod;

                /** SectermConnectRequest privateKey. */
                public privateKey?: (Uint8Array|null);

                /** SectermConnectRequest password. */
                public password?: (Uint8Array|null);

                /** SectermConnectRequest hostname. */
                public hostname: string;

                /** SectermConnectRequest port. */
                public port: number;

                /** SectermConnectRequest protocol. */
                public protocol: sectran_chard.secterm.v1.SectermProtocols;

                /** SectermConnectRequest credential. */
                public credential?: ("privateKey"|"password");

                /**
                 * Creates a new SectermConnectRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermConnectRequest instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermConnectRequest): sectran_chard.secterm.v1.SectermConnectRequest;

                /**
                 * Encodes the specified SectermConnectRequest message. Does not implicitly {@link sectran_chard.secterm.v1.SectermConnectRequest.verify|verify} messages.
                 * @param message SectermConnectRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermConnectRequest message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermConnectRequest.verify|verify} messages.
                 * @param message SectermConnectRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermConnectRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermConnectRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermConnectRequest;

                /**
                 * Decodes a SectermConnectRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermConnectRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermConnectRequest;

                /**
                 * Verifies a SectermConnectRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermConnectRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermConnectRequest
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermConnectRequest;

                /**
                 * Creates a plain object from a SectermConnectRequest message. Also converts values to other types if specified.
                 * @param message SectermConnectRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermConnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermConnectRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermConnectRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** SectermCode enum. */
            enum SectermCode {
                WRONG_CREDENTIAL = 0,
                NETWORK_UNREACHABLE = 1,
                UNSURPPORTED_AUTH_METHOD = 2,
                LOGON_SUCCESS = 3
            }

            /** Properties of a SectermConnectResponse. */
            interface ISectermConnectResponse {

                /** SectermConnectResponse code */
                code?: (sectran_chard.secterm.v1.SectermCode|null);
            }

            /** Represents a SectermConnectResponse. */
            class SectermConnectResponse implements ISectermConnectResponse {

                /**
                 * Constructs a new SectermConnectResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermConnectResponse);

                /** SectermConnectResponse code. */
                public code: sectran_chard.secterm.v1.SectermCode;

                /**
                 * Creates a new SectermConnectResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermConnectResponse instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermConnectResponse): sectran_chard.secterm.v1.SectermConnectResponse;

                /**
                 * Encodes the specified SectermConnectResponse message. Does not implicitly {@link sectran_chard.secterm.v1.SectermConnectResponse.verify|verify} messages.
                 * @param message SectermConnectResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermConnectResponse message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermConnectResponse.verify|verify} messages.
                 * @param message SectermConnectResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermConnectResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermConnectResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermConnectResponse;

                /**
                 * Decodes a SectermConnectResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermConnectResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermConnectResponse;

                /**
                 * Verifies a SectermConnectResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermConnectResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermConnectResponse
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermConnectResponse;

                /**
                 * Creates a plain object from a SectermConnectResponse message. Also converts values to other types if specified.
                 * @param message SectermConnectResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermConnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermConnectResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermConnectResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

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
                constructor(properties?: sectran_chard.secterm.v1.ISectermTerminalResize);

                /** SectermTerminalResize colums. */
                public colums: number;

                /** SectermTerminalResize rows. */
                public rows: number;

                /**
                 * Creates a new SectermTerminalResize instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermTerminalResize instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermTerminalResize): sectran_chard.secterm.v1.SectermTerminalResize;

                /**
                 * Encodes the specified SectermTerminalResize message. Does not implicitly {@link sectran_chard.secterm.v1.SectermTerminalResize.verify|verify} messages.
                 * @param message SectermTerminalResize message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermTerminalResize, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermTerminalResize message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermTerminalResize.verify|verify} messages.
                 * @param message SectermTerminalResize message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermTerminalResize, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermTerminalResize message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermTerminalResize
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermTerminalResize;

                /**
                 * Decodes a SectermTerminalResize message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermTerminalResize
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermTerminalResize;

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
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermTerminalResize;

                /**
                 * Creates a plain object from a SectermTerminalResize message. Also converts values to other types if specified.
                 * @param message SectermTerminalResize
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermTerminalResize, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: sectran_chard.secterm.v1.ISectranTeminalCharacters);

                /** SectranTeminalCharacters Data. */
                public Data: Uint8Array;

                /**
                 * Creates a new SectranTeminalCharacters instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectranTeminalCharacters instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectranTeminalCharacters): sectran_chard.secterm.v1.SectranTeminalCharacters;

                /**
                 * Encodes the specified SectranTeminalCharacters message. Does not implicitly {@link sectran_chard.secterm.v1.SectranTeminalCharacters.verify|verify} messages.
                 * @param message SectranTeminalCharacters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectranTeminalCharacters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectranTeminalCharacters message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectranTeminalCharacters.verify|verify} messages.
                 * @param message SectranTeminalCharacters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectranTeminalCharacters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectranTeminalCharacters message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectranTeminalCharacters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectranTeminalCharacters;

                /**
                 * Decodes a SectranTeminalCharacters message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectranTeminalCharacters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectranTeminalCharacters;

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
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectranTeminalCharacters;

                /**
                 * Creates a plain object from a SectranTeminalCharacters message. Also converts values to other types if specified.
                 * @param message SectranTeminalCharacters
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectranTeminalCharacters, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
}
