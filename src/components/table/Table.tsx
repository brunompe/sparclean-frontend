import { useEffect, useState } from "react";
import { fetchCustomerData } from "../../services/api/customerData";
import TableCard from "./TableCard";
import { ICustomer } from "../../interfaces/ICustomer";

export default function Table() {
  const [customerData, setCustomerData] = useState<Array<ICustomer>>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCustomerData();
      setCustomerData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white p-4 shadow rounded-lg overflow-y-auto max-h-[700px]">
        <h2 className="text-gray-500 text-lg font-semibold py-2 mb-2 border-b">
          Clientes
        </h2>
        <table className="w-full text-sm">
          <thead className=" border-b border-gray-200 ">
            <tr>
              <th className="font-bold uppercase text-sm py-2  ">Nome</th>
              <th className="font-bold uppercase text-sm">Email</th>
              <th className="font-bold uppercase text-sm">Telefone</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {customerData &&
              customerData.map((customer) => {
                return <TableCard customer={customer} key={customer.id} />;
              })}
          </tbody>
        </table>
        {/* <!-- Botón "Ver más" para la tabla de Autorizaciones Pendientes --> */}
        <div className="text-right mt-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
            Ver más
          </button>
        </div>
      </div>
    </>
  );
}
