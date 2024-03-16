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
                    <!-- :label="uselocals('login.account')" -->
                    <a-form-item :rules="[{ required: true, message: uselocals('login.accountMessage') }]"
                        name="account">
                        <a-input autocomplete class="input-heigth" v-model:value="formState.account"
                            placeholder="请输入账号">
                            <template #prefix>
                                <UserOutlined class="site-form-item-icon" />
                            </template>
                        </a-input>
                    </a-form-item>
                    <!-- :label="uselocals('login.password')" -->
                    <a-form-item :rules="[{ required: true, message: uselocals('login.passwordMessage') }]"
                        name="password">
                        <a-input-password autocomplete class="input-heigth" v-model:value="formState.password"
                            placeholder="请输入密码">
                            <template #prefix>
                                <LockOutlined class="site-form-item-icon" />
                            </template>
                        </a-input-password>
                    </a-form-item>
                    <a-form-item>
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
import { reactive } from 'vue';
import { uselocals } from "@/hooks/localsHooks"
import { useRouter } from 'vue-router';
import { login } from "@/api/login"
import { message } from 'ant-design-vue';
import logo from '@/assets/img/logo.png'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
const router = useRouter();
interface FormState {
    account: string
    password: string
}

const formState = reactive<FormState>({
    account: '',
    password: '',
});

const onFinish = (values: { account: string, password: string }) => {
    // console.log('Success:', values);
    // let fromData = JSON.stringify({ password: values.password, username: values.account })
    // router.replace('/admin/user')
    // return
    let fromData = { password: values.password, username: values.account }
    login(fromData).then((res: { token: string, user: { name: string } }) => {
        console.log(res)
        let { token, user } = res
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('name', user.name)
        router.replace('/admin/user')
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