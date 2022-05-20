import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import ListView from '../views/ListView.vue'
import AddListItemView from '../views/AddListItemView.vue'
import EditListNameView from '../views/EditListNameView.vue'
import AddListView from '../views/AddListView.vue'
import SearchView from '../views/SearchView.vue'
import PublicView from '../views/PublicView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/list/:id',
    name: 'list',
    component: ListView
  },
  {
    path: '/list/:id/add',
    name: 'addListItem',
    component: AddListItemView
  },
  {
    path: '/list/:id/editName',
    name: 'editListName',
    component: EditListNameView
  },
  {
    path: '/addList',
    name: 'addList',
    component: AddListView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/public/:id',
    name: 'public',
    component: PublicView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
