<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light"> Todo </span>
                <span> Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat @click="signout" color="grey">
                <span>Singout</span>
            </v-btn>
            
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="blue accent-2">
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/85.jpg">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>John Leider</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list dense class="pt-0">
                <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    @click="drawer = !drawer">
            <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
      </v-list-tile>
    </v-list>           
        </v-navigation-drawer>    
    </nav>
</template>

<script>
import auth from "../util/authentication"

export default {
  name: "Sidebar",
  methods: {
      signout: function() {
          auth.logout();
          this.$emit("signout");
      }
  },
  data: () => ({
    drawer: false,
    items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
    right: null
  })
};
</script>

<style>
</style>
