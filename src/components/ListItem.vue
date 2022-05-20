<template>
  <v-card :color="item.isChecked ? '#ACE1AF' : '#26c6da'" dark class="mx-auto my-12">
    <!-- max-width="400" -->
    <v-card-title>

      <v-avatar width=30 size=30 :rounded="0">
        <v-img width=30 class="elevation-6" alt="" :src="item.logoUrl"></v-img>
      </v-avatar>
      <span style="margin-left: 2px" class="text-h5 font-weight-light">{{ item.name }}</span>
    </v-card-title>
    <v-img :src="item.imageUrl" height="auto"></v-img>
    <v-card-text class="text-b1 font-weight-bold">
      {{ item.description }}
    </v-card-text>

    <v-card-actions v-if="isOwner">
      <v-btn color="red" @click="deleteItem">Delete</v-btn>
      <v-btn color="primary" @click="toLink">Link</v-btn>
      <v-btn v-if="!item.isChecked" color="#006600" @click="checkItem">Check</v-btn>
      <v-btn v-if="item.isChecked" color="red" @click="checkItem">Uncheck</v-btn>
      <v-btn v-if="outsideOfList" color="#000099" @click="goToList">Go to list</v-btn>
    </v-card-actions>
    <v-card-actions v-if="!isOwner">
      <v-btn color="primary" @click="toLink">Link</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    isOwner: {
      type: Boolean,
      default: true,
    },
    outsideOfList: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      required: true,
    },
    next: {
      type: Function,
      default: () => { },
    }
  },
  methods: {
    ...mapActions("Lists", ["deleteListItem", "changeChecked"]),
    deleteItem() {
      this.deleteListItem({ id: this.item._id })
        .then(() => {
          this.next();
        })
    },
    checkItem() {
      this.changeChecked({ id: this.item._id })
        .then(() => {
          this.next();
        })
    },
    goToList() {
      this.$router.push({
        name: "list",
        params: {
          id: this.item.listId,
        },
      });
    },
    toLink() {
      window.open(this.item.url, '_blank').focus();
    }
  }
};
</script>

<style>
</style>