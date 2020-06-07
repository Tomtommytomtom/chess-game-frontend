<template>
  <chess-board />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ChessBoard from "@/components/Chess/ChessBoard.vue";

export default defineComponent({
  components: {
    ChessBoard,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
