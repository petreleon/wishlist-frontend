<template>
    <div v-if="list">
        <v-app-bar color="deep-purple accent-4" dense dark>

            <v-toolbar-title>{{ list.name }}</v-toolbar-title>

            <v-spacer></v-spacer>


            <v-btn icon @click="back">
                <v-icon>mdi-undo</v-icon>
            </v-btn>
        </v-app-bar>
        <v-card class="mx-auto my-12" max-width="374" style="justify: center; padding: 10px;">

            <v-text-field label="url" v-model="link"></v-text-field>
            <v-btn block color="primary" @click="addItem" style="margin-top: -19px;">
                Add this
            </v-btn>
        </v-card>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data: function () {
        return {
            link: "",
        };
    },
    computed: {
        list() {
            return this.$store.getters["Lists/list"];
        },
    },
    methods:
    {
        back() {
            this.$router.back();
        },
        ...mapActions("Lists", ["addListItem"]),
        addItem() {
            this.addListItem({ id: this.list._id, link: this.link })
                .then(() => {
                    this.link = "";
                })
        },
    }
}
</script>

<style>
</style>