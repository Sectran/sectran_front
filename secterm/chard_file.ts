import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace secterm. */
export namespace secterm {

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
            constructor(properties?: secterm.v1.ISectermFileInfo);

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
            public static create(properties?: secterm.v1.ISectermFileInfo): secterm.v1.SectermFileInfo;

            /**
             * Encodes the specified SectermFileInfo message. Does not implicitly {@link secterm.v1.SectermFileInfo.verify|verify} messages.
             * @param message SectermFileInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileInfo message, length delimited. Does not implicitly {@link secterm.v1.SectermFileInfo.verify|verify} messages.
             * @param message SectermFileInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileInfo;

            /**
             * Decodes a SectermFileInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileInfo;

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
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileInfo;

            /**
             * Creates a plain object from a SectermFileInfo message. Also converts values to other types if specified.
             * @param message SectermFileInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: secterm.v1.ISectermFileListRequest);

            /** SectermFileListRequest Path. */
            public Path: string;

            /**
             * Creates a new SectermFileListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileListRequest instance
             */
            public static create(properties?: secterm.v1.ISectermFileListRequest): secterm.v1.SectermFileListRequest;

            /**
             * Encodes the specified SectermFileListRequest message. Does not implicitly {@link secterm.v1.SectermFileListRequest.verify|verify} messages.
             * @param message SectermFileListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileListRequest message, length delimited. Does not implicitly {@link secterm.v1.SectermFileListRequest.verify|verify} messages.
             * @param message SectermFileListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileListRequest;

            /**
             * Decodes a SectermFileListRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileListRequest;

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
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileListRequest;

            /**
             * Creates a plain object from a SectermFileListRequest message. Also converts values to other types if specified.
             * @param message SectermFileListRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** ActionMode enum. */
        enum ActionMode {
            ACTIVE = 0,
            PASSIVE = 1
        }

        /** TransProtocol enum. */
        enum TransProtocol {
            ZMODEM = 0,
            SFTP = 1,
            SCP = 2,
            FTP = 3
        }

        /** Properties of a SectermFileListResponse. */
        interface ISectermFileListResponse {

            /** SectermFileListResponse FileInfo */
            FileInfo?: (secterm.v1.ISectermFileInfo[]|null);
        }

        /** Represents a SectermFileListResponse. */
        class SectermFileListResponse implements ISectermFileListResponse {

            /**
             * Constructs a new SectermFileListResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileListResponse);

            /** SectermFileListResponse FileInfo. */
            public FileInfo: secterm.v1.ISectermFileInfo[];

            /**
             * Creates a new SectermFileListResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileListResponse instance
             */
            public static create(properties?: secterm.v1.ISectermFileListResponse): secterm.v1.SectermFileListResponse;

            /**
             * Encodes the specified SectermFileListResponse message. Does not implicitly {@link secterm.v1.SectermFileListResponse.verify|verify} messages.
             * @param message SectermFileListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileListResponse message, length delimited. Does not implicitly {@link secterm.v1.SectermFileListResponse.verify|verify} messages.
             * @param message SectermFileListResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileListResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileListResponse;

            /**
             * Decodes a SectermFileListResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileListResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileListResponse;

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
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileListResponse;

            /**
             * Creates a plain object from a SectermFileListResponse message. Also converts values to other types if specified.
             * @param message SectermFileListResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: secterm.v1.ISectermFileMove);

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
            public static create(properties?: secterm.v1.ISectermFileMove): secterm.v1.SectermFileMove;

            /**
             * Encodes the specified SectermFileMove message. Does not implicitly {@link secterm.v1.SectermFileMove.verify|verify} messages.
             * @param message SectermFileMove message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileMove message, length delimited. Does not implicitly {@link secterm.v1.SectermFileMove.verify|verify} messages.
             * @param message SectermFileMove message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileMove message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileMove
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileMove;

            /**
             * Decodes a SectermFileMove message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileMove
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileMove;

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
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileMove;

            /**
             * Creates a plain object from a SectermFileMove message. Also converts values to other types if specified.
             * @param message SectermFileMove
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: secterm.v1.ISectermFileDelete);

            /** SectermFileDelete Path. */
            public Path: string[];

            /**
             * Creates a new SectermFileDelete instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileDelete instance
             */
            public static create(properties?: secterm.v1.ISectermFileDelete): secterm.v1.SectermFileDelete;

