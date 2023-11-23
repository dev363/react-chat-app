import { useContext } from "react";
import { AppContext } from "../../Context";
import { LeftArrowSVg } from "../../../../components/Icons";

const Header = () => {
  const { open, toggleOpen } = useContext(AppContext);
  return (
    <div className="header bg-purple-800 text-white p-2 flex justify-between md:justify-start">
      <div className="to-user ml-2 md:order-2">
        <h1 className="font-semibold uppercase">Rahul Singh</h1>
      </div>
      <span
        className={`${open && "rotate-180"} order-2 md:order-1 cursor-pointer`}
        onClick={toggleOpen}
      >
        <LeftArrowSVg />
      </span>
    </div>
  );
};
export default Header;
