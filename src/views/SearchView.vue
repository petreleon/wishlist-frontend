<template>
    <div>
        <v-app-bar color="deep-purple accent-4" dense dark>

            <v-toolbar-title>Text search</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="back">
                <v-icon>mdi-undo</v-icon>
            </v-btn>
        </v-app-bar>
        <v-card class="mx-auto my-12" max-width="374" style="justify: center; padding: 10px">
            <v-text-field label="Text" v-model="searchText"></v-text-field>
            <v-btn block color="primary" @click="search" style="margin-top: -19px">
                Search
            </v-btn>
        </v-card>
        <v-card style="min-height: 100vh; margin: 0 !important">
            <v-tabs centered v-model="tab" background-color="primary">
                <v-tab value="Lists">Lists</v-tab>
                <v-tab value="ListItems">ListItems</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="Lists">
                        <div style="margin-left: auto; margin-right: auto; max-width: 400px">
                            <v-table>
                                <thead>
                                    <tr>
                                        <th class="text-left">Name</th>
                                        <th class="text-left">To List</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="list in lists" :key="list._id">
                                        <td>{{ list.name }}</td>
                                        <td>
                                            <v-btn color="primary" @click="goToList(list._id)">
                                                To list
                                            </v-btn>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </v-window-item>
                    <v-window-item value="ListItems">
                        <div style="margin-left: auto; margin-right: auto; max-width: 400px">
                            <ListItem v-for="item in listItems" :key="item._id" :item="item" :isOwner="true"
                                :next="search" :outsideOfList="true" />
                        </div>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";
export default {
    data: function () {
        return {
            searchText: "",
            tab: "Lists",
        };
    },
    computed: {
        ...mapGetters("Lists", ["lists", "listItems"]),
    },
    methods: {
        back() {
            this.$router.back();
        },
        ...mapActions("Lists", ["searchListsAndItems"]),
        ...mapMutations("Lists", ["setLists", "setListItems"]),
        search() {
            this.searchListsAndItems({ search: this.searchText });
        },
        goToList(listId) {
            return function(){
                this.$router.push({
                    name: "list",
                    params: { id: listId },
                });
            }
        },
    },
    beforeMount() {
        this.setLists([]);
        this.setListItems([]);
    },
    components: {
        ListItem,
    },
};
</script>

<style>
</style>