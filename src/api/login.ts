import requests from '@/server/request'
// ${import.meta.env.VITE_Chard_FILE}
let prefix1 = `${import.meta.env.VITE_PROXY_BASE_URL}`;
export const login = <T>(data: T) => requests(`${prefix1}/login`, data)