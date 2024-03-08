import { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import undraw_location from "../../assets/undraw-location.svg";
import ReactPaginate from "react-paginate";
import TableCardModal from "./TableCardModal";
import { fetchCustomerDistance } from "../../services/api/customerData";

export default function CustomerModal({ modalIsOpen, closeModal }) {
  Modal.setAppElement("#root");
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchCustomerDistance();
      setCustomerData(data);
    }
    fetchData();
  }, []);
  function paginate({ selected }) {
    setCurrentPage(selected + 1);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [custumersPerPage] = useState(5);
  const indexOfLastCustumer = currentPage * custumersPerPage;
  const indexOfFirsCustomer = indexOfLastCustumer - custumersPerPage;
  const currentCustomer = customerData.slice(
    indexOfFirsCustomer,
    indexOfLastCustumer
  );

  const styles = {
    content: {
      height: "700px",
      width: "70%",
      display: "flex",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
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
                currentCustomer.map((customer, index) => {
                  return <TableCardModal customer={customer} key={index} />;
                })}
            </tbody>
          </table>
          <ReactPaginate
            containerClassName=" w-1/2 flex justify-center items-center mt-[50px] gap-[20px]"
            pageLinkClassName="text-[14px] font-semibold text-gray-500 bg-[#fff] px-[18px] py-[8px] rounded-[10px] cursor-pointer [transition:all_0.5s_ease] hover:text-[#fff] hover:bg-[#5271FF]"
            previousLinkClassName="text-[14px] font-semibold text-gray-500 bg-[#fff] px-[18px] py-[8px] rounded-[10px] cursor-pointer [transition:all_0.5s_ease] hover:text-[#fff] hover:bg-[#5271FF]"
            nextLinkClassName="text-[14px] font-semibold text-gray-500 bg-[#fff] px-[18px] py-[8px] rounded-[10px] cursor-pointer [transition:all_0.5s_ease] hover:text-[#fff] hover:bg-[#5271FF]"
            activeLinkClassName="bg-[#5271FF] hover:text-[#fff] hover:bg-[#fff] text-[#fff]"
            onPageChange={paginate}
            pageCount={Math.ceil(customerData.length) / custumersPerPage}
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