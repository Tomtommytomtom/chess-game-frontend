<template>
  <div>
    <user-list-item
      v-for="user in users"
      :key="user.connectionId"
      :user="user"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import UserListItem from "./UserListItem.vue";
import { ConnectionIdentity } from "../../plugins/draftHub";
export default defineComponent({
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
