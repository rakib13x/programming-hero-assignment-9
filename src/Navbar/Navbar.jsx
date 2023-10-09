import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

import { BiLogOutCircle } from "react-icons/bi";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        const { email, displayName } = user;
        console.log(email, displayName);
      }, 1000);
      setUserName(user.displayName || "");
      setIsLoading(false);
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user Logged Out");
      })
      .catch((error) => console.log(error));
  };
  const navBar = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/my-booking">My Booking</NavLink>
      </li>
      <li>
        <NavLink to="/review">Give Review</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-neutral text-white text-xl lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl text-black font-bold">
            Eventy
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4">{navBar}</ul>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="">
          {user ? (
            <>
              <span className="flex flex-col pr-6">
                <p className="text-sm text-black">{user.email}</p>{" "}
                <p className="font-bold text-black">{userName}</p>{" "}
              </span>
            </>
          ) : (
            <Link to="/register">
              <div className="flex">
                <button className="btn  btn-neutral text-white">
                  register
                  <BiLogOutCircle className="text-2xl text-white" />
                </button>
              </div>
            </Link>
          )}
        </div>
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user ? user.photoURL : ""} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[100] p-2 shadow menu menu-sm dropdown-content bg-gray-900 rounded-box w-52 text-white text-2xl"
            >
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
