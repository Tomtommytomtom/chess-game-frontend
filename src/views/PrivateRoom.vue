<template>
  <base-view>
    <h1 class="font-weight-light">
      Room: <span class="font-weight-black">{{ connectionInfo.groupId }}</span>
    </h1>
    <h2 class="font-weight-light">
      Connected as
      <span class="font-weight-black">{{ loginInfo.userName }}</span>
    </h2>
    <join-dialog
      v-model="visible"
      :login-info.sync="loginInfo"
      @click:create="createRoom"
      @click:join="joinRoom"
    />
    <chat-sidebar
      :users="connectionInfo.groupConnections"
      :my-name="loginInfo.userName"
      :user="loginInfo.userName"
      :group-id="connectionInfo.groupId"
    />
  </base-view>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "@vue/composition-api";
import JoinDialog from "@/components/JoinDialog.vue";
import ChatSidebar from "@/components/ChatSidebar.vue";
import {
  sendCreateRoom,
  onUpdateRoom,
  ConnectionInfo,
  sendJoinRoom,
  start,
} from "@/service/signalr/draftHub.ts";
import { createLoginInfo } from "../service/models";

export default defineComponent({
  components: {
    JoinDialog,
    ChatSidebar,
  },
  props: {
    groupId: {
      type: String,
      default: () => "",
    },
  },
  setup(props) {
    const visible = ref(true);
    const loginInfo = ref(createLoginInfo());

    loginInfo.value.groupId = props.groupId;
    loginInfo.value.userName = "Oconnor";

    const connectionInfo: Ref<ConnectionInfo> = ref({});

    const createRoom = () => {
      sendCreateRoom(loginInfo.value.userName).then(
        () => (visible.value = false)
      );
    };

    const joinRoom = () => {
      sendJoinRoom(loginInfo.value).then(() => (visible.value = false));
    };

    onUpdateRoom((connInfo: ConnectionInfo) => {
      connectionInfo.value = connInfo;
      console.log("running handler now to update users", connInfo);
    });

    start().then(() => console.log("connected to drafthub"));

    return {
      visible,
      createRoom,
      joinRoom,
      loginInfo,
      connectionInfo,
    };
  },
});
</script>

<style scoped></style>
