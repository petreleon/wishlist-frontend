<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
    style="justify: center; padding: 10px;">
  
    <v-text-field
      label="email"
      type="email"
      v-model="email"
    ></v-text-field>
    <v-text-field
      label="password"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-btn
      block
      color="primary"
      @click="login_"
      style="margin-top: -19px;"
    >
      Login
    </v-btn>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions("User", ["login"]),
    login_() {
      this.login({email: this.email, password: this.password})
    }
  },
}
</script>

<style>

</style>