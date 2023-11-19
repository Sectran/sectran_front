<template>
    <div class="Login">
        <div class="Login-from">
            <div class="Login-title">{{ uselocals('login.login') }}</div>
            <a-form :model="formState" layout="vertical" name="basic" :label-col="{ span: 8 }" autocomplete="off"
                @finish="onFinish" @finishFailed="onFinishFailed">
                <a-form-item :label="uselocals('login.account')"
                    :rules="[{ required: true, message: uselocals('login.accountMessage')}]" name="account">
                    <a-input v-model:value="formState.account" />
                </a-form-item>
                <a-form-item :label="uselocals('login.password')"
                    :rules="[{ required: true, message: uselocals('login.passwordMessage') }]" name="password">
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>
                <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                    <a-checkbox v-model:checked="formState.remember">{{ uselocals('login.record') }}</a-checkbox>
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                    <a-button type="primary" html-type="submit">{{ uselocals('public.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { uselocals } from "@/hooks/localsHooks"
import { useRouter } from 'vue-router';
// import { login } from "@/api/login"

const router = useRouter();
interface FormState {
    account: string
    password: string
    remember: boolean
}

const formState = reactive<FormState>({
    account: '',
    password: '',
    remember: true,
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
    console.log('Failed:', errorInfo);
};



</script>

<style lang="less" scoped>
.Login {
    position: relative;
    width: 100vw;
    height: 100vh;

    .Login-title {
        font-size: 26px;
        text-align: center;
        margin-bottom: 20px;
    }

    .Login-from {
        width: 300px;
        padding: 20px;
        border-radius: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 6px 24px 1px rgba(110, 110, 110, 0.18);
    }
}
</style>