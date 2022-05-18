const server = 'http://localhost:80'
export default {
    links: {
        login: server + '/login',
        register: server + '/register',
        refresh: server + '/login/refresh',
        lists: server + '/wishlist/',
        list: server + '/wishlist/list/',
        search: server + '/wishlist/search',
        changeChecked: server + '/wishlist/changechecked/'
    },
}