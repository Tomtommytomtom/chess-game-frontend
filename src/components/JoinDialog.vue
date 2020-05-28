<template>
  <base-dialog v-model="visible" title="Create, Join a Room">
    <template #form>
      <join-form v-model="loginInfo" />
    </template>
    <template #actions>
      <v-btn text @click="join" color="primary">
        Join Room
      </v-btn>
      <v-btn @click="create" :disabled="isCreateDisabled" color="primary">
        Create Room
      </v-btn>
    </template>
  </base-dialog>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
} from "@vue/composition-api";
import { sync } from "@/service/helpers";
import JoinForm from "./JoinForm.vue";
import { LoginInfo } from "@/service/models";
export default defineComponent({
  components: {
    JoinForm,
  },
  props: {
    value: Boolean,
    loginInfo: Object as () => LoginInfo,
  },
  setup(props, context) {
    const visible = sync(() => props.value, context.emit);
    const loginInfo = sync(
      () => props.loginInfo,
      context.emit,
      "update:login-info"
    );
    const isCreateDisabled = computed(() => !!loginInfo?.value?.groupId);
    return {
      loginInfo,
      isCreateDisabled,
      visible,
      create: () => context.emit("click:create"),
      join: () => context.emit("click:join"),
    };
  },
});
</script>

<style scoped></style>
