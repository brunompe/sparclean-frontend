import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-full w-full">
        <div className=" flex flex-wrap justify-center h-full w-full">
          <div
            className="md:w-60 flex flex-col justify-between pb-10  md:flex"
            id="sideNav"
          >
            <nav className="">
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-[#5271FF] hover:to-[#5271FF] hover:text-white"
                onClick={() => {
                  navigate("/");
                }}
              >
                <i className="mr-2"></i>Clientes
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-[#5271FF] hover:to-[#5271FF] hover:text-white"
                onClick={() => {
                  navigate("/customer/new");
                }}
              >
                <i className="mr-2"></i>Adicionar Clientes
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-[#5271FF] hover:to-[#5271FF] hover:text-white"
                href="#"
              >
                <i className="mr-2"></i>Rotas
              </a>
            </nav>

            <div className="">
              {/* <!-- Señalador de ubicación --> */}
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

              {/* <!-- Copyright al final de la navegación lateral --> */}
              <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">
                Copyright WCSLAT@2023
              </p>
            </div>
          </div>

          {/* <!-- Área de contenido principal --> */}
        </div>
      </div>
    </>
  );
}
