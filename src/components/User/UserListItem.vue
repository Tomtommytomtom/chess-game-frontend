<template>
  <div class="d-flex">
    <p>{{ user.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { User } from "@/service/models";
export default defineComponent({
  props: {
    user: {
      type: Object as () => User,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
