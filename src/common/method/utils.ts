//查询是否有权限
export const permsJudge = (value: string) => {
    let limitsData = JSON.parse(localStorage.getItem("limitsData") as string);
    return limitsData.some((item: string) => item === value)
}