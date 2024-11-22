// import requests from `@/server/request`
import requests from "@/server/request"
let prefix1 = "/api1";
// 第二个后端接口
let prefix2 = "/api2";

//部门
export const listDepartment = <T>(data: T) => requests(`${prefix1}/department/list`, data, 'post', false)
export const addDepartment = <T>(data: T) => requests(`${prefix1}/department/create`, data)
export const editDepartment = <T>(data: T) => requests(`${prefix1}/department/update`, data)
export const deleteDepartment = <T>(data: T) => requests(`${prefix1}/department/delete`, data)
//角色
export const listRole = <T>(data: T) => requests(`${prefix1}/role/list`, data, 'post', false)
export const addRole = <T>(data: T) => requests(`${prefix1}/role/create`, data)
export const editRole = <T>(data: T) => requests(`${prefix1}/role/update`, data)
export const deleteRole = <T>(data: T) => requests(`${prefix1}/role/delete`, data)
//获取角色权限
export const getMenu = <T>(data: T) => requests(`${prefix1}/get_menu_authority_list`, data, 'post', false)




//更新角色权限
export const updateAuthority = <T>(data: T) => requests(`${prefix1}/update_authority_api`, data)
//设备列表
export const deviceList = <T>(data: T) => requests(`${prefix1}/device/list`, data, 'post', false)
export const addDevice = <T>(data: T) => requests(`${prefix1}/device/create`, data)
export const updateDevice = <T>(data: T) => requests(`${prefix1}/device/update`, data)
export const deleteDevice = <T>(data: T) => requests(`${prefix1}/device/delete`, data)
//设备列表账户
export const listDeviceAccount = <T>(data: T) => requests(`${prefix1}/device/listDeviceAccount`, data, 'post', false)
export const addDeviceAccount = <T>(data: T) => requests(`${prefix1}/device/addDeviceAccount`, data)
export const updateDeviceAccount = <T>(data: T) => requests(`${prefix1}/device/updateDeviceAccount`, data)
export const deleteDeviceAccount = <T>(data: T) => requests(`${prefix1}/device/deleteDeviceAccount`, data)
//设备账号模块
export const accountList = <T>(data: T) => requests(`${prefix1}/account/list`, data, 'post', false)
export const accountCreate = <T>(data: T) => requests(`${prefix1}/account/create`, data)
export const accountUpdate = <T>(data: T) => requests(`${prefix1}/account/update`, data)
export const accountDelete = <T>(data: T) => requests(`${prefix1}/account/delete`, data)

//用户
export const listUser = <T>(data: T) => requests(`${prefix1}/user/list`, data, 'post', false)
export const addUser = <T>(data: T) => requests(`${prefix1}/user/create`, data)
export const updateUser = <T>(data: T) => requests(`${prefix1}/user/update`, data)
export const deleteUser = <T>(data: T) => requests(`${prefix1}/user/delete`, data)



//上传
export const fileUpload = <T>(data: T) => requests(`${prefix2}/file/upload`, data, 'post', false)
//下载
export const fileDownload = <T>(data: T) => requests('/file/download', data, 'get')