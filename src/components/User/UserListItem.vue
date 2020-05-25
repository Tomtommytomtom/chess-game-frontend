<template>
  <div>
    <div class="d-flex align-center">
      <span class="font-weight-heavy">{{ user.name }}</span>
      <span v-if="user.name === myName"> (You)</span>
    </div>
    <v-divider />
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
    myName: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
