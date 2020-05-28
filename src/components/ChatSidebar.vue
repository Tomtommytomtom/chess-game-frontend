<template>
  <v-navigation-drawer app right permanent style="overflow-y: hidden;">
    <chat
      :messages="messages"
      @submit:message="sendNewMessage"
      title="Room Chat"
      :user="user"
    />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "@vue/composition-api";
import UserList from "./User/UserList.vue";
import Chat from "./Chat/Chat.vue";
import {
  ConnectionIdentity,
  sendNewMessageToGroup,
  onMessageFromGroupReceived,
  GroupMessageReceivedConfig,
} from "@/service/signalr/draftHub";
import { testMessages } from "@/service/testData";

export default defineComponent({
  inheritAttrs: false,
  components: {
    UserList,
    Chat,
  },
  props: {
    users: Array as () => ConnectionIdentity[],
    groupId: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const messages: Ref<GroupMessageReceivedConfig[]> = ref(testMessages);
    onMessageFromGroupReceived((config: GroupMessageReceivedConfig) => {
      messages.value.push(config);
    });

    const sendNewMessage = (message: string) =>
      sendNewMessageToGroup({
        groupId: props.groupId,
        userName: props.user,
        message,
      });

    return {
      sendNewMessage,
      messages,
    };
  },
});
</script>

<style lang="scss">
.box {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.fixed {
  flex: 0 1 300px;
}
.stretch {
  flex: 1 1 auto;
}
</style>
