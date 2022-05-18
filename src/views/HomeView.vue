<template>
    <div>
        <v-app id="inspire">
          <div>
            <v-app-bar
              color="deep-purple accent-4"
              dense
              dark
            >
              <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
        
              <v-toolbar-title>Home</v-toolbar-title>
        
              <v-spacer></v-spacer>
              
              <v-btn icon>
                <v-icon>mdi-plus-circle</v-icon>
              </v-btn>
              
              <v-btn
                color="white"
                @click="logout"
              >
                <v-icon left>
                  mdi-account-remove
                </v-icon>
                Logout
              </v-btn>
            </v-app-bar>
          </div>
          <div style="margin-top:65px">
            testing
            {{ lists }}
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
                    <v-btn
                      color="primary"
                      @click="goToList(list._id)"
                    >
                      To list
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </v-app>
    </div>
</template>

<script>


// Components
import { mapActions } from 'vuex'
export default {
  name: 'HomeView',
  data() {
    return {
      tableHeaders: [
        { text: 'Name', value: 'name', sortable: false },
        { text: "To List", value: '_id'}
      ],
    }
  },
  computed:
  {
    isLoggedIn()
    {
      //console.log(this.$store.getters['User/isLoggedIn'])
      return this.$store.getters['User/isLoggedIn'];
    },
    lists()
    {
      return this.$store.getters['Lists/lists'];
    }
  },
  watch:
  {
    isLoggedIn(newValue)
    {
      if(!newValue)
      {
        this.$router.push('/login');
      }
    }
  },
  components: {
  },
  beforeCreate() {
    console.log('HomeView mounted');
    if(!this.$store.getters['User/isLoggedIn']) {
      console.log(this.$store.getters['User/isLoggedIn']);
      this.$router.push('/login');
    }
  },
  methods:
  {
    ...mapActions("Lists", ["getLists"]),
    logout()
    {
      this.$store.dispatch('User/logout');
    },
    goToList(id)
    {
      this.$router.push({name: 'list', params: {id: id}});
    }
  },
  mounted() {
    this.getLists();

  }
};
</script>
