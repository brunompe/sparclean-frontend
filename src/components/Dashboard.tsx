import { Route, Routes } from "react-router-dom";
import CustomerNew from "../pages/CustomerNew";
import Home from "../pages/Home";
import Table from "./table/Table";

export default function Dashboard() {
  return (
    <Home>
      <Routes>
        <Route path="/home" element={<Table />} />
        <Route path="/customer/new" element={<CustomerNew />} />
      </Routes>
    </Home>
  );
}
