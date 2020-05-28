<template>
  <div class="d-flex ml-1">
    <div class="arrow-left mt-4" />
    <v-card color="primary" class="my-2 mr-4 elevation-0 wrap" width="100%">
      <v-sheet tile color="cyan darken-4 d-flex">
        <p class="font-weight-black ma-0 pa-1">
          {{ message.userName }}
        </p>
      </v-sheet>
      <p class="ma-0 pa-2">{{ message.message }}</p>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  components: {},
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped>
.arrow-left {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-right: 10px solid#006064;
}
.arrow-right {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-left: 10px solid #006064;
}

.wrap {
  white-space: pre-wrap; /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera <7 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-break: break-all;
}
</style>
