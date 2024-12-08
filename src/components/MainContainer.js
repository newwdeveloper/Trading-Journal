import SideBar from "./SideBar";
import InputContainer from "./InputContainer";

const MainContainer = () => {
  return (
    <div className="flex">
      <SideBar />
      <InputContainer />
    </div>
  );
};

export default MainContainer;
