import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      < Navbar/>
      <main>
        <Outlet />
      </main>
      <div className="py-5 align-items-end">
    <div className=" bg-secondary p-4 text-white h2 ">
Footer
    </div>
    </div>
    </>
  );
};

export default RootLayout;
