import { useContext } from "react";
import LoggedProfile from "./Profile";
import { AppContext } from "../Context";

const SideBar = () => {
  const { open, toggleOpen } = useContext(AppContext);
  return (
    <div
      className={`${
        open ? " w-4/5 md:w-72" : "w-0 md:w-20"
      } border-2 h-screen bg-purple-800 text-white duration-300 absolute top-0 left-0 overflow-hidden`}
    >
      <LoggedProfile />
      <div className="searh-bar px-2 pt-3">
        <input
          type="text"
          className="w-full h-8 rounded-sm p-1"
          placeholder="Search ..."
        ></input>
      </div>
      <div className="user-listing p-2">
        <ul>
          {[...Array(5)].map((user, i) => (
            <li className="p-1 text-gray-300 font-semibold rounded-sm hover:bg-purple-900 hover:text-white">
              User {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
