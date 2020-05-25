<template>
  <v-content>
    <v-container class="container">
      <h1 v-if="title" class="mb-2">{{ title }}</h1>
      <slot />
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.container {
  height: 100%;
}

</style>
