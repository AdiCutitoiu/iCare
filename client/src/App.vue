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
        <HelloWorld/>
      </v-content>
    </div>
    <div v-else>
      <v-content>
        <HelloWorld/>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>
