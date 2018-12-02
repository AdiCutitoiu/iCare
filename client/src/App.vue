<template>
  <v-app>
    <div v-if="loggedIn">
      <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
          <span>Vuetify</span>
          <span class="font-weight-light">MATERIAL DESIGN</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
          <span class="mr-2">Latest Release</span>
        </v-btn>
      </v-toolbar>

      <v-content>
        <Dashboard/>
      </v-content>
    </div>
    <div v-else>
      <v-content>
        <Login/>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default {
  name: "App",
  components: {
    Login,
    Dashboard
  },
  data() {
    return {
      loggedIn: true
    };
  }
};
</script>
