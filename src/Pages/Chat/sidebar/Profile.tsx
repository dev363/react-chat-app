import { useContext } from "react";
import { AppContext } from "../Context";

const LoggedProfile = () => {
  const { open } = useContext(AppContext);
  return (
    <div className="profile flex items-center justify-center flex-col py-2 border-b-2 relative bg-purple-950">
      <span
        className={` bg-white rounded-full  block text-center text-black border -4 border-black ${
          open ? "w-14 h-14 text-5xl" : "w-10 h-10 text-3xl"
        }`}
      >
        &#9818;
      </span>
      {open && (
        <h1 className="font-semibold uppercase text-center ">
          {localStorage.getItem("username")}
        </h1>
      )}
    </div>
  );
};

export default LoggedProfile;
