<template>
  <div>
    <chat-message
      v-for="(message, index) in messages"
      :key="index"
      :message="message"
      v-bind="$attrs"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ChatMessage from "./ChatMessage.vue";
export default defineComponent({
  components: {
    ChatMessage,
  },
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style></style>
