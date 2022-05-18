<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
    style="justify: center; padding: 10px;">
    <v-text-field
      label="username"
    ></v-text-field>
    <v-text-field
      label="email"
      type="email"
    ></v-text-field>
    <v-text-field
      label="First Name"
      type="text" 
    ></v-text-field>
    <v-text-field
      label="Last Name"
      type="text"
    ></v-text-field>
    <v-text-field
      label="password"
      type="password"
    ></v-text-field>
    <v-text-field
      label="retype password"
      type="password"
    ></v-text-field>
    <v-btn
      block
      color="primary"
      
      style="margin-top: -19px;"
    >
      Register
    </v-btn>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>