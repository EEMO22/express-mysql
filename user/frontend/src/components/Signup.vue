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
        <button @click='signUp'>회원가입</button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    methods: {
        signUp: function (event) {
            console.log({ user: this.user });
            axios.post('/api/users/signup', {
                user: this.user,
            })
            .then((res) => {
                if (res.data.success) {
                    alert(res.data.message);
                    this.$router.push('/login');
                }
                if (!res.data.success) {
                    alert(res.data.message);
                }
            })
            .catch((error) => {
                alert('error');
            });
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
