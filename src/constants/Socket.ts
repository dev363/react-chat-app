// constants.js
export const SOCKET_CONST = {
  SOCKET_CONNECTED: "user:connected",
  SOCKET_USER_CONNECTED: "user:userConnected",
  SOCKET_USER_CONNECTED_SUCCESS: "user:userConnected:success",
  SOCKET_USER_REMOVE: "user:remove",
  SOCKET_USER_REMOVE_SUCCESS: "user:remove:success",
  SOCKET_USER_DISCONNECTED: "user:disconnected",
  SOCKET_MESSAGE_SENT: "message:sent",
  SOCKET_MESSAGE_RECEIVE: "message:receive",
  SOCKET_MESSAGE_RECEIVE_ERROR: "message:receive:error",
  SOCKET_MESSAGE_GET_ALL: "message:getAll",
  SOCKET_GROUP_GET_ALL_ROOMS: "group:getAllRooms",
  SOCKET_GROUP_SENT_ALL_ROOMS: "group:getRooms",
  SOCKET_GROUP_GET_ALL_USERS: "group:getRoomUsers",
  SOCKET_GROUP_SENT_ALL_USERS: "group:getUsers",
  SOCKET_GROUP_SENT_MESSAGE: "group:sent",
  SOCKET_GROUP_CREATE: "group:create",
  SOCKET_GROUP_CREATE_DONE: "group:create:done",
  SOCKET_GROUP_JOIN: "group:join",
  SOCKET_GROUP_JOIN_DONE: "group:join:done",
  __TABLES__: {
    user: "users.json",
    messages: "messages.json",
    rooms: "rooms.json",
  },
};
