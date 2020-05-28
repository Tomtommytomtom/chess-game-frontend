<template>
  <div class="pa-2">
    <v-textarea outlined v-model="message" hide-details> </v-textarea>
    <div class="d-flex mt-2">
      <v-btn text @click="clearMessage" color="primary">clear</v-btn>
      <v-spacer />
      <v-btn @click="submit" color="primary">send</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  props: {
    newMessage: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const message = ref("");
    const clearMessage = () => (message.value = "");
    return {
      message,
      clearMessage,
      submit: () => context.emit("submit:message", message.value),
    };
  },
});
</script>

<style lang="scss"></style>
