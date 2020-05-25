<template>
  <v-app>
    <v-app-bar app color="primary" dark
      ><span class="font-weight-black mr-1">Signal R </span>App</v-app-bar
    >
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  }),
});
</script>