            /**
             * Encodes the specified SectermFileDelete message. Does not implicitly {@link secterm.v1.SectermFileDelete.verify|verify} messages.
             * @param message SectermFileDelete message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileDelete, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileDelete message, length delimited. Does not implicitly {@link secterm.v1.SectermFileDelete.verify|verify} messages.
             * @param message SectermFileDelete message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileDelete, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileDelete message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileDelete;

            /**
             * Decodes a SectermFileDelete message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileDelete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileDelete;

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
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileDelete;

            /**
             * Creates a plain object from a SectermFileDelete message. Also converts values to other types if specified.
             * @param message SectermFileDelete
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            file?: (secterm.v1.ISectermFileInfo|null);
        }

        /** Represents a SectermFileCreate. */
        class SectermFileCreate implements ISectermFileCreate {

            /**
             * Constructs a new SectermFileCreate.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileCreate);

            /** SectermFileCreate file. */
            public file?: (secterm.v1.ISectermFileInfo|null);

            /**
             * Creates a new SectermFileCreate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileCreate instance
             */
            public static create(properties?: secterm.v1.ISectermFileCreate): secterm.v1.SectermFileCreate;

            /**
             * Encodes the specified SectermFileCreate message. Does not implicitly {@link secterm.v1.SectermFileCreate.verify|verify} messages.
             * @param message SectermFileCreate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileCreate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileCreate message, length delimited. Does not implicitly {@link secterm.v1.SectermFileCreate.verify|verify} messages.
             * @param message SectermFileCreate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileCreate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileCreate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileCreate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileCreate;

            /**
             * Decodes a SectermFileCreate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileCreate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileCreate;

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
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileCreate;

            /**
             * Creates a plain object from a SectermFileCreate message. Also converts values to other types if specified.
             * @param message SectermFileCreate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            FileInfo?: (secterm.v1.ISectermFileInfo[]|null);

            /** SectermFileDownloadReq proto */
            proto?: (secterm.v1.TransProtocol|null);

            /** SectermFileDownloadReq mode */
            mode?: (secterm.v1.ActionMode|null);
        }

        /** Represents a SectermFileDownloadReq. */
        class SectermFileDownloadReq implements ISectermFileDownloadReq {

            /**
             * Constructs a new SectermFileDownloadReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileDownloadReq);

            /** SectermFileDownloadReq FileInfo. */
            public FileInfo: secterm.v1.ISectermFileInfo[];

            /** SectermFileDownloadReq proto. */
            public proto: secterm.v1.TransProtocol;

            /** SectermFileDownloadReq mode. */
            public mode: secterm.v1.ActionMode;

            /**
             * Creates a new SectermFileDownloadReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileDownloadReq instance
             */
            public static create(properties?: secterm.v1.ISectermFileDownloadReq): secterm.v1.SectermFileDownloadReq;

            /**
             * Encodes the specified SectermFileDownloadReq message. Does not implicitly {@link secterm.v1.SectermFileDownloadReq.verify|verify} messages.
             * @param message SectermFileDownloadReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileDownloadReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileDownloadReq message, length delimited. Does not implicitly {@link secterm.v1.SectermFileDownloadReq.verify|verify} messages.
             * @param message SectermFileDownloadReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileDownloadReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileDownloadReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileDownloadReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileDownloadReq;

            /**
             * Decodes a SectermFileDownloadReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileDownloadReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileDownloadReq;

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
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileDownloadReq;

            /**
             * Creates a plain object from a SectermFileDownloadReq message. Also converts values to other types if specified.
             * @param message SectermFileDownloadReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileDownloadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            FileInfo?: (secterm.v1.ISectermFileInfo[]|null);

            /** SectermFileUploadReq mode */
            mode?: (secterm.v1.ActionMode|null);

            /** SectermFileUploadReq proto */
            proto?: (secterm.v1.TransProtocol|null);
        }

        /** Represents a SectermFileUploadReq. */
        class SectermFileUploadReq implements ISectermFileUploadReq {

            /**
             * Constructs a new SectermFileUploadReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileUploadReq);

            /** SectermFileUploadReq DstPath. */
            public DstPath: string;

            /** SectermFileUploadReq FileInfo. */
            public FileInfo: secterm.v1.ISectermFileInfo[];

            /** SectermFileUploadReq mode. */
            public mode: secterm.v1.ActionMode;

            /** SectermFileUploadReq proto. */
            public proto: secterm.v1.TransProtocol;

            /**
             * Creates a new SectermFileUploadReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileUploadReq instance
             */
            public static create(properties?: secterm.v1.ISectermFileUploadReq): secterm.v1.SectermFileUploadReq;

            /**
             * Encodes the specified SectermFileUploadReq message. Does not implicitly {@link secterm.v1.SectermFileUploadReq.verify|verify} messages.
             * @param message SectermFileUploadReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileUploadReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileUploadReq message, length delimited. Does not implicitly {@link secterm.v1.SectermFileUploadReq.verify|verify} messages.
             * @param message SectermFileUploadReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileUploadReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileUploadReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileUploadReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileUploadReq;

            /**
             * Decodes a SectermFileUploadReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileUploadReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileUploadReq;

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
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileUploadReq;

            /**
             * Creates a plain object from a SectermFileUploadReq message. Also converts values to other types if specified.
             * @param message SectermFileUploadReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileUploadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a SectermFileDataRes. */
        interface ISectermFileDataRes {

