//按钮权限控制
export default function btnPerms(app: any) {
    app.directive('has', {
        mounted(el: any, binding: { value: string }) {
            if (!permsJudge(binding.value)) {
                el?.parentNode.removeChild(el);
            }

        }
    });
}

const permsJudge = (value:string) => {
    let limitsData = JSON.parse(localStorage.getItem("limitsData") as string);
    return limitsData.some((item:string)=> item === value)
}
