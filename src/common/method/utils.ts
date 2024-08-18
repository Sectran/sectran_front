//查询是否有权限
export const permsJudge = (value: string) => {
    let limitsData = JSON.parse(localStorage.getItem("limitsData") as string);
    return limitsData.some((item: string) => item === value)
}

export const blobToUint8Array = async (blob: Blob): Promise<Uint8Array> => {
    return new Promise<Uint8Array>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            // 类型断言，确保reader.result是ArrayBuffer类型
            const arrayBuffer = reader.result as ArrayBuffer;
            resolve(new Uint8Array(arrayBuffer));
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
    });
}
