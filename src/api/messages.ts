import apiClient from "./client";

const send = (message: string, listingId: number | string) =>
  apiClient.post("/messages", { message, listingId });

export default {
  send,
};
