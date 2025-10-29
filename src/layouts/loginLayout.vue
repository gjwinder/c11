<script lang="ts">
import axios from 'axios';
export default {
  name: 'LoginLayout',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleLogin() {
//    const rawJSON = {"username" : "admin", "password" : "connectify" }
const rawJSON = { 'username': this.username, 'password': this.password }
//    const bodyJSON = JSON.stringify(rawJSON);
        try {
        console.log( 'Login Attempted!' + rawJSON );
        const loginResponse = await axios.post(this.$API_BASE_URL + '/api/auth/login', rawJSON );   
        const token = loginResponse.data.accessToken || loginResponse.data.token;
        console.log('Token received:', token); 
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        console.log( 'Login Attempted! Winner'  + ' Response:' + loginResponse.data );
        this.$router.push('/mainLayout'); 
         } catch (error) {
        console.error( 'Error Logging In:', error );
        window.alert('Invalid Username/password - Please try again.!');
                          }
    
    }
  }
};
</script>

<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username/Email:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Log In</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>



<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #45a049;
}

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>