import { onUnmounted } from "@vue/composition-api";
import { HubConnection } from "@microsoft/signalr";

export const unregisterHandlersForConnection = (connection: HubConnection) => (
  key: string
) => {
  onUnmounted(() => {
    connection.off(key);
  });
};
