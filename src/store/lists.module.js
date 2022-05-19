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
            return axios.get(config.links.lists, {
                headers: {
                    'Authorization': rootState.User.user.token
                    }
                })
                .then(res => {
                    commit("setLists", res.data.lists);
                });
        },
        getList({commit}, id) {
            return axios.get(config.links.list + id)
                .then(res => {
                    console.log(res.data);
                    commit("setList", res.data.list);
                    commit("setListItems", res.data.elements);
                });
        },
        searchListAndItems({commit, rootState}, {search}) {
            return axios.post(config.links.search, {query:search}, {
                headers: {
                        'Authorization': rootState.User.user.token
                    }
                }
            )
            .then(res => {
                commit("setLists", res.data.lists);
                commit("setListItems", res.data.elements);
            });
        },
        addList({commit, rootState}, {name}) {
            return axios.post("/api/lists", {name}, {
                headers: {
                    'Authorization': rootState.User.user.token
                    }
                })
                .then(() => {
                    commit("getLists");
                });
        },
        deleteList({commit, rootState}, {id}) {
            return axios.delete(config.links.list + id, {
                headers: {
                    'Authorization': rootState.User.user.token
                }
            })
        },
        modifyListName({commit, rootState}, {id, name}) {
            return axios.put(config.links.list + id, {name}, {
                headers: {
                    'Authorization': rootState.User.user.token
                }
            })
        },
        addListItem({commit, rootState}, {id, link}) {
            return axios.post(config.links.list + id + '/element', {link}, {
                headers: {
                    'Authorization': rootState.User.user.token
                }
            });
        },
        deleteListItem({commit, rootState}, {id}) {
            return axios.delete(config.links.listElement + id, {
                headers: {
                    'Authorization': rootState.User.user.token
                }
            });
        },
        changeChecked({commit, rootState}, {id}) {
            return axios.put(config.links.changeChecked + id, {}, {
                headers: {
                    'Authorization': rootState.User.user.token
                }
            });
        }
    }
}