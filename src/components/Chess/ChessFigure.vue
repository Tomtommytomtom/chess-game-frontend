<template>
  <div class="d-flex justify-center align-center fill-height">
    <p class="ma-0 pa-0 black--text">{{ piece }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import { ChessField } from "@/service/models";

export default defineComponent({
  props: {
    figure: {
      type: Object as () => ChessField,
      required: true,
    },
  },
  setup(props) {
    const piece = computed(() => props.figure.occupant?.charAt(0) || " ");
    return {
      piece,
    };
  },
});
</script>

<style lang="scss"></style>
