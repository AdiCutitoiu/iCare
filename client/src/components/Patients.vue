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
    name: "Patients",
    data () {
      return {
        search: '',
      selected: [2],
      searchItem: [],
        items: [
          {id: 1, title: 'Patient 1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          {id: 2, title: 'Patient 2', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          {id: 3, title: 'Patient 3', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          {id: 4, title: 'Patient 4', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          {id: 5, title: 'Patient 5 ', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          {id: 6, title: 'Patient 6', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          {id: 7, title: 'Patient 7', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          {id: 8, title: 'Patient 8', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          {id: 9, title: 'Patient 9', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          {id: 10, title: 'Patient 10', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          {id: 11, title: 'Patient 11', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          {id: 12, title: 'Patient 12', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }]
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
    }
  }
  }
</script>

<style>
</style>
