import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import logo from "../assets/8.svg";

export default function Header() {
  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <div className=" bg-gray-100 shadow w-full p-2 flex items-center justify-between">
        <div className="flex items-center justify-between w-full pr-14">
          <div className="flex items-center px-12">
            <img src={logo} alt="Logo" className="w-14 h-18 mr-2" />
            <h2 className="font-madimi text-[#5271FF] text-xl">SparClean</h2>
          </div>
          <div className="flex items-center">
            <button className="text-2xl" onClick={handleLogOut}>
              <IoIosLogOut />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
