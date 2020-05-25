<template>
  <div>
    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>
    <slot name="sidebar" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
