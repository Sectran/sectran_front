import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace sectran_chard. */
export namespace sectran_chard {

    /** Namespace secterm. */
    namespace secterm {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a SectermMessage. */
            interface ISectermMessage {

                /** SectermMessage request */
                request?: (sectran_chard.secterm.v1.ISectermConnectRequest|null);

                /** SectermMessage response */
                response?: (sectran_chard.secterm.v1.ISectermConnectResponse|null);

                /** SectermMessage resize */
                resize?: (sectran_chard.secterm.v1.ISectermTerminalResize|null);

                /** SectermMessage characters */
                characters?: (sectran_chard.secterm.v1.ISectranTeminalCharacters|null);

                /** SectermMessage sftpInfoReq */
                sftpInfoReq?: (sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest|null);

                /** SectermMessage sftpInfoRsp */
                sftpInfoRsp?: (sectran_chard.secterm.v1.ISectermSftpListInfoResponse|null);

                /** SectermMessage sftpCreateReq */
                sftpCreateReq?: (sectran_chard.secterm.v1.ISectermSftpCreate|null);

                /** SectermMessage sftpMoveReq */
                sftpMoveReq?: (sectran_chard.secterm.v1.ISectermSftpMove|null);

                /** SectermMessage sftpDelete */
                sftpDelete?: (sectran_chard.secterm.v1.ISectermSftpDelete|null);
            }

            /** Represents a SectermMessage. */
            class SectermMessage implements ISectermMessage {

                /**
                 * Constructs a new SectermMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermMessage);

                /** SectermMessage request. */
                public request?: (sectran_chard.secterm.v1.ISectermConnectRequest|null);

                /** SectermMessage response. */
                public response?: (sectran_chard.secterm.v1.ISectermConnectResponse|null);

                /** SectermMessage resize. */
                public resize?: (sectran_chard.secterm.v1.ISectermTerminalResize|null);

                /** SectermMessage characters. */
                public characters?: (sectran_chard.secterm.v1.ISectranTeminalCharacters|null);

                /** SectermMessage sftpInfoReq. */
                public sftpInfoReq?: (sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest|null);

                /** SectermMessage sftpInfoRsp. */
                public sftpInfoRsp?: (sectran_chard.secterm.v1.ISectermSftpListInfoResponse|null);

                /** SectermMessage sftpCreateReq. */
                public sftpCreateReq?: (sectran_chard.secterm.v1.ISectermSftpCreate|null);

                /** SectermMessage sftpMoveReq. */
                public sftpMoveReq?: (sectran_chard.secterm.v1.ISectermSftpMove|null);

                /** SectermMessage sftpDelete. */
                public sftpDelete?: (sectran_chard.secterm.v1.ISectermSftpDelete|null);

                /** SectermMessage data. */
                public data?: ("request"|"response"|"resize"|"characters"|"sftpInfoReq"|"sftpInfoRsp"|"sftpCreateReq"|"sftpMoveReq"|"sftpDelete");

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

            /** Properties of a FileSystemObject. */
            interface IFileSystemObject {

                /** FileSystemObject ModTime */
                ModTime?: (number|Long|null);

                /** FileSystemObject Size */
                Size?: (number|Long|null);

                /** FileSystemObject Mode */
                Mode?: (number|null);

                /** FileSystemObject IsDir */
                IsDir?: (boolean|null);

                /** FileSystemObject Path */
                Path?: (string|null);
            }

            /** Represents a FileSystemObject. */
            class FileSystemObject implements IFileSystemObject {

                /**
                 * Constructs a new FileSystemObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.IFileSystemObject);

                /** FileSystemObject ModTime. */
                public ModTime: (number|Long);

                /** FileSystemObject Size. */
                public Size: (number|Long);

                /** FileSystemObject Mode. */
                public Mode: number;

                /** FileSystemObject IsDir. */
                public IsDir: boolean;

                /** FileSystemObject Path. */
                public Path: string;

