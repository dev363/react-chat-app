import { useEffect, useState, createContext } from "react";
import io, { Socket } from "socket.io-client";

export const useSocketHook = () => {
  const [socket, setSocket] = useState<Socket<any> | null>(null);

  useEffect(() => {
    if (process.env.REACT_APP_SOCKET_URL) {
      const response = io(process.env.REACT_APP_SOCKET_URL);
      setSocket(response);
    }
    return () => {
      socket?.disconnect();
    };
  }, []);
  return socket;
};

interface SocketContextProps {
  socket: Socket<any> | null;
}

export const SocketContext = createContext<SocketContextProps | undefined>(
  undefined
);
