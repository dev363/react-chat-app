import { useContext } from "react";
import { LeftArrowSVg } from "../../../components/Icons";
import { AppContext } from "../Context";
import MessageInput from "./Input";
import Header from "./Header";

const ChatSection = () => {
  const { open, toggleOpen } = useContext(AppContext);
  return (
    <main
      className={`message-container relative border-2 h-screen w-full md:w-auto ${
        open ? "md:ml-72" : "md:ml-20"
      } `}
    >
      <Header />
      <div className="message-listing">Message Listing</div>
      <MessageInput />
    </main>
  );
};
export default ChatSection;