                /**
                 * Creates a new FileSystemObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FileSystemObject instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.IFileSystemObject): sectran_chard.secterm.v1.FileSystemObject;

                /**
                 * Encodes the specified FileSystemObject message. Does not implicitly {@link sectran_chard.secterm.v1.FileSystemObject.verify|verify} messages.
                 * @param message FileSystemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.IFileSystemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FileSystemObject message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.FileSystemObject.verify|verify} messages.
                 * @param message FileSystemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.IFileSystemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FileSystemObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FileSystemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.FileSystemObject;

                /**
                 * Decodes a FileSystemObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FileSystemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.FileSystemObject;

                /**
                 * Verifies a FileSystemObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FileSystemObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FileSystemObject
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.FileSystemObject;

                /**
                 * Creates a plain object from a FileSystemObject message. Also converts values to other types if specified.
                 * @param message FileSystemObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.FileSystemObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FileSystemObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FileSystemObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermSftpErrorMsg. */
            interface ISectermSftpErrorMsg {

                /** SectermSftpErrorMsg msg */
                msg?: (string|null);
            }

            /** Represents a SectermSftpErrorMsg. */
            class SectermSftpErrorMsg implements ISectermSftpErrorMsg {

                /**
                 * Constructs a new SectermSftpErrorMsg.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermSftpErrorMsg);

                /** SectermSftpErrorMsg msg. */
                public msg: string;

                /**
                 * Creates a new SectermSftpErrorMsg instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermSftpErrorMsg instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermSftpErrorMsg): sectran_chard.secterm.v1.SectermSftpErrorMsg;

                /**
                 * Encodes the specified SectermSftpErrorMsg message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpErrorMsg.verify|verify} messages.
                 * @param message SectermSftpErrorMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermSftpErrorMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermSftpErrorMsg message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpErrorMsg.verify|verify} messages.
                 * @param message SectermSftpErrorMsg message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermSftpErrorMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermSftpErrorMsg message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermSftpErrorMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermSftpErrorMsg;

                /**
                 * Decodes a SectermSftpErrorMsg message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermSftpErrorMsg
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermSftpErrorMsg;

                /**
                 * Verifies a SectermSftpErrorMsg message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermSftpErrorMsg message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermSftpErrorMsg
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermSftpErrorMsg;

                /**
                 * Creates a plain object from a SectermSftpErrorMsg message. Also converts values to other types if specified.
                 * @param message SectermSftpErrorMsg
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermSftpErrorMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermSftpErrorMsg to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermSftpErrorMsg
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermSftpDirectoryInfoRequest. */
            interface ISectermSftpDirectoryInfoRequest {

                /** SectermSftpDirectoryInfoRequest Path */
                Path?: (string|null);
            }

            /** Represents a SectermSftpDirectoryInfoRequest. */
            class SectermSftpDirectoryInfoRequest implements ISectermSftpDirectoryInfoRequest {

                /**
                 * Constructs a new SectermSftpDirectoryInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest);

                /** SectermSftpDirectoryInfoRequest Path. */
                public Path: string;

                /**
                 * Creates a new SectermSftpDirectoryInfoRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermSftpDirectoryInfoRequest instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest): sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest;

                /**
                 * Encodes the specified SectermSftpDirectoryInfoRequest message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest.verify|verify} messages.
                 * @param message SectermSftpDirectoryInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermSftpDirectoryInfoRequest message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest.verify|verify} messages.
                 * @param message SectermSftpDirectoryInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermSftpDirectoryInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermSftpDirectoryInfoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermSftpDirectoryInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest;

                /**
                 * Decodes a SectermSftpDirectoryInfoRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermSftpDirectoryInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest;

                /**
                 * Verifies a SectermSftpDirectoryInfoRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermSftpDirectoryInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermSftpDirectoryInfoRequest
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest;

                /**
                 * Creates a plain object from a SectermSftpDirectoryInfoRequest message. Also converts values to other types if specified.
                 * @param message SectermSftpDirectoryInfoRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermSftpDirectoryInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermSftpDirectoryInfoRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermSftpDirectoryInfoRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermSftpListInfoResponse. */
            interface ISectermSftpListInfoResponse {

                /** SectermSftpListInfoResponse Fso */
                Fso?: (sectran_chard.secterm.v1.IFileSystemObject[]|null);
            }

