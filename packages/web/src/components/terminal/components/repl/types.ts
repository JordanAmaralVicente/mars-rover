export type MessageType = "received" | "sent";

export interface Message {
  message: string;
  type: MessageType;
}
