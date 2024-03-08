import { ICustomer } from "../../interfaces/ICustomer";

export default function TableCardModal({ customer }: { customer: ICustomer }) {
  const { name, email, phone, distanceToOrigin, position } = customer;

  return (
    <>
      <tr className="h-1/5">
        <td className="py-2 px-4 w-1/3 h-1/5  border-b border-grey-200">
          {position}
        </td>
        <td className="py-2 px-4 w-1/3 h-1/5  border-b border-grey-200">
          {name}
        </td>
        <td className="py-2 px-4 w-1/3 h-1/5  border-b border-grey-200">
          {email}
        </td>
        <td className="py-2 px-4 w-1/3  h-1/5 border-b border-grey-200">
          {phone}
        </td>
        <td className="py-2 px-4 w-1/3  h-1/5 border-b border-grey-200">
          {distanceToOrigin.toFixed(2)}
        </td>
      </tr>
    </>
  );
}
