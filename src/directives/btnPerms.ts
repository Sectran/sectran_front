import { permsJudge } from "@/utils/method/utils"
//按钮权限控制
export default function btnPerms(app: any) {
    app.directive('has', {
        mounted(el: any, binding: { value: string }) {
            if (!permsJudge(binding.value)) {
                el.disabled = true
            }
        }
    });
}


