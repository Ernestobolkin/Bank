import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  const onHandleClick = (e) => {
    const items = Array.from(e.parentElement.children);
    items.map((item) => {
      return item.classList.remove("active");
    });
    e.classList.add("active");
  };

  return (
    <div className="ui six item menu">
      <Link
        onClick={(e) => onHandleClick(e.target)}
        name="create"
        className="item"
        to="/"
      >
        Create User
      </Link>
      <Link
        onClick={(e) => onHandleClick(e.target)}
        name="edit"
        className="item"
        to="/edit"
      >
        Edit User
      </Link>
      <Link
        onClick={(e) => onHandleClick(e.target)}
        name="search"
        className="item"
        to="/search"
      >
        Search
      </Link>
      <Link
        onClick={(e) => onHandleClick(e.target)}
        name="manege"
        className="item"
        to="/manege"
      >
        User Manegmant
      </Link>
      <Link
        onClick={(e) => onHandleClick(e.target)}
        name="transfer"
        className="item"
        to="/transfer"
      >
        Transfer To User
      </Link>
      <Link
        onClick={(e) => onHandleClick(e.target)}
        name="withdraw"
        className="item"
        to="/withdraw"
      >
        Withdraw
      </Link>
    </div>
  );
};
