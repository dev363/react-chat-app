import { RouterProvider } from "react-router-dom";
import "./App.css";
import Chat from "./Pages/Chat";
import { SocketContext, useSocketHook } from "./hooks/useSocketHook";
import Router from "./Routes";

function App() {
  const socket = useSocketHook();
  return (
    <div className="App h-screen w-screen">
      <SocketContext.Provider value={{ socket }}>
        <RouterProvider router={Router} />
      </SocketContext.Provider>
    </div>
  );
}

export default App;
