import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContainer;
