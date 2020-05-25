<template>
  <v-card>
    <chat-message
      v-for="(message, index) in messages"
      :key="index"
      :username="message.username"
      :message="message.message"
    />
  </v-card>
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

<style scoped></style>
