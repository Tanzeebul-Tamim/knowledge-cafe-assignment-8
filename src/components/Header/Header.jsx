import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="d-flex align-items-center justify-content-between px-4 py-2">
        <div>
          <h1 className="h2 fw-bold">Dev Diaries</h1>
        </div>
        <div className="nav d-flex align-items-center">
          <div className="d-none d-sm-block">
            <a href="/profile">Profile</a>
            <a href="/login">Login</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
          </div>
          <div>
            <img
              className="img-fluid rounded-circle"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
