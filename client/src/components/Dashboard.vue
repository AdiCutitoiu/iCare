<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12></v-flex>
    </v-layout>

        <Sidebar @signout="$emit('signout')"/>
        <Agenda></Agenda>
  </v-container>

</template>

<script>
import Sidebar from "./Sidebar";
import Agenda from "./Agenda";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Agenda
  },
  data: () => ({})
};
</script>

<style>
</style>
