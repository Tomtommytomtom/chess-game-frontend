<template>
  <base-dialog v-model="visible" title="Create, Join a Room">
    <template #form>
      <join-form v-model="loginInfo" />
    </template>
    <template #actions>
      <v-btn text @click="join">
        Join Room
      </v-btn>
      <v-btn @click="create">
        Create Room
      </v-btn>
    </template>
  </base-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from "@vue/composition-api";
import { sync } from "@/service/helpers";
import JoinForm from "./JoinForm.vue";
import { LoginInfo, createLoginInfo } from "@/service/models";
export default defineComponent({
  components: {
    JoinForm,
  },
  props: {
    value: Boolean,
    loginInfo: String,
  },
  setup(props, context) {
    const visible = sync(() => props.value, context.emit);
    const loginInfo = sync(
      () => props.loginInfo,
      context.emit,
      "update:login-info"
    );
    return {
      loginInfo,
      visible,
      create: () => context.emit("click:create"),
      join: () => context.emit("click:join"),
    };
  },
});
</script>

<style scoped></style>
