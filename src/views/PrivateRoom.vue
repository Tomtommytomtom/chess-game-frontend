<template>
  <base-view>
    <h1>{{ loginInfo.username }}</h1>
    <join-dialog
      v-model="visible"
      :login-info.sync="loginInfo"
      @click:create="createRoom"
      @click:join="joinRoom"
    />
    <template #sidebar>
      <user-list-sidebar :users="users" />
    </template>
  </base-view>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "@vue/composition-api";
import JoinDialog from "@/components/JoinDialog.vue";
import UserListSidebar from "@/components/User/UserListSidebar.vue";
import {
  sendCreateRoom,
  onUpdateRoom,
  ConnectionInfo,
  ConnectionIdentity,
  sendJoinRoom,
} from "@/plugins/draftHub.ts";
import { createLoginInfo } from "../service/models";

export default defineComponent({
  components: {
    JoinDialog,
    UserListSidebar,
  },
  setup() {
    const visible = ref(true);
    const loginInfo = ref(createLoginInfo());
    const users: Ref<ConnectionIdentity[]> = ref([]);

    const createRoom = () => {
      sendCreateRoom(loginInfo.value.username).then(
        () => (visible.value = false)
      );
    };

    const joinRoom = () => {
      sendJoinRoom(loginInfo.value).then(() => (visible.value = false));
    };

    onUpdateRoom((connectionInfo: ConnectionInfo) => {
      users.value = connectionInfo.groupConnections;
      console.log("running handler now to update users", users.value);
    });

    return {
      visible,
      createRoom,
      joinRoom,
      loginInfo,
      users,
    };
  },
});
</script>

<style scoped></style>
