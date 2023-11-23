const MessageInput = () => {
  return (
    <div className="message-input border-2 p-1 absolute z-1 bottom-0 w-full flex flex-col gap-2 md:flex-row">
      <input
        type="text"
        placeholder="type here ..."
        className=" bg-gray-200 p-2"
      />
      <button className="bg-purple-800 text-white font-semibold p-2 hover:bg-purple-900">
        <span className="block text-2xl">&#10148;</span>
      </button>
    </div>
  );
};

export default MessageInput;