            /** Represents a SectermSftpListInfoResponse. */
            class SectermSftpListInfoResponse implements ISectermSftpListInfoResponse {

                /**
                 * Constructs a new SectermSftpListInfoResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermSftpListInfoResponse);

                /** SectermSftpListInfoResponse Fso. */
                public Fso: sectran_chard.secterm.v1.IFileSystemObject[];

                /**
                 * Creates a new SectermSftpListInfoResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermSftpListInfoResponse instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermSftpListInfoResponse): sectran_chard.secterm.v1.SectermSftpListInfoResponse;

                /**
                 * Encodes the specified SectermSftpListInfoResponse message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpListInfoResponse.verify|verify} messages.
                 * @param message SectermSftpListInfoResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermSftpListInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermSftpListInfoResponse message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpListInfoResponse.verify|verify} messages.
                 * @param message SectermSftpListInfoResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermSftpListInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermSftpListInfoResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermSftpListInfoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermSftpListInfoResponse;

                /**
                 * Decodes a SectermSftpListInfoResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermSftpListInfoResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermSftpListInfoResponse;

                /**
                 * Verifies a SectermSftpListInfoResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermSftpListInfoResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermSftpListInfoResponse
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermSftpListInfoResponse;

                /**
                 * Creates a plain object from a SectermSftpListInfoResponse message. Also converts values to other types if specified.
                 * @param message SectermSftpListInfoResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermSftpListInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermSftpListInfoResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermSftpListInfoResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** FileType enum. */
            enum FileType {
                Dir = 0,
                File = 1
            }

            /** Properties of a SectermSftpCreate. */
            interface ISectermSftpCreate {

                /** SectermSftpCreate FileType */
                FileType?: (sectran_chard.secterm.v1.FileType|null);

                /** SectermSftpCreate Path */
                Path?: (string|null);
            }

            /** Represents a SectermSftpCreate. */
            class SectermSftpCreate implements ISectermSftpCreate {

                /**
                 * Constructs a new SectermSftpCreate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermSftpCreate);

                /** SectermSftpCreate FileType. */
                public FileType: sectran_chard.secterm.v1.FileType;

                /** SectermSftpCreate Path. */
                public Path: string;

                /**
                 * Creates a new SectermSftpCreate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermSftpCreate instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermSftpCreate): sectran_chard.secterm.v1.SectermSftpCreate;

                /**
                 * Encodes the specified SectermSftpCreate message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpCreate.verify|verify} messages.
                 * @param message SectermSftpCreate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermSftpCreate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermSftpCreate message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpCreate.verify|verify} messages.
                 * @param message SectermSftpCreate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermSftpCreate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermSftpCreate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermSftpCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermSftpCreate;

                /**
                 * Decodes a SectermSftpCreate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermSftpCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermSftpCreate;

                /**
                 * Verifies a SectermSftpCreate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermSftpCreate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermSftpCreate
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermSftpCreate;

                /**
                 * Creates a plain object from a SectermSftpCreate message. Also converts values to other types if specified.
                 * @param message SectermSftpCreate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermSftpCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermSftpCreate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermSftpCreate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermSftpMove. */
            interface ISectermSftpMove {

                /** SectermSftpMove OriginPath */
                OriginPath?: (string|null);

                /** SectermSftpMove NewPath */
                NewPath?: (string|null);
            }

            /** Represents a SectermSftpMove. */
            class SectermSftpMove implements ISectermSftpMove {

                /**
                 * Constructs a new SectermSftpMove.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermSftpMove);

                /** SectermSftpMove OriginPath. */
                public OriginPath: string;

                /** SectermSftpMove NewPath. */
                public NewPath: string;

