import logo from "../assets/logo.svg";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" style={{ width: "400px", height: "auto" }} />
      <Outlet></Outlet>
    </div>
  );
};

export default Header;
