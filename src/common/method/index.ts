// import { WebSocketServer as WSServer, WebSocket } from 'ws';
// import { xConnectReq, xBufferReq, xpdu, xBufferRes, xCharacters } from './generated/xterm-headless.ts';
// import xheadless from '@xterm/headless'

// export interface WebSocketServerOptions {
//     port?: number;
// }

// export interface Client {
//     sessionid: string;
//     socket: WebSocket;
//     terminal: xheadless.Terminal
// }

// export class WebSocketServer {
//     private server: WSServer;

//     //todo: what if there's no sessionid?
//     //just get the buffer from the terminal and determine which bound socket the message came from.
//     //and we need another map,ugly.
//     private clients: Map<string, Client>;

//     constructor(options: WebSocketServerOptions = { port: 8900 }) {
//         this.server = new WSServer({ port: options.port });
//         this.clients = new Map();
//         this.init();
//     }

//     private init(): void {
//         this.server.on('connection', (socket: WebSocket) => this.handleConnection(socket));
//         this.server.on('listening', () => { console.log(`[INFO] WebSocket server is running on port ${this.server.options.port}`); });
//         this.server.on('error', (err: Error) => { console.error(`[ERROR] WebSocket server error: ${err.message}`); });
//     }

//     private handleConnectRequest(socket: WebSocket, connReq?: xConnectReq, sessionid?: string): void {
//         var width = connReq?.width
//         var height = connReq?.height

//         console.log(`Received connection request: width=${width}, height=${height}`);

//         //checkout params,todo: assert sessionid.length!=6
//         if ((!width || width < 0) || (!height || height < 0) || (!sessionid)) {
//             console.error(`Invalid connection request: width=${width}, height=${height}`);
//             return
//         }

//         const terminal = new xheadless.Terminal({
//             cols: width,
//             rows: height,
//             allowProposedApi: true
//         });

//         this.clients.set(sessionid, {
//             socket: socket,
//             terminal: terminal,
//             sessionid: sessionid
//         });
//     }

//     private handleBuffRequest(socket: WebSocket, buffReq?: xBufferReq, sessionid?: string): void {
//         var line = buffReq?.lineNumber
//         var offset = buffReq?.offset

//         if ((!line || line < 0) || !sessionid) {
//             console.error(`Invalid buffer request: line=${line}, offset=${offset}`);
//             return
//         }

//         const client = this.clients.get(sessionid);
//         if (!client) {
//             console.error(`cannot file client which sessionid is ${sessionid}`);
//             return;
//         }

//         const buffer = client?.terminal.buffer.active;
//         const lineY = buffer.viewportY + buffer.cursorY;
//         const lineBuff = buffer.getLine(lineY);
//         if (!lineBuff) {
//             console.error(`cannot get line buffer which lineY is ${lineY}`);
//             return;
//         }

//         const lineContent = lineBuff.translateToString(true);
//         const response: xBufferRes = {
//             data: new TextEncoder().encode(lineContent),
//         };

//         const encodedResponse = xBufferRes.encode(response).finish();
//         socket.send(encodedResponse);
//     }

//     private handleChars(chars?: xCharacters, sessionid?: string): void {
//         if (!sessionid) {
//             console.error(`Invalid chars request: chars=${chars}`);
//             return
//         }

//         const client = this.clients.get(sessionid);
//         if (!client) {
//             console.error(`cannot file client which sessionid is ${sessionid}`);
//             return;
//         }

//         console.log(`Received chars: ${chars?.data}`);
//         client?.terminal.write(String(chars?.data));
//     }

//     private handleProtoMessage(data: Buffer, socket: WebSocket): void {
//         const msg = xpdu.decode(data);
//         switch (true) {
//             case !!msg.connReq:
//                 return this.handleConnectRequest(socket, msg.connReq, msg.sessionid);
//             case !!msg.bufReq:
//                 return this.handleBuffRequest(socket, msg.bufReq, msg.sessionid);
//             case !!msg.chars:
//                 return this.handleChars(msg.chars, msg.sessionid);
//             default:
//                 console.error('Unknown pdu type received:', msg);
//         }
//     }

//     private handleConnection(socket: WebSocket): void {
//         socket.on('message', (data: string) => {
//             if (typeof data === 'string') {
//                 console.error(`[ERROR] Invalid data format: String`);
//                 return;
//             }

//             return this.handleProtoMessage(data, socket);
//         })

//         socket.on('close', () => {
//             console.log(`[INFO] Client disconnected`);
//         });

//         socket.on('error', (err: Error) => {
//             console.error(`[ERROR] WebSocket error: ${err.message}`);
//         });

//     }
// }