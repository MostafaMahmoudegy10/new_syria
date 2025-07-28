import { useContext } from "react";
import { NewsContext } from "../store/NewsContextProvider";
import { CiLogin, CiLogout } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Header = () => {
  const { userLogged, handleUserLogged } = useContext(NewsContext);

  const color = userLogged ? "bg-[rgba(248,113,113,1)]" : "bg-[#E9C882]";

  return (
    <div
      className="bg-[rgba(255,255,255,0.8)]
        p-4
        rounded-xl
        w-[95%]
        mx-auto
        mt-4
        flex
        justify-between
        items-center
        font-semibold
        shadow-md
      "
    >
      <div className="w-[30%] flex justify-start">
        {userLogged ? (
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-2 bg-[#E9C882] p-2 rounded-md shadow-sm">
              <button type="button" className="cursor-pointer">
                مرحباً بك أحمد
              </button>
              <VscAccount />
            </div>
            <div
              className={`flex items-center p-2 ${color} rounded-md gap-2 shadow-sm cursor-pointer`}
            >
              <button type="button" onClick={handleUserLogged}>
                تسجيل الخروج
              </button>
              <CiLogout />
            </div>
          </div>
        ) : (
          <div
            className={`flex items-center p-2 ${color} rounded-md gap-2 shadow-sm cursor-pointer`}
          >
            <button type="button" onClick={handleUserLogged}>
              تسجيل الدخول
            </button>
            <CiLogin />
          </div>
        )}
      </div>

      <ul className="flex-1 ml-10 flex justify-center items-center gap-6">
        {[
          { label: "الاخبار", path: "/news" },
          { label: "من نحن", path: "/about" },
          { label: "تواصل معنا", path: "/contact" },
        ].map((item, indx) => (
          <li
            key={indx}
            className="hover:text-[rgba(0,0,0,0.30)] transition-colors duration-200"
          >
            <Link to={item.path} className="cursor-pointer">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="w-[20%] flex justify-end text-lg text-[#2D4639] font-extrabold">
        newSyria
      </div>
    </div>
  );
};

export default Header;
