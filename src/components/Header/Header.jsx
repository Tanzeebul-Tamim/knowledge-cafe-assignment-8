import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header p-lg-3 pt-lg-4">
      <div className="d-flex align-items-center justify-content-between px-5 py-2">
        <div>
          <h1 className="h2 fw-bold title">Dev Diaries</h1>
        </div>
        <div className="nav d-flex align-items-center">
          <div className="d-none d-sm-block fw-lighter">
            <a className="h5" href="/profile">Profile</a>
            <a className="h5" href="/about">About</a>
            <a className="h5" href="/contact">Contact</a>
            <a className="h5" href="/logout">Logout</a>
          </div>
          <div>
            <img
              className="rounded-circle"
              src="https://square-vn.com/app/dscms/assets/images/person-1.jpg?v=1653932875"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
