import { HubConnectionBuilder } from "@microsoft/signalr";
import { unregisterHandlersForConnection } from "./helpers";

const connection = new HubConnectionBuilder().withUrl("drafthub").build();


export const start = () => connection.start();

const unregisterHandlers = unregisterHandlersForConnection(connection);

export interface ConnectionIdentity {
  connectionId: string;
  name: string;
}

export interface ConnectionInfo {
  groupId: string;
  groupConnections: ConnectionIdentity[];
}

export const onUpdateRoom = (
  handler: (connectionInfo: ConnectionInfo) => any
) => {
  connection.on("updateRoom", (connectionInfo) => {
    console.log(connectionInfo);
    handler(connectionInfo);
  });
  unregisterHandlers("updateRoom");
};

export const sendCreateRoom = (name: string) => {
  console.log("sent create room", name);
  return connection.send("CreateRoom", name);
};

interface JoinConfig {
  groupId: string;
  username: string;
}

export const sendJoinRoom = (JoinConfig: JoinConfig) => {
  console.log("sent create room with config", JoinConfig);
  return connection.send("JoinRoom", JoinConfig);
};
