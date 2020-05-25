<template>
  <v-navigation-drawer app right permanent>
    <v-toolbar>
      <v-toolbar-title color="secondary">Users in this Room</v-toolbar-title>
    </v-toolbar>
    <user-list :users="users" v-bind="$attrs"/>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import UserList from "./UserList.vue";
import { ConnectionIdentity } from "@/service/signalr/draftHub";
export default defineComponent({
  inheritAttrs: false,
  components: {
    UserList,
  },
  props: {
    users: Array as () => ConnectionIdentity[],
  },
  setup(props,context) {
      console.log(context.attrs)
      return {}
  },
});
</script>

<style scoped></style>
