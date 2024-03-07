import { ICustomer } from "../../interfaces/ICustomer";

export default function TableCard({ customer }: { customer: ICustomer }) {
  return (
    <>
      <tr className="hover:bg-grey-lighter">
        <td className="py-2 px-4 border-b border-grey-light">
          {customer.name}
        </td>
        <td className="py-2 px-4 border-b border-grey-light">
          {customer.email}
        </td>
        <td className="py-2 px-4 border-b border-grey-light">
          {customer.phone}
        </td>
      </tr>
    </>
  );
}
