import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <div>
      <Wrapper>
        <div className="nav-center">
          <span className="logo">MixMaster</span>
          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/newsletter" className="nav-link">
              newsletter
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
