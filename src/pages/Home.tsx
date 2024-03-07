import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Table from "../components/table/Table";

export default function Home() {
  return (
    <>
      <div className=" h-screen flex flex-col">
        <div>
          <Header />
        </div>
        <div className="flex  h-full">
          <div className="h-full w-[15%] bg-gray-200">
            <Sidebar />
          </div>
          <div className="w-[85%]">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
