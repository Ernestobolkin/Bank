import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/">Create User</Link>
      </div>
      <div>
        <Link to="/edit">Edit User</Link>
      </div>
      <div>
        <Link to="/search">Search</Link>
      </div>
      <div>
        <Link to="/manege">User Manegmant</Link>
      </div>
    </>
  );
};
