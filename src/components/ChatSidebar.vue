<template>
  <v-navigation-drawer app right permanent>
    <div class="box">
      <v-toolbar class="header">
        <v-toolbar-title color="secondary">Users in this Room</v-toolbar-title>
      </v-toolbar>
      <user-list class="users" :users="users" v-bind="$attrs"/>
      <div class="content">
        chat
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import UserList from "./User/UserList.vue";
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

<style lang="scss">
.box{
  display: flex;
  flex-flow: column;
  height: 100%;
}
.header{
  flex: 0 1 auto;
  border: grey dotted 1px;
}
.users{
  flex: 0 1 20%;
  border: grey dotted 1px;
  overflow-y: auto;
}
.content{
  flex: 1 1 auto;
  border: grey dotted 1px;
}
</style>
