// import requests from `@/server/request`
import requests from "@/server/request"
let prefix = "/sectran"
//部门
export const listDepartment =<T>(data:T)=> requests(`${prefix}/dept/list`,data)
export const addDepartment = <T>(data:T) => requests(`${prefix}/dept/add`,data)
export const editDepartment = <T>(data:T) => requests(`${prefix}/dept/edit`,data)
export const deleteDepartment = <T>(data:T) => requests(`${prefix}/dept/delete`,data) 



//角色
export const listRole =<T>(data:T)=> requests(`${prefix}/role/list`,data)
export const addRole =<T>(data:T)=> requests(`${prefix}/role/add`,data)
export const editRole =<T>(data:T)=> requests(`${prefix}/role/edit`,data)
export const deleteRole =<T>(data:T)=> requests(`${prefix}/role/delete`,data)

//设备列表
export const deviceList =<T>(data:T)=> requests(`/device/listDevice`,data)
export const addDevice =<T>(data:T)=> requests(`/device/addDevice`,data)
export const updateDevice =<T>(data:T)=> requests(`/device/updateDevice`,data)
export const deleteDevice =<T>(data:T)=> requests(`/device/deleteDevice`,data)
//设备列表账户
export const listDeviceAccount =<T>(data:T)=> requests(`/device/listDeviceAccount`,data)
export const addDeviceAccount =<T>(data:T)=> requests(`/device/addDeviceAccount`,data)
export const updateDeviceAccount =<T>(data:T)=> requests(`/device/updateDeviceAccount`,data)
export const deleteDeviceAccount =<T>(data:T)=> requests(`/device/deleteDeviceAccount`,data)




//用户
export const listUser =<T>(data:T)=> requests('/user/listUser',data)
export const addUser = <T>(data:T) => requests('/user/addUser',data)
export const updateUser = <T>(data:T) => requests('/user/updateUser',data)
export const deleteUser = <T>(data:T) => requests('/user/deleteUser',data)








