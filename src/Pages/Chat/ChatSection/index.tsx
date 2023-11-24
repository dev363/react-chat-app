import { useContext } from "react";
import { LeftArrowSVg } from "../../../components/Icons";
import { AppContext } from "../Context";
import MessageInput from "./Input";
import Header from "./Header";
import moment from "moment";

const ChatSection = () => {
  const { open, toggleOpen } = useContext(AppContext);
  return (
    <main
      className={`message-container relative border-2 h-screen w-full md:w-auto ${
        open ? "md:ml-72" : "md:ml-20"
      } `}
    >
      <Header />
      <div className="message-listing bg-slate-200 h-[calc(100%_-_10rem)] px-3 flex flex-col overflow-y-scroll">
        <div className="message left my-3 flex flex-col items-start ">
          <p className="w-max px-4 py-2 rounded-xl font-semibold text-md bg-purple-500 text-white">
            hello How are you?
          </p>
          <span
            className="date text-xs ml-4 cursor-pointer"
            title={moment().format("LLLL")}
          >
            {moment().fromNow()}
          </span>
        </div>
        {[...Array(15)].map((e, i) => (
          <Message key={i} />
        ))}
      </div>
      <MessageInput />
    </main>
  );
};
export default ChatSection;

const Message = () => {
  return (
    <div className="message right my-3 flex flex-col items-end">
      <p className="w-max px-4 py-2 rounded-xl font-semibold text-md bg-purple-500 text-white">
        hello How are you?
      </p>
      <span
        className="date text-xs mr-4 cursor-pointer"
        title={moment().format("LLLL")}
      >
        {moment().fromNow()}
      </span>
    </div>
  );
};
