import { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <>
      <div className=" h-screen flex flex-col">
        <div>
          <Header />
        </div>
        <div className="flex  h-full">
          <div className="h-full w-[15%] bg-gray-100">
            <Sidebar />
          </div>
          <div className="w-[85%]">{children}</div>
        </div>
      </div>
    </>
  );
}
