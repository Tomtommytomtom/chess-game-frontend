<template>
  <base-view title="Small SignalR App">
  <p>{{ text }}</p>
    <v-btn to="/room">Connect to a Room</v-btn>
    
  </base-view>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
// @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {},
  setup(){
    return {
      text: "Right now you can create or join a Room over a randomly created ID. :) It will show the List of people connected to the Room, nothing more. The Connections are stored in an in memory table, which is a doo doo solution :/"
    }
  }
});
</script>
