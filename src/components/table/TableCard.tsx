import { ICustomer } from "../../interfaces/ICustomer";

export default function TableCard({ customer }: { customer: ICustomer }) {
  return (
    <>
      <tr className="h-1/5">
        <td className="py-2 px-4 w-1/3 h-1/5  border-b border-grey-200">
          {customer.name}
        </td>
        <td className="py-2 px-4 w-1/3 h-1/5  border-b border-grey-200">
          {customer.email}
        </td>
        <td className="py-2 px-4 w-1/3  h-1/5 border-b border-grey-200">
          {customer.phone}
        </td>
      </tr>
    </>
  );
}
