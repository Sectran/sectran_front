import { secterm } from "../../../secterm/secterm";
let intNume = 0
const v1 = secterm.v1
type SectermTerminalResize = {
    Colums: number
    Rows: number
}
type SectermConnectRequest = {
    token: string
    unmanaged: boolean
    username: string
    hostname: string
    port: number
    password: string
} & SectermTerminalResize

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
    };

    console.log(connectRequest)

    let sectermMessage = new v1.SectermMessage();
    sectermMessage.connectReq = connectRequest;

    let connectData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(connectData, websocket)
    // const uintArr = Uint32Array.from([connectData.length]);
    // websocket.send(uintArr);
    // websocket.send(connectData);
}

//浏览器大小改变传内容到socket
export const sectermTeminalResize = (resizeParams: SectermTerminalResize, websocket: WebSocket) => {
    let sectermMessage = new v1.SectermMessage();

    let resize = new v1.SectermTerminalResize()
    resize.colums = resizeParams.Colums
    resize.rows = resizeParams.Rows
    sectermMessage.resize = resize
    console.log(resize)

    let resizeData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(resizeData, websocket)
    // const uintArr = Uint32Array.from([resizeData.length]);
    // websocket.send(uintArr);
    // websocket.send(resizeData);

}

//xterm输入
export const sectermTeminalCharacters = (data: any, websocket: WebSocket) => {
    let sectermMessage = new v1.SectermMessage();
    let chars = new v1.SectranTeminalCharacters();
    chars.Data = stringToUint8Array(data);

    sectermMessage.characters = chars;
    let charactersData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(charactersData, websocket)
    // let len: number = charactersData.length;
    // const uintArr = Uint32Array.from([len]);
    // websocket.send(uintArr);
    // websocket.send(charactersData);
}




/**
 * 文件上传响应
 */

export const sectermFileUploadReq = (data: any, websocket: WebSocket) => {
    console.log("传送文件信息")
    let sectermMessage = new v1.SectermMessage();
    let FileReq = new v1.SectermFileUploadReq()
    FileReq.FileInfo = data.FileInfo
    sectermMessage.fileUploadReq = FileReq;
    let FileUploadReqData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(FileUploadReqData, websocket)

}

/**
 * 文件传输
 */
export const sectermFileuploading = (data: any, websocket: WebSocket) => {
    return new Promise(async (resolve) => {
        console.log(data, 'sectermFileuploading')
        let sectermMessage = new v1.SectermMessage();
        let fileData = new v1.SectermFileDataRes()
        data.seriNumber = intNume
        
        fileData = data
        sectermMessage.fileData = fileData;
        let fileUploadingData = v1.SectermMessage.encode(sectermMessage).finish();
        await transmitWebSocket(fileUploadingData, websocket)
        console.log(`${intNume}同步发送结束`)
        intNume++
        resolve('成功')
    });


}

/**
 * 目录查询
 * @param path 目录路径
 * @param websocket 
 */
export const sectermTeminalCatalog = (path: string, websocket: WebSocket) => {
    let sectermMessage = new v1.SectermMessage();

    let filePath = new v1.SectermFileListRequest()
    filePath.Path = path
    let filePathData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(filePathData, websocket)
    // const uintArr = Uint32Array.from([filePathData.length]);
    // websocket.send(uintArr);
    // websocket.send(filePathData);
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
    fileMove.Path = path
    fileMove.DstPath = DstPath
    fileMove.force = force
    let fileMoveData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(fileMoveData, websocket)
    // const uintArr = Uint32Array.from([filePathData.length]);
    // websocket.send(uintArr);
    // websocket.send(filePathData);
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
    // const uintArr = Uint32Array.from([filePathData.length]);
    // websocket.send(uintArr);
    // websocket.send(filePathData);
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
    // const uintArr = Uint32Array.from([filePathData.length]);
    // websocket.send(uintArr);
    // websocket.send(filePathData);
}

/**
 * ⽂件下载请求
 * @param FileInfo ⽂件信息
 * @param websocket 
 */
export const SectermTeminaFileDownloadReq = (file: secterm.v1.ISectermFileInfo[], websocket: WebSocket) => {
    let sectermMessage = new v1.SectermMessage();
    let fileDownloadReq = new v1.SectermFileDownloadReq()
    fileDownloadReq.FileInfo = file

    let fileDownloadReqData = v1.SectermMessage.encode(sectermMessage).finish();
    transmitWebSocket(fileDownloadReqData, websocket)
    // const uintArr = Uint32Array.from([filePathData.length]);
    // websocket.send(uintArr);
    // websocket.send(filePathData);
}




/**
 * websocket传输
 * @param data 数据
 * @param websocket 
 */
const transmitWebSocket = (data: any, websocket: WebSocket) => {
    return new Promise((resolve) => {
        const uintArr = Uint32Array.from([data.length]);
        // console.log(intNume)
        // console.log(uintArr)
        console.log(data)
        websocket.send(uintArr);
        websocket.send(data);
       
        resolve('成功')
    })
}



//字符串转Uint8Array
const stringToUint8Array = (str: string) => {
    const encoder = new TextEncoder();
    return encoder.encode(str);
};