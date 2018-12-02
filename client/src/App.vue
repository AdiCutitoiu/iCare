<template>
  <v-app>
    <v-toolbar app v-if="loggedIn">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content v-if="loggedIn">
      <Dashboard/>
    </v-content>
    <v-content v-else>
      <Register/>
    </v-content>
  </v-app>
</template>

<script>
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

export default {
  name: "App",
  components: {
    Register,
    Dashboard
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>
