<template>
  <v-container>
      <kalendar :configuration="calendar_settings" :appointments="appointments"/>
  </v-container>

</template>

<script>
import { Kalendar } from 'kalendar-vue';
import 'kalendar-vue/dist/KalendarVue.css';

export default {
  name: "Agenda",
  components: {
    Kalendar
  },
  data: () => ({
    appointments: [],
	  calendar_settings: {
		style: 'material_design', 
		view_type: 'Month', 
		split_value: 15, 
		cell_height: 20, 
		scrollToNow: true,
		current_day: new Date(), 
	},
  })
};
</script>

<style>
</style>
