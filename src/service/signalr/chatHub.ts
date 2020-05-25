import { HubConnectionBuilder } from "@microsoft/signalr";

const connection = new HubConnectionBuilder().withUrl("chathub").build();
connection.start();
const username = Date.now();

export interface Message {
  username: number;
  message: string;
}

export const onNewMessage = (handler: (messageArgs: Message) => void) => {
  connection.on("newMessage", (message: Message) => {
    handler(message);
  });
};

export const sendNewMessage = (message: string) => {
  console.log(connection);
  connection.send("sendNewMessage", {
    username,
    message,
  });
};
