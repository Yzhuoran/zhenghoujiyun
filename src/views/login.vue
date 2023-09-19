<template>
    <div class="da">
        <div class="box">
            <div class="box1">
                <h2>UNI-ADMIN</h2>
            </div>
            <div class="box2">
                <el-form ref="aa" :model="ruleForm" :rules="rules" label-width="40px" class="demo-ruleForm">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="ruleForm.password" />
                    </el-form-item>
                    <el-form-item>
                        <el-button @click=dl>登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const ruleForm = ref({
    password: '',
    username: ''
})
const rules = ref({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
})
import { gettoken } from '../request/api'
import { useRouter } from 'vue-router';
const router = useRouter()
const aa = ref()
const dl = () => {
    // console.log(aa.value);
    aa.value.validate((valid: any) => {
        if (valid) {
            gettoken(ruleForm.value).then(res => {
                console.log(res.data.data.token);
                localStorage.setItem('token', res.data.data.token)
                router.push('/')
            })
        }
    })
}
</script>

<style lang="scss" scoped>
.da {
    width: 100vw;
    height: 100vh;

    .box {
        margin-top: 200px;
        margin-left: 450px;
    }

    .box1 {
        width: 500px;
        padding: 10px 0;
        border: 1px solid #ccc;
        text-align: center;
    }

    .box2 {
        width: 500px;
        padding: 20px 0;
        border: 1px solid #ccc;
        padding-top: 40px;
        padding-right: 60px;
    }
}

.el-button {
    width: 400px;
    background-color: #007e7e;
    color: white;
}
</style>