<template>
  <div>
    <div v-for="c in 8" :key="c" class="d-flex">
      <div
        v-for="r in 8"
        :key="r"
        class="outlined"
        :class="{ colored: (c + r) % 2 == 0 }"
      >
        <chess-figure :figure="board[c - 1][r - 1]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import ChessFigure from "./ChessFigure.vue";
import {
  ChessGameState,
  createStartChessGameState,
} from "../../service/models";

export default defineComponent({
  components: {
    ChessFigure,
  },
  props: {
    gameState: {
      type: Object as () => ChessGameState,
      default: () => createStartChessGameState(),
    },
  },
  setup(props) {
    const board = computed(() => props.gameState.board);
    console.log(board);
    return {
      board,
    };
  },
});
</script>

<style lang="scss">
.outlined {
  width: 50px;
  height: 50px;
  background-color: rgb(2, 95, 95);
}
.colored {
  background-color: cyan;
}
</style>