                /**
                 * Creates a new SectermSftpMove instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermSftpMove instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermSftpMove): sectran_chard.secterm.v1.SectermSftpMove;

                /**
                 * Encodes the specified SectermSftpMove message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpMove.verify|verify} messages.
                 * @param message SectermSftpMove message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermSftpMove, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermSftpMove message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpMove.verify|verify} messages.
                 * @param message SectermSftpMove message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermSftpMove, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermSftpMove message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermSftpMove
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermSftpMove;

                /**
                 * Decodes a SectermSftpMove message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermSftpMove
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermSftpMove;

                /**
                 * Verifies a SectermSftpMove message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermSftpMove message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermSftpMove
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermSftpMove;

                /**
                 * Creates a plain object from a SectermSftpMove message. Also converts values to other types if specified.
                 * @param message SectermSftpMove
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermSftpMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermSftpMove to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermSftpMove
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermSftpDelete. */
            interface ISectermSftpDelete {

                /** SectermSftpDelete Path */
                Path?: (string|null);
            }

            /** Represents a SectermSftpDelete. */
            class SectermSftpDelete implements ISectermSftpDelete {

                /**
                 * Constructs a new SectermSftpDelete.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermSftpDelete);

                /** SectermSftpDelete Path. */
                public Path: string;

                /**
                 * Creates a new SectermSftpDelete instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermSftpDelete instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermSftpDelete): sectran_chard.secterm.v1.SectermSftpDelete;

                /**
                 * Encodes the specified SectermSftpDelete message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDelete.verify|verify} messages.
                 * @param message SectermSftpDelete message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermSftpDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermSftpDelete message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDelete.verify|verify} messages.
                 * @param message SectermSftpDelete message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermSftpDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermSftpDelete message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermSftpDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermSftpDelete;

                /**
                 * Decodes a SectermSftpDelete message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermSftpDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermSftpDelete;

                /**
                 * Verifies a SectermSftpDelete message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermSftpDelete message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermSftpDelete
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermSftpDelete;

                /**
                 * Creates a plain object from a SectermSftpDelete message. Also converts values to other types if specified.
                 * @param message SectermSftpDelete
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermSftpDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermSftpDelete to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermSftpDelete
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermSftpDownloadReq. */
            interface ISectermSftpDownloadReq {

                /** SectermSftpDownloadReq Path */
                Path?: (string|null);
            }

            /** Represents a SectermSftpDownloadReq. */
            class SectermSftpDownloadReq implements ISectermSftpDownloadReq {

                /**
                 * Constructs a new SectermSftpDownloadReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermSftpDownloadReq);

                /** SectermSftpDownloadReq Path. */
                public Path: string;

                /**
                 * Creates a new SectermSftpDownloadReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermSftpDownloadReq instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermSftpDownloadReq): sectran_chard.secterm.v1.SectermSftpDownloadReq;

                /**
                 * Encodes the specified SectermSftpDownloadReq message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDownloadReq.verify|verify} messages.
                 * @param message SectermSftpDownloadReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermSftpDownloadReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermSftpDownloadReq message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDownloadReq.verify|verify} messages.
                 * @param message SectermSftpDownloadReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermSftpDownloadReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermSftpDownloadReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermSftpDownloadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermSftpDownloadReq;

                /**
                 * Decodes a SectermSftpDownloadReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermSftpDownloadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermSftpDownloadReq;

                /**
                 * Verifies a SectermSftpDownloadReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermSftpDownloadReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermSftpDownloadReq
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermSftpDownloadReq;

                /**
                 * Creates a plain object from a SectermSftpDownloadReq message. Also converts values to other types if specified.
                 * @param message SectermSftpDownloadReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermSftpDownloadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermSftpDownloadReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermSftpDownloadReq
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermSftpDownloadRsp. */
            interface ISectermSftpDownloadRsp {

                /** SectermSftpDownloadRsp DownloadUrl */
                DownloadUrl?: (string|null);
            }

            /** Represents a SectermSftpDownloadRsp. */
            class SectermSftpDownloadRsp implements ISectermSftpDownloadRsp {

                /**
                 * Constructs a new SectermSftpDownloadRsp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermSftpDownloadRsp);

                /** SectermSftpDownloadRsp DownloadUrl. */
                public DownloadUrl: string;

