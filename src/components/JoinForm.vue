<template>
  <div class="d-flex flex-column">
    <v-text-field v-model="loginInfo.userName" label="Name" />
    <v-text-field v-model="loginInfo.groupId" label="Room Id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { LoginInfo } from "@/service/models";
import { sync } from "@/service/helpers";
export default defineComponent({
  components: {},
  props: {
    value: {
      type: Object as () => LoginInfo,
      required: true,
    },
  },
  setup(props, context) {
    const loginInfo = sync(() => props.value, context.emit);
    return {
      loginInfo,
    };
  },
});
</script>

<style scoped></style>
