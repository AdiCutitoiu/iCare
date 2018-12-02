<template>
  <v-container>
    <v-layout align-center justify-center row fill-height wrap>
      <v-flex xs4>
        <v-text-field
          v-model="name"
          :rules="[rules.required]"
          :type="'text'"
          name="input-10-1"
          label="Name"
        ></v-text-field>

        <v-text-field
          v-model="surname"
          :rules="[rules.required]"
          :type="'text'"
          name="input-10-1"
          label="Surname"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.validEmail]"
          :type="'email'"
          name="input-10-1"
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show ? 'visibility_off' : 'visibility'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show = !show"
        ></v-text-field>

        <v-progress-linear slot="progress" :value="progress" :color="color" height="7"></v-progress-linear>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    login: true,
    show: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      validEmail: email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase()) || "This is not a valid email address";
      },
      emailMatch: () => "The email and password you entered don't match"
    },
    email: "",
    name: "",
    surname: "",
    password: ""
  }),
  computed: {
    progress() {
      return Math.min(100, (this.password.length / 8) * 100);
    },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
    }
  }
};
</script>

<style>
</style>
