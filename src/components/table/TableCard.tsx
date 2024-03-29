import { ICustomer } from "../../interfaces/ICustomer";

export default function TableCard({ customer }: { customer: ICustomer }) {
  const { name, email, phone, x, y } = customer;
  return (
    <>
      <tr className="h-1/5">
        <td className="py-2 px-4 w-1/3 h-1/5  border-b border-grey-200">
          {name}
        </td>
        <td className="py-2 px-4 w-1/3 h-1/5  border-b border-grey-200">
          {email}
        </td>
        <td className="py-2 px-4 w-1/3  h-1/5 border-b border-grey-200">
          {phone}
        </td>
        <td className="py-2 px-4 w-1/3  h-1/5 border-b border-grey-200">{x}</td>
        <td className="py-2 px-4 w-1/3  h-1/5 border-b border-grey-200">{y}</td>
      </tr>
    </>
  );
}
