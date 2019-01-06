<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12></v-flex>
    </v-layout>

        <Sidebar @signout="$emit('signout')"/>
        <CardsGrid></CardsGrid>
  </v-container>

</template>

<script>
import Sidebar from "./Sidebar";
import CardsGrid from "./CardsGrid";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    CardsGrid
  },
  data: () => ({})
};
</script>

<style>
</style>
