import { ref, watch, Ref } from "@vue/composition-api";

export function sync<T>(
  value: () => T,
  context: any,
  eventName = "input"
): Ref<T> {
  const result: Ref<T> = ref(value());
  watch(value, () => {
    result.value = value();
  });
  watch(result, () => {
    context(eventName, result.value);
  });

  return result;
}
