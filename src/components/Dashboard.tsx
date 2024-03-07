import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CustomerNew from "../pages/CustomerNew";
import Table from "./table/Table";

export default function Dashboard() {
  return (
    <Home>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/customer/new" element={<CustomerNew />} />
      </Routes>
    </Home>
  );
}