                /**
                 * Creates a new SectermSftpDownloadRsp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermSftpDownloadRsp instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermSftpDownloadRsp): sectran_chard.secterm.v1.SectermSftpDownloadRsp;

                /**
                 * Encodes the specified SectermSftpDownloadRsp message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDownloadRsp.verify|verify} messages.
                 * @param message SectermSftpDownloadRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermSftpDownloadRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermSftpDownloadRsp message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpDownloadRsp.verify|verify} messages.
                 * @param message SectermSftpDownloadRsp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermSftpDownloadRsp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermSftpDownloadRsp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermSftpDownloadRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermSftpDownloadRsp;

                /**
                 * Decodes a SectermSftpDownloadRsp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermSftpDownloadRsp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermSftpDownloadRsp;

                /**
                 * Verifies a SectermSftpDownloadRsp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermSftpDownloadRsp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermSftpDownloadRsp
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermSftpDownloadRsp;

                /**
                 * Creates a plain object from a SectermSftpDownloadRsp message. Also converts values to other types if specified.
                 * @param message SectermSftpDownloadRsp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermSftpDownloadRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermSftpDownloadRsp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermSftpDownloadRsp
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermSftpUploadReq. */
            interface ISectermSftpUploadReq {

                /** SectermSftpUploadReq Path */
                Path?: (string|null);

                /** SectermSftpUploadReq Token */
                Token?: (string|null);
            }

            /** Represents a SectermSftpUploadReq. */
            class SectermSftpUploadReq implements ISectermSftpUploadReq {

                /**
                 * Constructs a new SectermSftpUploadReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermSftpUploadReq);

                /** SectermSftpUploadReq Path. */
                public Path: string;

                /** SectermSftpUploadReq Token. */
                public Token: string;

                /**
                 * Creates a new SectermSftpUploadReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermSftpUploadReq instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermSftpUploadReq): sectran_chard.secterm.v1.SectermSftpUploadReq;

                /**
                 * Encodes the specified SectermSftpUploadReq message. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpUploadReq.verify|verify} messages.
                 * @param message SectermSftpUploadReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermSftpUploadReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermSftpUploadReq message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermSftpUploadReq.verify|verify} messages.
                 * @param message SectermSftpUploadReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermSftpUploadReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermSftpUploadReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermSftpUploadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermSftpUploadReq;

                /**
                 * Decodes a SectermSftpUploadReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermSftpUploadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermSftpUploadReq;

                /**
                 * Verifies a SectermSftpUploadReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermSftpUploadReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermSftpUploadReq
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermSftpUploadReq;

                /**
                 * Creates a plain object from a SectermSftpUploadReq message. Also converts values to other types if specified.
                 * @param message SectermSftpUploadReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermSftpUploadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermSftpUploadReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermSftpUploadReq
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermFileInfo. */
            interface ISectermFileInfo {

                /** SectermFileInfo Name */
                Name?: (string|null);

                /** SectermFileInfo Path */
                Path?: (string|null);

                /** SectermFileInfo ModTime */
                ModTime?: (number|Long|null);

                /** SectermFileInfo Size */
                Size?: (number|Long|null);

                /** SectermFileInfo Mode */
                Mode?: (number|null);

                /** SectermFileInfo IsDir */
                IsDir?: (boolean|null);
            }

            /** Represents a SectermFileInfo. */
            class SectermFileInfo implements ISectermFileInfo {

                /**
                 * Constructs a new SectermFileInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermFileInfo);

                /** SectermFileInfo Name. */
                public Name: string;

                /** SectermFileInfo Path. */
                public Path: string;

                /** SectermFileInfo ModTime. */
                public ModTime: (number|Long);

                /** SectermFileInfo Size. */
                public Size: (number|Long);

                /** SectermFileInfo Mode. */
                public Mode: number;

                /** SectermFileInfo IsDir. */
                public IsDir: boolean;

