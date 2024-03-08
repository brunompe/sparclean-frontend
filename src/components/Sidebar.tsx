import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerModal from "./modal/CustumerModal";

export default function Sidebar() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const navigate = useNavigate();
  return (
    <>
      <CustomerModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div className="h-full w-full">
        <div className=" flex flex-wrap justify-center h-full w-full">
          <div
            className="md:w-60 flex flex-col justify-between py-10  md:flex"
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
                onClick={openModal}
              >
                <i className="mr-2"></i>Rotas
              </a>
            </nav>

            <div className="">
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>
              <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">
                Desenvolvido por Bruno Miranda
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
