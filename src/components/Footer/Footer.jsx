import { AuthContext } from "@/context/AuthProvider";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer
      className="footer sm:footer-horizontal footer-center
     bg-slate-900 text-white p-10"
    >
      <nav className="grid grid-flow-col gap-4">
        <Link to={"/"} className="link link-hover">
          Home
        </Link>
        {!user && (
          <>
            <Link to={"/auth/login"} className="link link-hover">
              Sign In
            </Link>
            <Link to={"/auth/signup"} className="link link-hover">
              Sing Up
            </Link>
          </>
        )}

        <Link to="/products" className="link link-hover">
          Tech Product
        </Link>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right Product Hunt</p>
        <span className="text-blue-500 hover:underline underline-offset-2 ">
          <a target="_blank" href="https://www.mdranju.xyz">
            <small className="text-white">Developed by:</small> OK, Cherniak
          </a>
        </span>
      </aside>
    </footer>
  );
};

export default Footer;
