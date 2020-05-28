import { HubConnectionBuilder } from "@microsoft/signalr";
import { unregisterHandlersForConnection } from "./helpers";

const connection = new HubConnectionBuilder().withUrl("drafthub").build();

export const start = () => connection.start();

const unregisterHandlers = unregisterHandlersForConnection(connection);

interface GroupIdentifiable {
  groupId: string;
}

interface ConnectionIdentifiable {
  connectionId: string;
}

export interface ConnectionIdentity extends ConnectionIdentifiable {
  name: string;
}

export interface ConnectionInfo extends GroupIdentifiable {
  groupConnections: ConnectionIdentity[];
}

export const onUpdateRoom = (
  handler: (connectionInfo: ConnectionInfo) => any
) => {
  connection.on("updateRoom", (connectionInfo) => {
    handler(connectionInfo);
  });
  unregisterHandlers("updateRoom");
};

export const sendCreateRoom = (name: string) => {
  return connection.send("CreateRoom", name);
};

interface JoinConfig extends GroupIdentifiable {
  userName: string;
}

export const sendJoinRoom = (config: JoinConfig) => {
  return connection.send("JoinRoom", config);
};

interface GroupMessageSendConfig extends GroupIdentifiable {
  userName: string;
  message: string;
}

export interface GroupMessageReceivedConfig {
  userName: string;
  message: string;
}

export const sendNewMessageToGroup = (config: GroupMessageSendConfig) => {
  return connection.send("SendNewMessageToGroup", config);
};

export const onMessageFromGroupReceived = (
  handler: (config: GroupMessageReceivedConfig) => void
) => {
  connection.on(
    "messageFromGroupReceived",
    (config: GroupMessageReceivedConfig) => {
      handler(config);
    }
  );
  unregisterHandlers("messageFromGroupReceived");
};
