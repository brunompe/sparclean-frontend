import logo from "../assets/8.svg";

export default function Header() {
  return (
    <>
      <div className=" bg-gray-200 shadow w-full p-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center px-12">
            <img src={logo} alt="Logo" className="w-14 h-18 mr-2" />
            <h2 className="font-madimi text-[#5271FF] text-xl">SparClean</h2>
          </div>
          <div className="md:hidden flex items-center">
            <button id="menuBtn"></button>
          </div>
        </div>
      </div>
    </>
  );
}
