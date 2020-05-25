<template>
  <div>
    <p class="font-weight-black">{{ username }}</p>
    <p>{{ message }}</p>
    <v-divider />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  components: {},
  props: {
    username: {
      type: Number,
      default: "Unkown User",
    },
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