                /**
                 * Creates a new SectermFileInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermFileInfo instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermFileInfo): sectran_chard.secterm.v1.SectermFileInfo;

                /**
                 * Encodes the specified SectermFileInfo message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileInfo.verify|verify} messages.
                 * @param message SectermFileInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermFileInfo message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileInfo.verify|verify} messages.
                 * @param message SectermFileInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermFileInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermFileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermFileInfo;

                /**
                 * Decodes a SectermFileInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermFileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermFileInfo;

                /**
                 * Verifies a SectermFileInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermFileInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermFileInfo
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermFileInfo;

                /**
                 * Creates a plain object from a SectermFileInfo message. Also converts values to other types if specified.
                 * @param message SectermFileInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermFileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermFileInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermFileInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermFileListRequest. */
            interface ISectermFileListRequest {

                /** SectermFileListRequest Path */
                Path?: (string|null);
            }

            /** Represents a SectermFileListRequest. */
            class SectermFileListRequest implements ISectermFileListRequest {

                /**
                 * Constructs a new SectermFileListRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermFileListRequest);

                /** SectermFileListRequest Path. */
                public Path: string;

                /**
                 * Creates a new SectermFileListRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermFileListRequest instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermFileListRequest): sectran_chard.secterm.v1.SectermFileListRequest;

                /**
                 * Encodes the specified SectermFileListRequest message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileListRequest.verify|verify} messages.
                 * @param message SectermFileListRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermFileListRequest message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileListRequest.verify|verify} messages.
                 * @param message SectermFileListRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermFileListRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermFileListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermFileListRequest;

                /**
                 * Decodes a SectermFileListRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermFileListRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermFileListRequest;

                /**
                 * Verifies a SectermFileListRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermFileListRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermFileListRequest
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermFileListRequest;

                /**
                 * Creates a plain object from a SectermFileListRequest message. Also converts values to other types if specified.
                 * @param message SectermFileListRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermFileListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermFileListRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermFileListRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermFileListResponse. */
            interface ISectermFileListResponse {

                /** SectermFileListResponse FileInfo */
                FileInfo?: (sectran_chard.secterm.v1.ISectermFileInfo[]|null);
            }

            /** Represents a SectermFileListResponse. */
            class SectermFileListResponse implements ISectermFileListResponse {

                /**
                 * Constructs a new SectermFileListResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermFileListResponse);

                /** SectermFileListResponse FileInfo. */
                public FileInfo: sectran_chard.secterm.v1.ISectermFileInfo[];

                /**
                 * Creates a new SectermFileListResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermFileListResponse instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermFileListResponse): sectran_chard.secterm.v1.SectermFileListResponse;

                /**
                 * Encodes the specified SectermFileListResponse message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileListResponse.verify|verify} messages.
                 * @param message SectermFileListResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermFileListResponse message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileListResponse.verify|verify} messages.
                 * @param message SectermFileListResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermFileListResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermFileListResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermFileListResponse;

                /**
                 * Decodes a SectermFileListResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermFileListResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermFileListResponse;

                /**
                 * Verifies a SectermFileListResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermFileListResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermFileListResponse
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermFileListResponse;

                /**
                 * Creates a plain object from a SectermFileListResponse message. Also converts values to other types if specified.
                 * @param message SectermFileListResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermFileListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermFileListResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermFileListResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermFileMove. */
            interface ISectermFileMove {

                /** SectermFileMove Path */
                Path?: (string|null);

                /** SectermFileMove DstPath */
                DstPath?: (string|null);

                /** SectermFileMove force */
                force?: (boolean|null);
            }

            /** Represents a SectermFileMove. */
            class SectermFileMove implements ISectermFileMove {

                /**
                 * Constructs a new SectermFileMove.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermFileMove);

                /** SectermFileMove Path. */
                public Path: string;

                /** SectermFileMove DstPath. */
                public DstPath: string;

                /** SectermFileMove force. */
                public force: boolean;

                /**
                 * Creates a new SectermFileMove instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermFileMove instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermFileMove): sectran_chard.secterm.v1.SectermFileMove;

                /**
                 * Encodes the specified SectermFileMove message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileMove.verify|verify} messages.
                 * @param message SectermFileMove message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermFileMove, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermFileMove message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileMove.verify|verify} messages.
                 * @param message SectermFileMove message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermFileMove, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermFileMove message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermFileMove
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermFileMove;

                /**
                 * Decodes a SectermFileMove message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermFileMove
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermFileMove;

                /**
                 * Verifies a SectermFileMove message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermFileMove message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermFileMove
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermFileMove;

                /**
                 * Creates a plain object from a SectermFileMove message. Also converts values to other types if specified.
                 * @param message SectermFileMove
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermFileMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermFileMove to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermFileMove
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermFileDelete. */
            interface ISectermFileDelete {

