import { sectran_chard } from "../../../secterm/secterm";
const v1 = sectran_chard.secterm.v1
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
    const credentialPassword: sectran_chard.secterm.v1.ISectermCredentialPassword = {
        password: stringToUint8Array(connectParams.password)
    };

    const connectRequest: sectran_chard.secterm.v1.ISectermConnectRequest = {
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
    sectermMessage.request = connectRequest;

    let connectData =
        v1.SectermMessage.encode(sectermMessage).finish();
    const uintArr = Uint32Array.from([connectData.length]);
    websocket.send(uintArr);
    websocket.send(connectData);
}

//浏览器大小改变传内容到socket
export const sectermTeminalResize = (resizeParams: SectermTerminalResize,websocket:WebSocket) => {
    let sectermMessage = new v1.SectermMessage();

    let resize = new v1.SectermTerminalResize()
    resize.colums = resizeParams.Colums
    resize.rows = resizeParams.Rows
    sectermMessage.resize = resize
    console.log(resize)

    let resizeData =
        v1.SectermMessage.encode(sectermMessage).finish();
    const uintArr = Uint32Array.from([resizeData.length]);
    websocket.send(uintArr);
    websocket.send(resizeData);

}

//xterm输入
export const sectermTeminalCharacters = (data: any,websocket:WebSocket) => {
    let sectermMessage = new v1.SectermMessage();
    let chars = new v1.SectranTeminalCharacters();
    chars.Data = stringToUint8Array(data);

    sectermMessage.characters = chars;
    let charactersData =
        v1.SectermMessage.encode(sectermMessage).finish();

    let len: number = charactersData.length;
    const uintArr = Uint32Array.from([len]);
    websocket.send(uintArr);
    websocket.send(charactersData);

}

//字符串转Uint8Array
const stringToUint8Array = (str: string) => {
    const encoder = new TextEncoder();
    return encoder.encode(str);
};