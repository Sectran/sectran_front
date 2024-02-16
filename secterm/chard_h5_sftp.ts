import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace sectran_chard. */
export namespace sectran_chard {

    /** Namespace secterm. */
    namespace secterm {

        /** Namespace v1. */
        namespace v1 {

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
        }
    }
}
