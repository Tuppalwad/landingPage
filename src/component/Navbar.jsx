import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      document.getElementsByClassName("nav-link").style.color =
        "blue ! important";
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav
        class={
          navbar
            ? "navbar navbar-expand-lg navbar-light bg-dark fixed-top"
            : "navbar navbar-expand-lg navbar-light  fixed-top"
        }
      >
        <div class="container">
          <Link class="navbar-brand" to="/">
            Unico Food
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto  mb-2 mb-lg-0">
              <li class="nav-item px-4">
                <Link class="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link class="nav-link fs-5" to="/">
                  About
                </Link>
              </li>
              <li class="nav-item px-4">
                <Link class="nav-link fs-5" to="/">
                  Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
