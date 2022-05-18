import axios from "axios";
import config from "../config";
export default {
    namespaced: true,
    state: {
        lists: [],
        list: {},
        listItems: [],
    },
    getters: {
        lists: state => state.lists,
        list: state => state.list,
        listItems: state => state.listItems,
    },
    mutations: {
        setLists(state, lists) {
            state.lists = lists;
        },
        setList(state, list) {
            state.list = list.list;
            state.listItems = list.listItems;
        },
        setListItems(state, listItems) {
            state.listItems = listItems;
        }
    },
    actions: {
        getLists({commit, rootState}) {
            console.log(rootState.User.user.token);
            axios.get(config.links.lists, {
                headers: {
                    'Authorization': rootState.User.user.token
                    }
                })
                .then(res => {
                    commit("setLists", res.data.lists);
                });
        },
        getList({commit, rootState}, id) {
            axios.get("/api/lists/" + id, {
                headers: {
                    'Authorization': rootState.User.user.token
                    }
                })
                .then(res => {
                    console.log(res.data);
                    commit("setList", res.data.list);
                });
        },
        // searchListAndItems({commit, rootState}, {listId, search}) {
        //     axios.get("/api/lists/" + listId + "/search?search=" + search)
        //         .then(res => {
        //             commit("setLists", res.data.lists);
        //             commit("setListItems", res.data.listItems);
        //         });
        // },
        addList({commit, rootState}, {name}) {
            axios.post("/api/lists", {name}, {
                headers: {
                    'Authorization': rootState.User.user.token
                    }
                })
                .then(() => {
                    commit("getLists");
                });
        }
    }
}