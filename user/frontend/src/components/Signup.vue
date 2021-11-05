<template>
    <div class='app'>
        <div class='input_row'>
            <label for='name'>이름</label>
            <input type='text' id='name' v-model='user.user_name' />
        </div>
        <div class='input_row'>
            <label for='email'>이메일</label>
            <input type='text' id='email' v-model='user.user_email' />
        </div>
        <div class='input_row'>
            <label for='password'>비밀번호</label>
            <input type='password' id='password' v-model='user.user_password' />
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
                const userData = {
                    user_email: this.user.user_email,
                    user_name: this.user.user_name,
                    user_password: this.user.user_password,
                };
                console.log(userData);
                await signUp(userData);
            } catch (error) {
                console.log(error.res);
            }
        },
    },
    data() {
        return {
            user: {
                user_name: '',
                user_email: '',
                user_password: '',
            },
        };
    },
};
</script>
