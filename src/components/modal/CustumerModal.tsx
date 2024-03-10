import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import ReactPaginate from "react-paginate";
import undraw_location from "../../assets/undraw-location.svg";
import { ICustomerProps } from "../../interfaces/ICustomerProps";
import { ISelectedItem } from "../../interfaces/ISelectedItem";
import { styles } from "./Style";
import TableCardModal from "./TableCardModal";

export default function CustomerModal({
  modalIsOpen,
  closeModal,
  data,
}: ICustomerProps) {
  Modal.setAppElement("#root");

  const [currentPage, setCurrentPage] = useState(1);
  const [custumersPerPage] = useState(5);
  const indexOfLastCustumer = currentPage * custumersPerPage;
  const indexOfFirsCustomer = indexOfLastCustumer - custumersPerPage;
  const currentCustomer = data.slice(indexOfFirsCustomer, indexOfLastCustumer);

  function paginate(selectedItem: ISelectedItem) {
    const { selected } = selectedItem;
    setCurrentPage(selected + 1);
  }

  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={styles}>
        <div className="flex flex-col justify-center items-center w-[60%] h-full  ">
          <table className="w-full  text-sm table-fixed min-h-[400px] ">
            <thead className=" border-b border-b-gray-200 ">
              <tr>
                <th className="font-bold uppercase text-sm py-2  ">
                  Sequencia de Entrega
                </th>
                <th className="font-bold uppercase text-sm py-2  ">Nome</th>
                <th className="font-bold uppercase text-sm">Email</th>
                <th className="font-bold uppercase text-sm">Telefone</th>
                <th className="font-bold uppercase text-sm">Distancia</th>
              </tr>
            </thead>
            <tbody className="text-center h-full">
              {currentCustomer &&
                currentCustomer.map((data, index) => {
                  return <TableCardModal customer={data} key={index} />;
                })}
            </tbody>
          </table>
          <ReactPaginate
            containerClassName="w-1/2 flex justify-center items-center mt-[50px] gap-[20px]"
            pageLinkClassName="text-[14px] font-semibold text-gray-500 bg-[#fff] px-[18px] py-[8px] rounded-[10px] cursor-pointer [transition:all_0.5s_ease] hover:text-[#fff] hover:bg-[#5271FF]"
            previousLinkClassName="text-[14px] font-semibold text-gray-500 bg-[#fff] px-[18px] py-[8px] rounded-[10px] cursor-pointer [transition:all_0.5s_ease] hover:text-[#fff] hover:bg-[#5271FF]"
            nextLinkClassName="text-[14px] font-semibold text-gray-500 bg-[#fff] px-[18px] py-[8px] rounded-[10px] cursor-pointer [transition:all_0.5s_ease] hover:text-[#fff] hover:bg-[#5271FF]"
            activeLinkClassName="bg-[#5271FF] hover:text-[#fff] hover:bg-[#fff] text-[#fff]"
            onPageChange={paginate}
            pageCount={Math.ceil(data.length) / custumersPerPage}
          />
        </div>
        <div className="w-[40%] flex justify-center items-center pl-20">
          <img src={undraw_location} alt="" />
        </div>
        <button onClick={closeModal} className="absolute right-10">
          <IoClose className="text-3xl" />
        </button>
      </Modal>
    </>
  );
}
