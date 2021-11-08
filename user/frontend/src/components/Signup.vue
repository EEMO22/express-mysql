<template>
    <div class='app'>
        <form @submit.prevent='submitForm'>
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
        <button type='submit'>회원가입</button>
        </form>
    </div>
</template>
<script>
// import signUp from '../api/index';
import axios from 'axios';

export default {
    methods: {
        async submitForm() {
            try {
                const userData = {
                    user_email: this.user.user_email,
                    user_name: this.user.user_name,
                    user_password: this.user.user_password,
                };
                console.log('userData on Front: ', userData);
                const config = {
                    headers: {
                        'Content-type': 'application/json',
                    },
                };
                const { data } = await (axios.post('api/users/signup', userData, config));
                // const { data } = await signUp(userData);
                alert(data.message);
            } catch (error) {
                console.log('error on Front: ', error.res);
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
