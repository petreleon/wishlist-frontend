<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>


      <v-toolbar-title>Edit List Name</v-toolbar-title>

      <v-spacer></v-spacer>


      <v-btn icon @click="back">
        <v-icon>mdi-undo</v-icon>
      </v-btn>
    </v-app-bar>
    <v-card
      class="mx-auto my-12"
      max-width="374"
      style="justify: center; padding: 10px;">
    
      <v-text-field
        label="List Name"
        v-model="listName"
      ></v-text-field>
      <v-btn
        block
        color="primary"
        @click="modify"
        style="margin-top: -19px;"
      >
        edit list name
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: function() {
    return {
      listName: "",
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    ...mapActions("Lists", ["modifyListName"]),
    modify() {
      this.modifyListName({ id: this.$route.params.id, name: this.listName })
        .then(() => {
          this.$router.back();
        });
    },
  },
}
</script>

<style>

</style>