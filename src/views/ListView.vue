<template>
  <div v-if="list">
    <v-app-bar color="deep-purple accent-4" dense dark>


      <v-toolbar-title>{{ list.name }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="toAdd">
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
      <v-btn icon @click="copyPublicUrl">
        <v-icon>mdi-share</v-icon>
      </v-btn>
      <v-btn icon @click="toEditListName">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn color="red accent-1" depressed @click="deleteIt">
        <v-icon left> mdi-delete </v-icon>
        Delete
      </v-btn>
      <v-btn icon @click="toHome">
        <v-icon>mdi-undo</v-icon>
      </v-btn>
    </v-app-bar>
    <div
    style="margin-left:auto; margin-right:auto; max-width:400px"
    ><ListItem
      v-for="item in listItems"
      :key="item._id"
      :item="item"
      :isOwner="true"
      :next="getList"/></div>
    
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import { mapActions } from 'vuex';
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
    ...mapActions("Lists", ["deleteList", "publicUrl"]),
    toHome() {
      this.$router.push("/");
    },
    getList() {
      this.$store.dispatch("Lists/getList", this.$route.params.id);
    },
    toAdd() {
      this.$router.push({
        name: 'addListItem',
        params: {
          id: this.$route.params.id
        }
      });
    },
    toEditListName() {
      this.$router.push({
        name: 'editListName',
        params: {
          id: this.$route.params.id
        }
      });
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