package sectermv1

import (
	"fmt"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

func sendMessage(ws *websocket.Conn, data any) error {
	var (
		msg *SectermMessage
	)

	switch v := data.(type) {
	case isSectermTerminalMessage_Data:
		msg = &SectermMessage{
			Data: &SectermMessage_SecTerminal{
				SecTerminal: &SectermTerminalMessage{
					Data: v,
				},
			},
		}
	case isSectermConnectMessage_Data:
		msg = &SectermMessage{
			Data: &SectermMessage_SecConnect{
				SecConnect: &SectermConnectMessage{
					Data: v,
				},
			},
		}
	case isSectermFileMessage_Data:
		msg = &SectermMessage{
			Data: &SectermMessage_SecFile{
				SecFile: &SectermFileMessage{
					Data: v,
				},
			},
		}
	default:
		return fmt.Errorf("unsupported message type: %T", data)
	}

	buff, err := proto.Marshal(msg)
	if err != nil {
		return fmt.Errorf("failed to serialize message: %w", err)
	}

	return ws.WriteMessage(websocket.BinaryMessage, buff)
}

// -------------------------terminal message-------------------------
func SendTerminalCharactersMessga(ws *websocket.Conn, chars []byte) error {
	return sendMessage(ws, &SectermTerminalMessage_Characters{
		Characters: &SectranTeminalCharacters{
			Data: chars,
		},
	})
}

func SendTerminalResizeMessage(ws *websocket.Conn, cols, rows uint32) error {
	return sendMessage(ws, &SectermTerminalMessage_Resize{
		Resize: &SectermTerminalResize{
			Colums: cols,
			Rows:   rows,
		},
	})
}

// -------------------------connect message-------------------------
func SendConnectResMessage(ws *websocket.Conn, code SectermCode) error {
	return sendMessage(ws, &SectermConnectMessage_ConnectRes{
		ConnectRes: &SectermConnectResponse{
			Code: code,
		},
	})
}

// -------------------------file message-------------------------
func SendFileMoveMessage(ws *websocket.Conn, src, dst string, f, r bool) error {
	return sendMessage(ws, &SectermFileMessage_FileMv{
		FileMv: &SectermFileMove{
			FilePath:  src,
			DstPath:   dst,
			Force:     f,
			Recursion: r,
		},
	})
}

func SendFileDelMessage(ws *websocket.Conn, path []string) error {
	return sendMessage(ws, &SectermFileMessage_FileDel{
		FileDel: &SectermFileDelete{
			Path: path,
		},
	})
}

func SendFileCmdMessage(ws *websocket.Conn, cmd SectermFileCmd) error {
	return sendMessage(ws, &SectermFileMessage_FileCmd{
		FileCmd: &SectermFileCmdMessage{
			Cmd: cmd,
		},
	})
}

func SendFileListReqMessage(ws *websocket.Conn, path string) error {
	return sendMessage(ws, &SectermFileMessage_FileListReq{
		FileListReq: &SectermFileListRequest{
			DirPath: path,
		},
	})
}

func SendFileListResMessage(ws *websocket.Conn, files []*SectermFileInfo) error {
	return sendMessage(ws, &SectermFileMessage_FileListRes{
		FileListRes: &SectermFileListResponse{
			FileInfo: files,
		},
	})
}

func SendFileTransReqMessage(ws *websocket.Conn, proto TransProtocol, mode ActionMode, uuid string, flag bool) error {
	return sendMessage(ws, &SectermFileMessage_FileTransReq{
		FileTransReq: &SectermFileTransReq{
			Proto: proto,
			Mode:  mode,
			Uuid:  uuid,
			Flag:  flag,
		},
	})
}

func SendFileTransResMessage(ws *websocket.Conn, uuid string) error {
	return sendMessage(ws, &SectermFileMessage_FileTransRes{
		FileTransRes: &SectermFileTransRes{
			Uuid: uuid,
		},
	})
}
