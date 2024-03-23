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
    let perms = JSON.parse(sessionStorage.getItem("perms") as string);
    for (let item of perms) {
        if (item === value) {
            return true;
        }
    }
    return false;
}
