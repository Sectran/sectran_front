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

//连接socket
export const sectermConnectRequest = (connectParams: SectermConnectRequest) => {
    let sectermMessage = new v1.SectermMessage();



    let connectMessage = new v1.SectermConnectRequest();
    connectMessage.authMethod = v1.AuthMethod.PASSWORD_AUTH;
    connectMessage.token = connectParams.token;
    connectMessage.Colums = connectParams.Colums;
    connectMessage.Rows = connectParams.Rows;
    connectMessage.unmanaged = connectParams.unmanaged;
    connectMessage.username = connectParams.username;
    
    connectMessage.hostname = connectParams.hostname;
    connectMessage.port = connectParams.port;
    connectMessage.password = stringToUint8Array(connectParams.password);
   
    sectermMessage.request = connectMessage;

    let connectData =
        v1.SectermMessage.encode(sectermMessage).finish();
    const uintArr = Uint32Array.from([connectData.length]);

    return { uintArr, connectData }
}

//浏览器大小改变传内容到socket
export const sectermTeminalResize = (resizeParams:SectermTerminalResize) => {
    let sectermMessage = new v1.SectermMessage();
    
    let resize = new v1.SectermTerminalResize()
    resize.colums = resizeParams.Colums
    resize.rows = resizeParams.Rows
    sectermMessage.resize = resize
    console.log(resize)

    let resizeData =
        v1.SectermMessage.encode(sectermMessage).finish();
    const uintArr = Uint32Array.from([resizeData.length]);

    return {uintArr,resizeData}

}

//xterm输入
export const secTeminalCharacters = (data:any) => {
    let sectermMessage = new v1.SectermMessage();

    sectermMessage.mesType =
        v1.SectermMessageType.SectranTeminalCharactersMessage;

    let chars = new v1.SectranTeminalCharacters();
    chars.Data = stringToUint8Array(data);

    sectermMessage.characters = chars;
    let charactersData =
        v1.SectermMessage.encode(sectermMessage).finish();

    let len: number = charactersData.length;
    const uintArr = Uint32Array.from([len]);

    return {uintArr,charactersData}

}

//字符串转Uint8Array
const stringToUint8Array = (str: string) => {
    const encoder = new TextEncoder();
    return encoder.encode(str);
};