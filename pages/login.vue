<template>
  <v-app id="login" class="secondary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="../static/jaime.jpg" alt="Vue Material Admin" width="180" height="180">
                 <h1 class="text-center" color="secondary">Jaime Administrativo
                 </h1>

                </div>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field v-model="username" :rules="emailRules" label="Numero de Celular" required/>
                  <v-text-field
                    v-model="password"
                    :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
                    :rules="[passwordRules.required, passwordRules.min]"
                    :type="passwordVisible ? 'text' : 'password'"
                    name="password"
                    label="Contraseña"
                    hint="At least 8 characters"
                    counter
                    @click:append="passwordVisible = !passwordVisible"
                    required/>
                  
                </v-form>

              </v-card-text>
              <v-card-actions>
                <v-btn block color="secondary" :disabled="!valid" @click="submit">Ingresar</v-btn>

              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {signIn} from '@/src/utils/auth.js'  // Adding this line
  export default {
    layout: 'default',
    data() {
      return {
        valid: false,
        username: '',
        password: '',
        passwordVisible: false,
      }
    },
    computed: {
      emailRules() {
        return [
          v => !!v || 'E-mail is required'
        ]
      },
      passwordRules() {
        return {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        }
      },
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          console.log(`SIGN IN username: ${this.username}, password: ${this.password}`);
          signIn(this.username, this.password);  // Adding this line as well
        }
      },
    },

  };
</script>
<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
