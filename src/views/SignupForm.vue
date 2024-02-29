<template>
    <v-app class="body">
      <v-container class="section">
        <v-form action="" id="signup-form">
          <v-card class="container" >
            <v-card-title class="text-center">Sign Up</v-card-title>
            <v-card-text class="form-group">
              <v-text-field class="text" label="Full Name" type="text" required></v-text-field>
              <v-text-field class="text" label="Phone Number" type="tel" required></v-text-field>
              <v-text-field class="text" label="Email" type="email" required></v-text-field>
              <v-text-field class="text" label="Password" type="password" required></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn type="submit" class="btn" to="/">Register</v-btn>
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
  
  
  <style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

/* CSS for Signup Form */
.body {
  background-image: url('@/assets/Sign.jpg');
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
  height: 500px;
  width: 400px;
  background-color: transparent;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 30px;
}

#signup-form .form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

#signup-form .form-group  {
  width: 100%;
  padding: 10px 15px;
  background: none;
  border: none;
}

#signup-form .form-group :focus {
  border-bottom-color: #3F51B5;
}

#signup-form .form-group .btn {

  color: #fff;
  border-radius: 30px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

#signup-form .form-group .btn:hover {
  background: #1a237e;
}
.btn{
    border-radius: 4px;
    height: 44px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 30px;
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    color: #000000;
}
.text{
    color: #fff;
}
</style>