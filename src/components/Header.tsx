import logo from "../assets/2.svg";

export default function Header() {
  return (
    <>
      <div className=" bg-gray-200 shadow w-full p-2 flex items-center justify-between">
        <div className="flex items-center">
          {/* <!-- Mostrado en todos los dispositivos --> */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-28 h-18 mr-2" />
            <h2 className="font-madimi text-xl">SparClean</h2>
          </div>
          {/* <!-- Se muestra solo en dispositivos pequeños --> */}
          <div className="md:hidden flex items-center">
            <button id="menuBtn"></button>
          </div>
        </div>
      </div>
    </>
  );
}
