import { useContext } from "react";
import {NewsContext} from "../store/NewsContextProvider";
import { CiLogin, CiLogout } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  const {userLogged,handleUserLogged}=useContext(NewsContext);

  const color = userLogged ? "bg-[rgba(248,113,113,1)]" : "bg-[#E9C882]";

  return (
    <div
      className="bg-[rgba(255,255,255,0.8)] 
      p-4 
      rounded-xl
      w-[90%]
      mx-10
      flex
      font-semibold
      justify-between
      items-center
      "
    >
      <span>newSyria</span>

      <ul className="flex justify-center gap-5">
        {["تواصل معنا", "من نحن", "الاخبار"].map((item, indx) => (
          <li
            key={indx}
            className="hover:text-[rgba(0,0,0,0.30)] hover:cursor-pointer transition-colors duration-200"
          >
            {item}
          </li>
        ))}
      </ul>

      <div>
        {userLogged ? (
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2 bg-[#E9C882] p-2 rounded-md">
              <VscAccount />
              <button type="button">مرحبا بك احمد</button>
            </div>
            <div className={`flex items-center p-2 ${color} rounded-md gap-2`}>
              <CiLogout />
              <button type="button" onClick={handleUserLogged}>
                تسجيل الخروج
              </button>
            </div>
          </div>
        ) : (
          <div className={`flex items-center p-2 ${color} rounded-md gap-2`}>
            <CiLogin />
            <button type="button" onClick={handleUserLogged}>
              تسجيل الدخول
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;