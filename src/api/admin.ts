// import requests from `@/server/request`
import requests from "@/server/request"
let prefix = ""
//部门
export const listDepartment =<T>(data:T)=> requests(`${prefix}/department/children`,data)
export const addDepartment = <T>(data:T) => requests(`${prefix}/department/create`,data)
export const editDepartment = <T>(data:T) => requests(`${prefix}/department/update`,data)
export const deleteDepartment = <T>(data:T) => requests(`${prefix}/department/delete`,data) 

//角色
export const listRole =<T>(data:T)=> requests(`${prefix}/role/list`,data)
export const addRole =<T>(data:T)=> requests(`${prefix}/role/create`,data)
export const editRole =<T>(data:T)=> requests(`${prefix}/role/update`,data)
export const deleteRole =<T>(data:T)=> requests(`${prefix}/role/delete`,data)
//获取角色权限
export const getMenu =<T>(data:T)=> requests(`${prefix}/get_menu_authority_list`,data)
//更新角色权限
export const updateAuthority =<T>(data:T)=> requests(`${prefix}/update_authority_api`,data)




//设备列表
export const deviceList =<T>(data:T)=> requests(`/device/list`,data)
export const addDevice =<T>(data:T)=> requests(`/device/create`,data)
export const updateDevice =<T>(data:T)=> requests(`/device/update`,data)
export const deleteDevice =<T>(data:T)=> requests(`/device/delete`,data)
//设备列表账户
export const listDeviceAccount =<T>(data:T)=> requests(`/device/listDeviceAccount`,data)
export const addDeviceAccount =<T>(data:T)=> requests(`/device/addDeviceAccount`,data)
export const updateDeviceAccount =<T>(data:T)=> requests(`/device/updateDeviceAccount`,data)
export const deleteDeviceAccount =<T>(data:T)=> requests(`/device/deleteDeviceAccount`,data)
//设备账号模块
export const accountList =<T>(data:T)=> requests(`/account/list`,data)
export const accountCreate =<T>(data:T)=> requests(`/account/create`,data)
export const accountUpdate =<T>(data:T)=> requests(`/account/update`,data)
export const accountDelete =<T>(data:T)=> requests(`/account/delete`,data)


//用户
export const listUser =<T>(data:T)=> requests('/user/list',data)
export const addUser = <T>(data:T) => requests('/user/create',data)
export const updateUser = <T>(data:T) => requests('/user/update',data)
export const deleteUser = <T>(data:T) => requests('/user/delete',data)








