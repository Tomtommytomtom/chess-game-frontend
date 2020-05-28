<template>
  <div class="box">
    <v-toolbar class="header">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <div class="reverse">
      <chat-message-box v-bind="$attrs" class="messages"></chat-message-box>
    </div>
    <chat-form v-bind="$attrs" v-on="$listeners" class="controls"></chat-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ChatMessageBox from "./ChatMessageBox.vue";
import ChatForm from "./ChatForm.vue";

export default defineComponent({
  inheritAttrs: false,
  components: {
    ChatMessageBox,
    ChatForm,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss">
.box {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.header {
  flex: 0 1 auto;
}
.messages {
  flex: 1;
  display: flex;
  flex-flow: column;
}

//this as a wrapper reverses the overflow
.reverse {
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: cyan;
}
</style>
