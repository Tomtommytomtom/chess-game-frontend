<template>
  <div class="pa-2">
    <user-list-item
      v-for="user in users"
      :key="user.connectionId"
      :user="user"
      v-bind="$attrs"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import UserListItem from "./UserListItem.vue";
import { ConnectionIdentity } from "@/service/signalr/draftHub";
export default defineComponent({
  inheritAttrs: false,
  components: {
    UserListItem,
  },
  props: {
    users: {
      type: Array as () => ConnectionIdentity[],
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
