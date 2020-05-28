<template>
  <div>
    <chat-message-received
      v-if="message[userNameField] !== user"
      :message="message"
    />
    <chat-message-sent v-else :message="message" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ChatMessageReceived from "./ChatMessageReceived.vue";
import ChatMessageSent from "./ChatMessageSent.vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    message: {
      type: Object,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    userNameField: {
      type: String,
      default: "userName",
    },
  },
  components: {
    ChatMessageReceived,
    ChatMessageSent,
  },
});
</script>

<style lang="scss"></style>
