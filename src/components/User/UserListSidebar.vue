<template>
  <v-navigation-drawer app right permanent>
    <h2>Users in this Room</h2>
    <user-list :users="users" />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import UserList from "./UserList.vue";
import { ConnectionIdentity } from "../../plugins/draftHub";
export default defineComponent({
  inheritAttrs: false,
  components: {
    UserList,
  },
  props: {
    users: Array as () => ConnectionIdentity[],
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
