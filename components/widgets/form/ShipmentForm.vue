<template>

  <div class="sign-up">
    <h1>Registro</h1>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field v-model="email" :rules="emailRules" label="Email Address" required></v-text-field>
      <v-text-field v-model="username" label="Phone Number" required></v-text-field>
      <v-text-field v-model="name" label="Nombre" required></v-text-field>
      <v-text-field v-model="middle_name" label="Apellido" required></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
        :rules="[passwordRules.required, passwordRules.min]"
        :type="passwordVisible ? 'text' : 'password'"
        name="password"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="passwordVisible = !passwordVisible"
        required></v-text-field>
      <v-btn :disabled="!valid" @click="submit()">Submit</v-btn>
        
    </v-form>
    <h1>Confirmación</h1>
    <v-form v-model="valid" ref="formulario" lazy-validation>
      <v-text-field v-model="username" label="Phone Number" required></v-text-field>
      <v-text-field v-model="code" :rules="codeRules" label="Code" required/>
      <v-btn  @click="submitcode()">Enviar verificación</v-btn>
    </v-form>
    <v-btn @click="resend">Resend Code</v-btn>
  </div>
</template>
 
<script>
import Countries from '@/api/country';
import { Auth } from 'aws-amplify';
import {signUp} from '@/src/utils/auth.js' // Adding this line 
import {confirmSignUp, resendSignUp} from '@/src/utils/auth.js';  // Adding this line

export default {
  //change parameters shits handsome ;)
  name: "SignUp",
  data() {
    return {
      valid: false,
      code: '',
      phone_number: '',
      username: '',
      password: '',
      email: '',
      name: '',
      middle_name: '',
      passwordVisible: false,
    }
  },
  computed: {
    emailRules() {
      return [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    },
    passwordRules() {
      return {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      }
    },
    codeRules() {
      return [
        v => !!v || 'Code is required',
        v => (v && v.length === 6) || 'Code must be 6 digits'
      ]
    }
  },
  methods: {
     submit() {
      if (this.$refs.form.validate()) {
        console.log(`SIGN UP username: ${this.username}, password: ${this.password}, email: ${this.email}, name: ${this.name}, middle_name: ${this.middle_name}`);
        signUp(this.username, this.password, this.email, this.name, this.middle_name); // Adding this line as well
      }
    },
    submitcode() {
      if (this.$refs.form.validate()) {
        console.log(`CONFIRM username: ${this.username}, code: ${this.code}`);
        confirmSignUp(this.username, this.code);  // Adding this line as well
      }
    },
    resend() {
      console.log(`RESEND username: ${this.username}`);
      resendSignUp(this.username);  // Adding this line as well
    }
  
  },
}
 
</script>

<style>
#profile{
  position: absolute;
  margin-left: 220px;
  margin-top: 176px;
}
#picture{
  height: 200px;
  width: 200px;
}
</style>