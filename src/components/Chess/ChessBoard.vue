<template>
  <base-view>
    <div v-for="r in 9" :key="r" class="d-flex board">
      <div v-for="c in 9" :key="c" class="d-flex justify-center align-center">
        <div v-if="c == 1 && r != 1" class="mr-1">{{ r - 1 }}</div>
        <div
          v-if="r == 1 && c != 1"
          class="d-flex align-center justify-center"
          :class="{ ml1: c == 2 }"
          style="width: 10vw; max-width: 10vh;"
        >
          {{ c - 1 }}
        </div>
        <chess-field v-if="c > 1 && r > 1" :row="r - 1" :column="c - 1" />
      </div>
    </div>
  </base-view>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ChessField from "./ChessField.vue";

export default defineComponent({
  components: {
    ChessField,
  },
  props: {
    possibleMoves: {
      types: Array,
      default: () => [],
    },
    isMyTurn: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    return {};
  },
});
</script>

<style lang="scss">
.outlined {
  max-width: 10vh;
  max-height: 10vh;
  width: 10vw;
  height: 10vw;
  background-color: rgb(2, 95, 95);
}
.colored {
  background-color: cyan;
}
.left {
  border-left: 3px solid cyan;
}
.top {
  border-top: 3px solid cyan;
}
.right {
  border-right: 3px solid cyan;
}
.bottom {
  border-bottom: 3px solid cyan;
}
.board:first-child {
  margin-left: 12px;
}
</style>
