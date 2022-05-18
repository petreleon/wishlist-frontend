<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
    style="justify: center; padding: 10px;">
    <v-text-field
      v-model="username"
      label="username"
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="email"
      type="email"
    ></v-text-field>
    <v-text-field
      label="First Name"
      type="text"
      v-model="firstName"
    ></v-text-field>
    <v-text-field
      label="Last Name"
      type="text"
      v-model="lastName"
    ></v-text-field>
    <v-text-field
      label="password"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-text-field
      label="retype password"
      type="password"
      v-model="retypePassword"
    ></v-text-field>
    <v-btn
      block
      color="primary"
      @click="register"
      style="margin-top: -19px;"
    >
      Register
    </v-btn>
  </v-card>
</template>

<script>
export default {
  data: function() {
    return {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      retypePassword: '',
    }
  },
  methods: {
    register: function() {
      this.$store.dispatch('User/register', {
        username: this.username,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        retypePassword: this.retypePassword,
      }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>

</style>