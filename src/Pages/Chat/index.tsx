import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../hooks/useSocketHook";
import { Socket } from "socket.io-client";
import { SOCKET_CONST } from "../../constants/Socket";
import { LeftArrowSVg } from "../../components/Icons";
import SideBar from "./sidebar";
import ChatSection from "./ChatSection";
import SidebarProvider from "./Context";

const zoeIco =
  "https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg";

const Chat = () => {
  return (
    <SidebarProvider>
      <section className="chat-section relative">
        <SideBar />
        <ChatSection />
      </section>
    </SidebarProvider>
  );
};
export default Chat;

// const [messageInputValue, setMessageInputValue] = useState("");
//   const socket = useContext(SocketContext);
//   const [socketObj, setSocketObj] = useState<Socket<any>>();

//   useEffect(() => {
//     console.log(socket?.socket?.id, "i m socket");
//     if (socket?.socket?.id) {
//       setSocketObj(socket.socket);
//       socket.socket.emit(SOCKET_CONST.SOCKET_USER_CONNECTED, {
//         socketId: socket.socket.id,
//         userId: localStorage.getItem("username"),
//       });
//     } else {
//       console.log("Not Connected");
//     }
//   }, [socket]);

//   useEffect(() => {
//     console.log(socketObj, "I am Socket Obj");
//     if (socketObj) {
//       socketObj.on(
//         SOCKET_CONST.SOCKET_USER_CONNECTED_SUCCESS,
//         (res: any): void => {
//           console.log(res, SOCKET_CONST.SOCKET_USER_CONNECTED_SUCCESS);
//         }
//       );
//       socketObj.on(SOCKET_CONST.SOCKET_MESSAGE_RECEIVE, (res: any): void => {
//         console.log(res, SOCKET_CONST.SOCKET_USER_CONNECTED_SUCCESS);
//       });
//     }
//   }, [socketObj]);

//   const sendMessage = () => {
//     try {
//       socketObj?.emit(SOCKET_CONST.SOCKET_MESSAGE_SENT, {
//         to: "123",
//         from: localStorage.getItem("username"),
//         message: messageInputValue,
//       });
//       setMessageInputValue("");
//     } catch (error) {}
//   };
