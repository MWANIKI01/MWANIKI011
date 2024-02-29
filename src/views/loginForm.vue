<template>
    <v-app class="body">
      <v-container class="section">
        <v-form action="" id="login-Form">
          <v-card class="container">
            <v-card-title class="text-center">Log In</v-card-title>
            <v-card-text>
              <v-text-field class="text" label="Email" type="email"></v-text-field>
              <v-text-field class="text" label="Password" type="password"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn type="submit" class="btn" to="/">Login</v-btn>
              <v-spacer></v-spacer>
              <p class="text-link"><a href="https://www.google.com" class="link">Forgot your password?</a></p>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    methods: {
      submitForm() {
        this.$refs.form.validate();
      },
    },
  };
  </script>

<style>

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

/* CSS for Signup Form */
.body {
  background-image: url('@/assets/sign.jpg');
    /* Center and scale the image nicely */
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
.container {
  width: 500px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 30px;
}

/* CSS for Login Form */
#login-form .form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#login-form .form-group .form-style {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 2px solid #fff;
  background: transparent;
  color: #fff;
  outline: none;
}

#login-form .form-group .btn {
  width: 100%;
  padding: 10px;
  border: none;
  background: #fff;
  color: navy;
  cursor: pointer;
}
.text{
    color: #fff;
}
.text-center{
    text-align: center;
    font-size:28px;
}
.text-link{
    text-align: center;
    font-size:20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn {
    border-radius: 4px;
    height: 44px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 30px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    color: #000000;
    flex-wrap: wrap;
}
</style>