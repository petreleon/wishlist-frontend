<template>
  <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Page title</v-toolbar-title>
  
        <v-spacer></v-spacer>
        
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        
        <v-btn
          color="red accent-1"
          depressed
        >
          <v-icon left>
            mdi-delete
          </v-icon>
          Delete
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-undo</v-icon>
        </v-btn>
      </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>