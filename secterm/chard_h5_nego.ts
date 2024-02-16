import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace sectran_chard. */
export namespace sectran_chard {

    /** Namespace secterm. */
    namespace secterm {

        /** Namespace v1. */
        namespace v1 {

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

            /** Properties of a SectermCredentialPrivateKey. */
            interface ISectermCredentialPrivateKey {

                /** SectermCredentialPrivateKey privateKey */
                privateKey?: (Uint8Array|null);

                /** SectermCredentialPrivateKey privateKeyPassword */
                privateKeyPassword?: (Uint8Array|null);
            }

            /** Represents a SectermCredentialPrivateKey. */
            class SectermCredentialPrivateKey implements ISectermCredentialPrivateKey {

                /**
                 * Constructs a new SectermCredentialPrivateKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermCredentialPrivateKey);

                /** SectermCredentialPrivateKey privateKey. */
                public privateKey: Uint8Array;

                /** SectermCredentialPrivateKey privateKeyPassword. */
                public privateKeyPassword: Uint8Array;

                /**
                 * Creates a new SectermCredentialPrivateKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermCredentialPrivateKey instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermCredentialPrivateKey): sectran_chard.secterm.v1.SectermCredentialPrivateKey;

                /**
                 * Encodes the specified SectermCredentialPrivateKey message. Does not implicitly {@link sectran_chard.secterm.v1.SectermCredentialPrivateKey.verify|verify} messages.
                 * @param message SectermCredentialPrivateKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermCredentialPrivateKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermCredentialPrivateKey message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermCredentialPrivateKey.verify|verify} messages.
                 * @param message SectermCredentialPrivateKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermCredentialPrivateKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermCredentialPrivateKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermCredentialPrivateKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermCredentialPrivateKey;

                /**
                 * Decodes a SectermCredentialPrivateKey message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermCredentialPrivateKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermCredentialPrivateKey;

                /**
                 * Verifies a SectermCredentialPrivateKey message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermCredentialPrivateKey message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermCredentialPrivateKey
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermCredentialPrivateKey;

                /**
                 * Creates a plain object from a SectermCredentialPrivateKey message. Also converts values to other types if specified.
                 * @param message SectermCredentialPrivateKey
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermCredentialPrivateKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermCredentialPrivateKey to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermCredentialPrivateKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermCredentialPassword. */
            interface ISectermCredentialPassword {

                /** SectermCredentialPassword password */
                password?: (Uint8Array|null);
            }

            /** Represents a SectermCredentialPassword. */
            class SectermCredentialPassword implements ISectermCredentialPassword {

                /**
                 * Constructs a new SectermCredentialPassword.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermCredentialPassword);

                /** SectermCredentialPassword password. */
                public password: Uint8Array;

                /**
                 * Creates a new SectermCredentialPassword instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermCredentialPassword instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermCredentialPassword): sectran_chard.secterm.v1.SectermCredentialPassword;

                /**
                 * Encodes the specified SectermCredentialPassword message. Does not implicitly {@link sectran_chard.secterm.v1.SectermCredentialPassword.verify|verify} messages.
                 * @param message SectermCredentialPassword message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermCredentialPassword, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermCredentialPassword message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermCredentialPassword.verify|verify} messages.
                 * @param message SectermCredentialPassword message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermCredentialPassword, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermCredentialPassword message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermCredentialPassword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermCredentialPassword;

                /**
                 * Decodes a SectermCredentialPassword message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermCredentialPassword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermCredentialPassword;

                /**
                 * Verifies a SectermCredentialPassword message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermCredentialPassword message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermCredentialPassword
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermCredentialPassword;

                /**
                 * Creates a plain object from a SectermCredentialPassword message. Also converts values to other types if specified.
                 * @param message SectermCredentialPassword
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermCredentialPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermCredentialPassword to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermCredentialPassword
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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
                privateKey?: (sectran_chard.secterm.v1.ISectermCredentialPrivateKey|null);

                /** SectermConnectRequest password */
                password?: (sectran_chard.secterm.v1.ISectermCredentialPassword|null);

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
                public privateKey?: (sectran_chard.secterm.v1.ISectermCredentialPrivateKey|null);

                /** SectermConnectRequest password. */
                public password?: (sectran_chard.secterm.v1.ISectermCredentialPassword|null);

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
        }
    }
}
