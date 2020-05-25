<template>
  <v-dialog v-model="visible">
    <v-card>
      <v-toolbar>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
      <slot name="form" />
      <v-card-actions>
        <slot name="actions" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { sync } from "@/service/helpers";
export default defineComponent({
  components: {},
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    return {
      visible: sync(() => props.value, context.emit),
    };
  },
});
</script>

<style scoped></style>
