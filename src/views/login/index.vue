<template>
    <div class="login">
        <div class="login-content">
            <div class="login-img">

            </div>


            <div class="login-from">
                <div class="login-title">{{ uselocals('login.login') }}</div>
                <a-form :model="formState" layout="vertical" name="basic" :label-col="{ span: 8 }" autocomplete="off"
                    @finish="onFinish" @finishFailed="onFinishFailed">
                    <a-form-item :label="uselocals('login.account')"
                        :rules="[{ required: true, message: uselocals('login.accountMessage') }]" name="account">
                        <a-input v-model:value="formState.account">
                            <template #prefix>
                                <UserOutlined class="site-form-item-icon" />
                            </template>
                        </a-input>
                    </a-form-item>
                    <a-form-item :label="uselocals('login.password')"
                        :rules="[{ required: true, message: uselocals('login.passwordMessage') }]" name="password">
                        <a-input-password v-model:value="formState.password">
                            <template #prefix>
                                <LockOutlined class="site-form-item-icon" />
                            </template>
                        </a-input-password>
                    </a-form-item>

                    <a-form-item>
                        <a-button style="width: 100%;" type="primary" html-type="submit">{{ uselocals('public.Submit')
                        }}</a-button>
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
// import { login } from "@/api/login"
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
    console.log('Success:', values);
    router.replace('/admin/user')
    // let fromData = JSON.stringify({ password: values.password, account: values.account })
    // login<string>(fromData).then((res: { data: string }) => {

    //     let { data } = res
    //     console.log(data)
    //     localStorage.setItem('token', data)
    //    
    // })

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
    background: #F3F3F3;


    .login-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1000px;
        background: #ffffff;
        display: flex;
        box-shadow: 0px 6px 24px 1px rgba(110, 110, 110, 0.18);
        border-radius: 20px;
    }

    .login-img {
        flex: 1;
    }

    .login-from {
        flex: 1;
        padding: 50px;

    }

    .login-title {
        font-size: 26px;
        color: #666666;
        margin-bottom: 20px;
    }


}
</style>