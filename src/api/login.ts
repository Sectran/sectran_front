import requests from '@/server/request'
let prefix1 = "/api1";
export const login = <T>(data: T) => requests(`${prefix1}/login`, data)