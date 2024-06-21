<template>
    <div class="login">
        <div class="logo-style">
            <img :src="logo" alt="">
            <div>Sectran</div>
        </div>

        <div class="login-content">
            <div class="login-from">
                <div class="flex-space-between-center">
                    <div class="login-title">
                        <div>{{ uselocals('login.login') }}</div>
                    </div>
                </div>
                <a-form :model="formState" layout="vertical" name="basic" :label-col="{ span: 8 }" autocomplete="off"
                    @finish="onFinish" @finishFailed="onFinishFailed">
                    <a-form-item :rules="[{ required: true, message: uselocals('login.accountMessage') }]"
                        name="account">
                        <a-input autocomplete class="input-heigth" v-model:value="formState.account" >
                       <!-- :placeholder="uselocals('login.accountMessage')"  -->
                            <template #prefix>
                                <UserOutlined class="site-form-item-icon" />
                            </template>
                        </a-input>
                    </a-form-item>
                    <a-form-item :rules="[{ required: true, message: uselocals('login.passwordMessage') }]"
                        name="password">
                        <a-input-password autocomplete class="input-heigth" v-model:value="formState.password"
                         >
                         <!-- :placeholder="uselocals('login.passwordMessage')" -->
                            <template #prefix>
                                <LockOutlined class="site-form-item-icon" />
                            </template>
                        </a-input-password>
                    </a-form-item>
                    <a-form-item name="remember"  class='pop-button'>
                        <a-checkbox v-model:checked="formState.remember">{{t('login.record') }}</a-checkbox>
                    </a-form-item>
                    <a-form-item >
                        <a-button style="width: 100%;height: 40px;" type="primary" html-type="submit">
                            {{ uselocals('login.login') }}
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { reactive ,onMounted} from 'vue';
import { useStore } from 'vuex'
import { uselocals } from "@/hooks/uselocalsHooks"
import { useRouter } from 'vue-router';
import { login } from "@/api/login"
import { getMenu } from "@/api/admin"
import { message } from 'ant-design-vue';
import logo from '@/assets/img/logo.png'
import { useI18n } from 'vue-i18n';
const store = useStore()
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
const { t } = useI18n()
const router = useRouter();
interface FormState {
    account: string
    password: string
    remember: boolean
}

const formState = reactive<FormState>({
    account: '',
    password: '',
    remember: true
});

onMounted(()=>{
    let account = localStorage.getItem("toaccountken") || ""
    let password = localStorage.getItem("password")|| ""
    if(account && password) {
        formState.account = account
        formState.password = password
    }
})

const onFinish = ( { account: string, password: string,remember:boolean }) => {
    // console.log('Success:', values);
    // let fromData = JSON.stringify({ password: values.password, username: values.account })
    // router.replace('/admin/user')
    console.log(remember)
    if(remember) {
        localStorage.setItem('account',account)
        localStorage.setItem('password', password)
    }
    return
    let fromData = { password: password, username:account }
    login(fromData).then((res: { token: string, user: { name: string, role_id: number } }) => {
        let { token, user } = res
        let { role_id } = user
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('name', user.name)
        getMenu<{ id: number, type: 2 }>({ id: role_id, type: 2 }).then((res: { data: string[] }) => {
            let { data } = res
            localStorage.setItem('limitsData', JSON.stringify(data))
            let routerUrl = data.find((item: string) => item.indexOf(":") !== -1)
            store.commit('router/amendMenuData', [])
            router.replace(`/admin/${routerUrl!.slice(1)}`)
            message.success("登录成功")
        })
    })

};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed11:', errorInfo);
};



</script>

<style lang="less" scoped>
.login {
    position: relative;
    width: 100vw;
    height: 100vh;

    background-image: url('@/assets/img/login-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .logo-style {
        display: flex;
        align-items: center;
        position: absolute;
        text-align: center;
        top: 30px;
        left: 100px;
        color: #ffffff;
        font-size: 28px;
        font-weight: bold;

        img {
            width: 100px;
            height: auto;

        }

        div {
            margin-left: 10px;
        }

    }

    .login-content {
        position: absolute;
        top: 50%;
        left: 75%;
        transform: translate(-50%, -50%);
        width: 500px;
        background: #ffffff;
        display: flex;
        box-shadow: 0px 6px 24px 1px rgba(110, 110, 110, 0.18);
        border-radius: 20px;
        overflow: hidden;
    }

    .login-img {
        flex: 1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .login-from {
        flex: 1;
        padding: 50px 40px;

    }

    .login-title {
        font-size: 26px;
        color: #666666;
        margin-bottom: 30px;
    }


}
</style>