            /** SectermFileDataRes file */
            file?: (secterm.v1.ISectermFileInfo|null);

            /** SectermFileDataRes data */
            data?: (Uint8Array|null);

            /** SectermFileDataRes endData */
            endData?: (boolean|null);

            /** SectermFileDataRes proto */
            proto?: (secterm.v1.TransProtocol|null);

            /** SectermFileDataRes seriNumber */
            seriNumber?: (number|null);
        }

        /** Represents a SectermFileDataRes. */
        class SectermFileDataRes implements ISectermFileDataRes {

            /**
             * Constructs a new SectermFileDataRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileDataRes);

            /** SectermFileDataRes file. */
            public file?: (secterm.v1.ISectermFileInfo|null);

            /** SectermFileDataRes data. */
            public data: Uint8Array;

            /** SectermFileDataRes endData. */
            public endData: boolean;

            /** SectermFileDataRes proto. */
            public proto: secterm.v1.TransProtocol;

            /** SectermFileDataRes seriNumber. */
            public seriNumber: number;

            /**
             * Creates a new SectermFileDataRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileDataRes instance
             */
            public static create(properties?: secterm.v1.ISectermFileDataRes): secterm.v1.SectermFileDataRes;

            /**
             * Encodes the specified SectermFileDataRes message. Does not implicitly {@link secterm.v1.SectermFileDataRes.verify|verify} messages.
             * @param message SectermFileDataRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileDataRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileDataRes message, length delimited. Does not implicitly {@link secterm.v1.SectermFileDataRes.verify|verify} messages.
             * @param message SectermFileDataRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileDataRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileDataRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileDataRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileDataRes;

            /**
             * Decodes a SectermFileDataRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileDataRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileDataRes;

            /**
             * Verifies a SectermFileDataRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileDataRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileDataRes
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileDataRes;

            /**
             * Creates a plain object from a SectermFileDataRes message. Also converts values to other types if specified.
             * @param message SectermFileDataRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileDataRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileDataRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileDataRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** SectermFileCmd enum. */
        enum SectermFileCmd {
            UPLOAD_START = 0,
            DOWNLOAD_START = 1
        }

        /** Properties of a SectermFileCmdMessage. */
        interface ISectermFileCmdMessage {

            /** SectermFileCmdMessage cmd */
            cmd?: (secterm.v1.SectermFileCmd|null);

            /** SectermFileCmdMessage opt1 */
            opt1?: (number|null);

            /** SectermFileCmdMessage opt2 */
            opt2?: (number|null);
        }

        /** Represents a SectermFileCmdMessage. */
        class SectermFileCmdMessage implements ISectermFileCmdMessage {

            /**
             * Constructs a new SectermFileCmdMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: secterm.v1.ISectermFileCmdMessage);

            /** SectermFileCmdMessage cmd. */
            public cmd: secterm.v1.SectermFileCmd;

            /** SectermFileCmdMessage opt1. */
            public opt1: number;

            /** SectermFileCmdMessage opt2. */
            public opt2: number;

            /**
             * Creates a new SectermFileCmdMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SectermFileCmdMessage instance
             */
            public static create(properties?: secterm.v1.ISectermFileCmdMessage): secterm.v1.SectermFileCmdMessage;

            /**
             * Encodes the specified SectermFileCmdMessage message. Does not implicitly {@link secterm.v1.SectermFileCmdMessage.verify|verify} messages.
             * @param message SectermFileCmdMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: secterm.v1.ISectermFileCmdMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SectermFileCmdMessage message, length delimited. Does not implicitly {@link secterm.v1.SectermFileCmdMessage.verify|verify} messages.
             * @param message SectermFileCmdMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: secterm.v1.ISectermFileCmdMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SectermFileCmdMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SectermFileCmdMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): secterm.v1.SectermFileCmdMessage;

            /**
             * Decodes a SectermFileCmdMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SectermFileCmdMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): secterm.v1.SectermFileCmdMessage;

            /**
             * Verifies a SectermFileCmdMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SectermFileCmdMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SectermFileCmdMessage
             */
            public static fromObject(object: { [k: string]: any }): secterm.v1.SectermFileCmdMessage;

            /**
             * Creates a plain object from a SectermFileCmdMessage message. Also converts values to other types if specified.
             * @param message SectermFileCmdMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: secterm.v1.SectermFileCmdMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SectermFileCmdMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SectermFileCmdMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
