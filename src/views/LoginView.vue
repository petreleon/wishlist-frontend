<template>
  <v-card style="min-height: 100vh; margin: 0 !important;">
    <v-tabs centered v-model="tab" background-color="primary">
      <v-tab value="Login">Login</v-tab>
      <v-tab value="Register">Register</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="Login"> <LoginComponent/> </v-window-item>
        <v-window-item value="Register"> <RegisterComponent></RegisterComponent> </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
import LoginComponent from '../components/LoginCompoment.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
export default {
  data () {
    return {
      tab: 'Login'
    }
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters['User/isLoggedIn']
    }
  },
  watch: {
    isLoggedIn(newValue) {
      if(newValue) {
        this.$router.push('/')
      }
    }
  },
  components: {
    LoginComponent,
    RegisterComponent
  }
};
</script>

<style>
</style>