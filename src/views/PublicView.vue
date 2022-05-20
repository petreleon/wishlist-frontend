<template>
  <div v-if="list">
    <v-app-bar color="deep-purple accent-4" dense dark>

      <v-toolbar-title>{{ list.name }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="copyPublicUrl">
        <v-icon>mdi-share</v-icon>
      </v-btn>
      <v-btn icon @click="toHome">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <div
    style="margin-left:auto; margin-right:auto; max-width:400px"
    ><ListItem
      v-for="item in listItems"
      :key="item._id"
      :item="item"
      :isOwner="false"
      /></div>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ListItem from "@/components/ListItem.vue";
export default {
  components: {
    ListItem
  },
  mounted() {
    this.getList();
    window.scrollTo(0, document.body.scrollHeight);
  },
  beforeMount() {
    this.getList();
  },
  changed() {
    this.getList();
  },
  computed: {
    list() {
      return this.$store.getters["Lists/list"];
    },
    listItems() {
      return this.$store.getters["Lists/listItems"];
    },
  },
  methods: {
    ...mapActions("Lists", ["publicUrl"]),
    getList() {
      this.$store.dispatch("Lists/getList", this.$route.params.id);
    },
    toHome() {
      this.$router.push("/");
    },
    deleteIt(){
      this.deleteList({id: this.$route.params.id}).then(() => {
        this.$router.push("/");
      });
    },
    copyPublicUrl(){
      this.publicUrl({id: this.$route.params.id});
    }
  },
};
</script>

<style>
</style>