export const initSocket = (path: string, timeout: number, binaryType: BinaryType, onOpen: Function, onData: Function, onError: Function, onClose: Function) => {
    let socket = new WebSocket(path);
    socket.binaryType = binaryType;
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("WebSocket connection timed out"));
        }, timeout);
    });
    const connectedPromise = new Promise((resolve) => {
        socket.addEventListener("open", () => {
            onOpen()
            resolve("WebSocket connected successfully");
        });
    });
    Promise.race([timeoutPromise, connectedPromise])
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error.message);
            console.log("超时关闭")
            socket.close();
        });
    socket.addEventListener("message", (sty) => {
        onData(sty)
    });
    socket.addEventListener("close", () => onClose());
    socket.addEventListener("error", () => onError())
    return socket
};