                /** SectermFileDelete Path */
                Path?: (string[]|null);
            }

            /** Represents a SectermFileDelete. */
            class SectermFileDelete implements ISectermFileDelete {

                /**
                 * Constructs a new SectermFileDelete.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermFileDelete);

                /** SectermFileDelete Path. */
                public Path: string[];

                /**
                 * Creates a new SectermFileDelete instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermFileDelete instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermFileDelete): sectran_chard.secterm.v1.SectermFileDelete;

                /**
                 * Encodes the specified SectermFileDelete message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileDelete.verify|verify} messages.
                 * @param message SectermFileDelete message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermFileDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermFileDelete message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileDelete.verify|verify} messages.
                 * @param message SectermFileDelete message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermFileDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermFileDelete message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermFileDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermFileDelete;

                /**
                 * Decodes a SectermFileDelete message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermFileDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermFileDelete;

                /**
                 * Verifies a SectermFileDelete message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermFileDelete message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermFileDelete
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermFileDelete;

                /**
                 * Creates a plain object from a SectermFileDelete message. Also converts values to other types if specified.
                 * @param message SectermFileDelete
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermFileDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermFileDelete to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermFileDelete
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermFileCreate. */
            interface ISectermFileCreate {

                /** SectermFileCreate file */
                file?: (sectran_chard.secterm.v1.ISectermFileInfo|null);
            }

            /** Represents a SectermFileCreate. */
            class SectermFileCreate implements ISectermFileCreate {

                /**
                 * Constructs a new SectermFileCreate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermFileCreate);

                /** SectermFileCreate file. */
                public file?: (sectran_chard.secterm.v1.ISectermFileInfo|null);

                /**
                 * Creates a new SectermFileCreate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermFileCreate instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermFileCreate): sectran_chard.secterm.v1.SectermFileCreate;

                /**
                 * Encodes the specified SectermFileCreate message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileCreate.verify|verify} messages.
                 * @param message SectermFileCreate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermFileCreate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermFileCreate message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileCreate.verify|verify} messages.
                 * @param message SectermFileCreate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermFileCreate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermFileCreate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermFileCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermFileCreate;

                /**
                 * Decodes a SectermFileCreate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermFileCreate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermFileCreate;

                /**
                 * Verifies a SectermFileCreate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermFileCreate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermFileCreate
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermFileCreate;

                /**
                 * Creates a plain object from a SectermFileCreate message. Also converts values to other types if specified.
                 * @param message SectermFileCreate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermFileCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermFileCreate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermFileCreate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermFileDownloadReq. */
            interface ISectermFileDownloadReq {

                /** SectermFileDownloadReq FileInfo */
                FileInfo?: (sectran_chard.secterm.v1.ISectermFileInfo[]|null);
            }

            /** Represents a SectermFileDownloadReq. */
            class SectermFileDownloadReq implements ISectermFileDownloadReq {

                /**
                 * Constructs a new SectermFileDownloadReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermFileDownloadReq);

                /** SectermFileDownloadReq FileInfo. */
                public FileInfo: sectran_chard.secterm.v1.ISectermFileInfo[];

