import { secterm } from "../../../secterm/secterm";
const v1 = secterm.v1
type SectermTerminalResize = {
    Colums?: number
    Rows?: number
}
type SectermConnectRequest = {
    token: string | null
    unmanaged: boolean
    username: string
    hostname: string
    port: number
    password: string
    protocol:number
} & SectermTerminalResize
//连接socket
export const sectermConnectRequest = (connectParams: SectermConnectRequest, websocket: WebSocket) => {
    const credentialPassword: secterm.v1.ISectermCredentialPassword = {
        password: stringToUint8Array(connectParams.password)
    };

    const connectRequest: secterm.v1.ISectermConnectRequest = {
        token: connectParams.token,
        Colums: connectParams.Colums,
        Rows: connectParams.Rows,
        unmanaged: connectParams.unmanaged,
        username: connectParams.username,
        authMethod: v1.AuthMethod.PASSWORD_AUTH,
        password: credentialPassword,
        hostname: connectParams.hostname,
        port: connectParams.port,
        protocol: connectParams.protocol,
    };

    console.log(connectRequest)

    let sectermMessage = new v1.SectermMessage();
    if (sectermMessage.secConnect) { sectermMessage.secConnect.connectReq = connectRequest; }
    else { sectermMessage.secConnect = { connectReq: connectRequest }; }

    let connectData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(connectData, websocket)
}

//浏览器大小改变传内容到socket
export const sectermTeminalResize = (resizeParams: SectermTerminalResize, websocket: WebSocket) => {
    let sectermMessage = new v1.SectermMessage();
    let resize = new v1.SectermTerminalResize()
    if(resizeParams?.Colums && resizeParams?.Rows) {
        resize.colums = resizeParams?.Colums
        resize.rows = resizeParams?.Rows
    }

    if (sectermMessage.secTerminal) sectermMessage.secTerminal.resize = resize
    else sectermMessage.secTerminal = { resize: resize }
    resize = resize
    let resizeData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(resizeData, websocket)
}

//xterm输入
export const sectermTeminalCharacters = (data: any, websocket: WebSocket) => {
    let sectermMessage = new v1.SectermMessage();
    let chars = new v1.SectranTeminalCharacters();
    chars.Data = stringToUint8Array(data);
    if (sectermMessage.secTerminal) sectermMessage.secTerminal.characters = chars
    else sectermMessage.secTerminal = { characters: chars }
    let charactersData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(charactersData, websocket)
}



/**
 * 单文件上传成功
 */

export const sectermFileUploadReq = (data: secterm.v1.SectermFileTransReq, websocket: WebSocket) => {
    console.log("单文件上传成功")

    let sectermMessage = new v1.SectermMessage();
    if (sectermMessage.secFile) sectermMessage.secFile.fileTransReq = data
    else sectermMessage.secFile = { fileTransReq: data }
    let FileUploadReqData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(FileUploadReqData, websocket)
}

/**
 * 所有文件上传完成
 */

export const sectermFileUploadFulfilleTheAllReq = (websocket: WebSocket) => {
    let sectermMessage = new v1.SectermMessage();
    let data = {
        cmd: v1.SectermFileCmd.TRANS_SUCCESS
    }
    if (sectermMessage.secFile) sectermMessage.secFile.fileCmd = data
    else sectermMessage.secFile = { fileCmd: data }

    let FileUploadReqFulfilleTheAllData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(FileUploadReqFulfilleTheAllData, websocket)
}

/**
 * 文件上传取消
 */
export const sectermFileCancelUploadReq = (websocket: WebSocket) => {
    let sectermMessage = new v1.SectermMessage();
    let data = {
        cmd: v1.SectermFileCmd.TRANS_CANCLE
    }
    if (sectermMessage.secFile) sectermMessage.secFile.fileCmd = data
    else sectermMessage.secFile = { fileCmd: data }

    let fileUploadcancelDataReq = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(fileUploadcancelDataReq, websocket)
}


/**
 * 目录查询
 * @param path 目录路径
 * @param websocket 
 * 
 */
export const sectermFileListReq = (path: string, websocket: WebSocket) => {
    console.log('sectermFileListReq')
    let sectermMessage = new v1.SectermMessage();
    let fileList = new v1.SectermFileListRequest()
    fileList.dirPath = path
    if(sectermMessage.secFile) sectermMessage.secFile.fileListReq = fileList
    else sectermMessage.secFile = { fileListReq: fileList }
    let fileListData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(fileListData, websocket)
}

/**
 * ⽂件重命名或移动请求
 * @param path 原始路径
 * @param DstPath 目标路径
 * @param websocket 
 */
export const SectermTeminaFileMove = (path: string, DstPath: string, force: boolean, websocket: WebSocket) => {
    let sectermMessage = new v1.SectermMessage();
    let fileMove = new v1.SectermFileMove()
    fileMove.filePath = path
    fileMove.DstPath = DstPath
    fileMove.force = force
    let fileMoveData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(fileMoveData, websocket)

}

/**
 * 目录删除
 * @param path ⽂件重命名或移动请求
 * @param websocket 
 */
export const SectermTeminaFileDelete = (path: string[], websocket: WebSocket) => {
    let sectermMessage = new v1.SectermMessage();
    let fileDelete = new v1.SectermFileDelete()
    fileDelete.Path = path

    let fileDeleteData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(fileDeleteData, websocket)
}

/**
 * 创建文件
 * @param file ⽂件信息
 * @param websocket 
 */
export const SectermTeminaFileCreate = (file: secterm.v1.ISectermFileInfo | null, websocket: WebSocket) => {
    let sectermMessage = new v1.SectermMessage();
    let fileCreate = new v1.SectermFileCreate()
    fileCreate.file = file

    let fileCreateData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(fileCreateData, websocket)
}


/**
 * websocket传输
 * @param data 数据
 * @param websocket 
 */
const transmitWebSocket = (data: any, websocket: WebSocket) => {
    return new Promise((resolve) => {

        try {
            websocket.send(data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
        resolve('成功')
    })
}



//字符串转Uint8Array
const stringToUint8Array = (str: string) => {
    const encoder = new TextEncoder();
    return encoder.encode(str);
};