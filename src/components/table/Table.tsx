import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ICustomer } from "../../interfaces/ICustomer";
import { ISelectedItem } from "../../interfaces/ISelectedItem";
import { fetchCustomerData } from "../../services/api/customerData";
import TableCard from "./TableCard";

export default function Table() {
  const [customerData, setCustomerData] = useState<Array<ICustomer>>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [custumersPerPage] = useState(5);
  const indexOfLastCustumer = currentPage * custumersPerPage;
  const indexOfFirsCustomer = indexOfLastCustumer - custumersPerPage;
  const filteredCustomerData = customerData.filter((customer) => {
    const searchTerm = searchQuery.toLowerCase();
    const nameMatches = customer.name.toLowerCase().includes(searchTerm);
    const emailMatches = customer.email.toLowerCase().includes(searchTerm);
    const phoneMatches = customer.phone.toLowerCase().includes(searchTerm);
    const xMatches = customer.x.toString().includes(searchTerm);
    const yMatches = customer.y.toString().includes(searchTerm);
    return nameMatches || emailMatches || phoneMatches || xMatches || yMatches;
  });

  const currentCustomer = filteredCustomerData.slice(
    indexOfFirsCustomer,
    indexOfLastCustumer
  );

  function paginate(selectedItem: ISelectedItem) {
    const { selected } = selectedItem;
    setCurrentPage(selected + 1);
  }

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCustomerData();
      setCustomerData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white p-4 shadow rounded-lg overflow-y-auto max-h-[700px] pb-10 m-4">
        <div className="flex justify-between px-10 border-b">
          <h2 className="text-gray-500 text-lg font-semibold py-2 mb-2 ">
            Clientes
          </h2>
          <div className="relative max-w-md w-full">
            <div className="absolute top-1 left-2 inline-flex items-center p-2">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
              type="search"
              placeholder="Buscar..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <table className="w-full text-sm table-fixed min-h-[400px] ">
          <thead className=" border-b border-b-gray-200 ">
            <tr>
              <th className="font-bold uppercase text-sm py-2  ">Nome</th>
              <th className="font-bold uppercase text-sm">Email</th>
              <th className="font-bold uppercase text-sm">Telefone</th>
              <th className="font-bold uppercase text-sm">Coordenada X</th>
              <th className="font-bold uppercase text-sm">Coordenada Y</th>
            </tr>
          </thead>
          <tbody className="text-center h-full">
            {currentCustomer &&
              currentCustomer.map((customer) => {
                return <TableCard customer={customer} key={customer.id} />;
              })}
          </tbody>
        </table>
        <ReactPaginate
          containerClassName="flex justify-center items-center mt-[50px] gap-[20px]"
          pageLinkClassName="text-[14px] font-semibold text-gray-500 bg-[#fff] px-[18px] py-[8px] rounded-[10px] cursor-pointer [transition:all_0.5s_ease] hover:text-[#fff] hover:bg-[#5271FF]"
          previousLinkClassName="text-[14px] font-semibold text-gray-500 bg-[#fff] px-[18px] py-[8px] rounded-[10px] cursor-pointer [transition:all_0.5s_ease] hover:text-[#fff] hover:bg-[#5271FF]"
          nextLinkClassName="text-[14px] font-semibold text-gray-500 bg-[#fff] px-[18px] py-[8px] rounded-[10px] cursor-pointer [transition:all_0.5s_ease] hover:text-[#fff] hover:bg-[#5271FF]"
          activeLinkClassName="bg-[#5271FF] hover:text-[#fff] hover:bg-[#fff] text-[#fff]"
          onPageChange={paginate}
          pageCount={Math.ceil(filteredCustomerData.length) / custumersPerPage}
        />
      </div>
    </>
  );
}
