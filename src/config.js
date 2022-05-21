const server = 'https://bestwishlistapi.herokuapp.com'
export default {
    links: {
        login: server + '/login',
        register: server + '/register',
        refresh: server + '/login/refresh',
        lists: server + '/wishlist/',
        list: server + '/wishlist/list/',
        listElement: server + '/wishlist/listelement/',
        search: server + '/wishlist/search',
        changeChecked: server + '/wishlist/changechecked/'
    },
}