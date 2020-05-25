<template>
  <base-view>
    <chat-message-box :messages="messages" />
    <v-text-field v-model="arg"></v-text-field>
    <v-btn @click="sendHandler">SUBMIT</v-btn>
    <v-btn to="/room">to room</v-btn>
  </base-view>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "@vue/composition-api";
import ChatMessageBox from "@/components/ChatMessageBox.vue";
import { onNewMessage, sendNewMessage, Message } from "@/plugins/chatHub";
// @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    ChatMessageBox,
  },
  setup(props, context) {
    const messages: Ref<Message[]> = ref([]);
    const arg = ref("");
    onNewMessage((res: Message) => {
      messages.value.unshift(res);
    });
    return {
      arg,
      messages,
      sendHandler: () => sendNewMessage(arg.value),
    };
  },
});
</script>