                /**
                 * Creates a new SectermFileDownloadReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermFileDownloadReq instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermFileDownloadReq): sectran_chard.secterm.v1.SectermFileDownloadReq;

                /**
                 * Encodes the specified SectermFileDownloadReq message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileDownloadReq.verify|verify} messages.
                 * @param message SectermFileDownloadReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermFileDownloadReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermFileDownloadReq message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileDownloadReq.verify|verify} messages.
                 * @param message SectermFileDownloadReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermFileDownloadReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermFileDownloadReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermFileDownloadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermFileDownloadReq;

                /**
                 * Decodes a SectermFileDownloadReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermFileDownloadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermFileDownloadReq;

                /**
                 * Verifies a SectermFileDownloadReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermFileDownloadReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermFileDownloadReq
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermFileDownloadReq;

                /**
                 * Creates a plain object from a SectermFileDownloadReq message. Also converts values to other types if specified.
                 * @param message SectermFileDownloadReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermFileDownloadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermFileDownloadReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermFileDownloadReq
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermFileUploadReq. */
            interface ISectermFileUploadReq {

                /** SectermFileUploadReq DstPath */
                DstPath?: (string|null);

                /** SectermFileUploadReq FileInfo */
                FileInfo?: (sectran_chard.secterm.v1.ISectermFileInfo[]|null);
            }

            /** Represents a SectermFileUploadReq. */
            class SectermFileUploadReq implements ISectermFileUploadReq {

                /**
                 * Constructs a new SectermFileUploadReq.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermFileUploadReq);

                /** SectermFileUploadReq DstPath. */
                public DstPath: string;

                /** SectermFileUploadReq FileInfo. */
                public FileInfo: sectran_chard.secterm.v1.ISectermFileInfo[];

                /**
                 * Creates a new SectermFileUploadReq instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermFileUploadReq instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermFileUploadReq): sectran_chard.secterm.v1.SectermFileUploadReq;

                /**
                 * Encodes the specified SectermFileUploadReq message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileUploadReq.verify|verify} messages.
                 * @param message SectermFileUploadReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermFileUploadReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermFileUploadReq message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileUploadReq.verify|verify} messages.
                 * @param message SectermFileUploadReq message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermFileUploadReq, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermFileUploadReq message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermFileUploadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermFileUploadReq;

                /**
                 * Decodes a SectermFileUploadReq message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermFileUploadReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermFileUploadReq;

                /**
                 * Verifies a SectermFileUploadReq message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermFileUploadReq message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermFileUploadReq
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermFileUploadReq;

                /**
                 * Creates a plain object from a SectermFileUploadReq message. Also converts values to other types if specified.
                 * @param message SectermFileUploadReq
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermFileUploadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermFileUploadReq to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermFileUploadReq
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SectermFileData. */
            interface ISectermFileData {

                /** SectermFileData file */
                file?: (sectran_chard.secterm.v1.ISectermFileInfo|null);

                /** SectermFileData data */
                data?: (Uint8Array|null);
            }

            /** Represents a SectermFileData. */
            class SectermFileData implements ISectermFileData {

                /**
                 * Constructs a new SectermFileData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sectran_chard.secterm.v1.ISectermFileData);

                /** SectermFileData file. */
                public file?: (sectran_chard.secterm.v1.ISectermFileInfo|null);

                /** SectermFileData data. */
                public data: Uint8Array;

                /**
                 * Creates a new SectermFileData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SectermFileData instance
                 */
                public static create(properties?: sectran_chard.secterm.v1.ISectermFileData): sectran_chard.secterm.v1.SectermFileData;

                /**
                 * Encodes the specified SectermFileData message. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileData.verify|verify} messages.
                 * @param message SectermFileData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sectran_chard.secterm.v1.ISectermFileData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SectermFileData message, length delimited. Does not implicitly {@link sectran_chard.secterm.v1.SectermFileData.verify|verify} messages.
                 * @param message SectermFileData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sectran_chard.secterm.v1.ISectermFileData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SectermFileData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SectermFileData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sectran_chard.secterm.v1.SectermFileData;

                /**
                 * Decodes a SectermFileData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SectermFileData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sectran_chard.secterm.v1.SectermFileData;

                /**
                 * Verifies a SectermFileData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SectermFileData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SectermFileData
                 */
                public static fromObject(object: { [k: string]: any }): sectran_chard.secterm.v1.SectermFileData;

                /**
                 * Creates a plain object from a SectermFileData message. Also converts values to other types if specified.
                 * @param message SectermFileData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sectran_chard.secterm.v1.SectermFileData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SectermFileData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SectermFileData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
