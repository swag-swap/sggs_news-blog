import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar"  style={{backgroundColor: "#b9e7e7"}}>
      <div className="container">
        <div className="logo"  >
          <Link to="/">
          <img src={Logo} alt=""   />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>PRAGYAA</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>UTSAV</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>CODECHEF CHAPTER</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>SIC</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>NEWS</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>MEMORIES</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
