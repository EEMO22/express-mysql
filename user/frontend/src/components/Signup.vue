<template>
    <div class='app'>
        <div class='input_row'>
            <label for='name'>이름</label>
            <input type='text' id='name' v-model='user_name' />
        </div>
        <div class='input_row'>
            <label for='email'>이메일</label>
            <input type='text' id='email' v-model='user_email' />
        </div>
        <div class='input_row'>
            <label for='password'>비밀번호</label>
            <input type='password' id='password' v-model='user_password' />
        </div>
        <button @click='submitForm()'>회원가입</button>
    </div>
</template>
<script>
import signUp from '../api/index';

export default {
    methods: {
        async submitForm() {
            try {
                const user = {
                    user_email: this.user_email,
                    user_name: this.user_name,
                    user_password: this.user_password,
                };
                console.log('user', user);
                const { data } = await signUp(user);
            } catch (error) {
                console.log(error.res);
                this.logMessage = error.res.data;
            }
        },
    },
};
</script>
