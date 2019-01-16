<template>
<div id="app" style="padding-top: 30px;">
  <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="pink" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
  
            <v-toolbar-title>Inbox</v-toolbar-title>
            
             <v-text-field
        v-model="search"
        class="mx-3"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>
  
           
          </v-toolbar>
  
          <v-list two-line>
            <template v-for="(item, index) in filteredItems">
              <v-list-tile
                :key="item.title"
                avatar
                ripple
                @click="toggle(index)"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
  
            <v-list-tile-avatar>
              <v-btn fab dark small color="primary" @click="removeItem(item.id)">
                    <v-icon dark>{{ item.icon }}</v-icon>
                </v-btn>
            </v-list-tile-avatar>
              </v-list-tile>
              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</div>
</template>

<script>
// import patients from '../util/patients';
  export default {
    name: "Doctors",
    data () {
      return {
        search: '',
      selected: [2],
      searchItem: [],
        items: [
          {id: 1, title: 'Doctor 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', icon: 'delete' },
          {id: 2, title: 'Doctor 2', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',icon: 'delete' },
          {id: 3, title: 'Doctor 3', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',icon: 'delete' },
          {id: 4, title: 'Doctor 4', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',icon: 'delete' },
          {id: 5, title: 'Doctor 5 ', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',icon: 'delete' }]
      }
    },
  mounted() {
      setTimeout(() => this.searchItem = this.items)
    },
  computed: {
    filteredItems() {
        return this.searchItem.filter((items) =>{
            return items.title.toLowerCase().match(this.search) });
    }
  },

  methods: {
    toggle (index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    },
    removeItem (id) {
      this.items = this.items.filter(item => item.id !== id)
    }
  }
  }
</script>

<style>
</style>
