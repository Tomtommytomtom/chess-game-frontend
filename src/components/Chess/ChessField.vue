<template>
  <div
    class="outlined d-flex align-center justify-center black--text"
    :class="{
      colored: (column + row) % 2 == 0,
      top: row == 1,
      bottom: row == 8,
      right: column == 8,
      left: column == 1,
    }"
  >
    {{ column }},{{ row }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    row: {
      type: Number,
      required: true,
    },
    column: {
      type: Number,
      required: true,
    },
  },
  setup() {
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
</style>
