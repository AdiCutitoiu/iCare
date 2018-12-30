<template>
  <v-app>
    <!--v-toolbar app v-if="loggedIn">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar-->
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <Authentication></Authentication>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
//import Login from "./components/Login";
import Authentication from "./components/Authentication";
//import Dashboard from "./components/Dashboard";

export default {
  name: "App",
  components: {
    Authentication
    //Dashboard
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>
