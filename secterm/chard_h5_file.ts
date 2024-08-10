import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace sectran_chard. */
export namespace sectran_chard {

    /** Namespace secterm. */
    namespace secterm {

        /** Namespace v1. */
        namespace v1 {

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
