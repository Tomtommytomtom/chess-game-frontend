<template>
  <v-dialog v-model="visible" class="dialog" width="50vw" v-bind="$attrs">
    <v-card>
      <v-toolbar color="primary">
        <v-toolbar-title >{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-2">
      <slot name="form" />
      </v-card-text>
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

<style scss scoped>
.dialog{
  width: 50vw;
}
</style>
