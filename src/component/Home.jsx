import React, { useState } from "react";
import { Link } from "react-router-dom";
import IMGS from "../Assets/images/vision.png";
import Imgss from "../Assets/images/smallleaf.webp";
import "../style/home.css";
import Footer from "./Footer";
function Home() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
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
            : "navbar navbar-expand-lg navbar-light   fixed-top"
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
            {" "}
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link inphone active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link inphone active"
                  aria-current="page"
                  to="/"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link inphone active"
                  aria-current="page"
                  to="/"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className=" phone_mode_iconss d-flex">
              <li class="nav-item ">
                <Link class="nav-link icon_navbar" to="/Login">
                  <i class="fa-brands fa-facebook  nav_itemss"></i>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link icon_navbar" to="/Cart">
                  <i class="fa-brands fa-linkedin  nav_itemss"></i>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link icon_navbar" to="/Search">
                  <i class="fa-brands fa-instagram  nav_itemss"></i>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>

      <section className="main">
        <div className="container py-5 ">
          <div className="row py-4">
            <div className="col-md-7 pt-5 text-center">
              <h1 className="pt-5 headtest animate__animated animate__bounce  animate__backInLeft  animate__delay-1s">
                "Welcome to the world of wholesome and nutritious breakfasts! At
                Unico Food , we believe that the key to a great day starts with
                a nutritious and delicious breakfast. That's why we're proud to
                offer a wide variety of millet-based breakfast options that are
                sure to please even the most discerning palate.
              </h1>
              <button className="btns mt-3  animate__animated  animate__flash">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="new">
        <div className="container mx-auto">
          <img
            src={IMGS}
            className="img-fluid mx-auto d-block "
            style={{ width: "200px" }}
            alt=""
          />
        </div>
      </section>

      <section className="vision my-3">
        <div className="container">
          <div className="container text-center">
            <h1>Our Vision</h1>
            <img src="" alt="" />
          </div>
          <div className="row">
            <div className="col-md-12  ">
              <p className=" text-center">
                "Welcome to the world of wholesome and nutritious breakfasts! At
                [Website Name], we believe that the key to a great day starts
                with a nutritious and delicious breakfast. That's why we're
                proud to offer a wide variety of millet-based breakfast options
                that are sure to please even the most discerning palate. Millet,
                a highly nutritious grain, is packed with antioxidants, protein,
                and fiber, making it the perfect base for a healthy breakfast.
                Whether you're looking for a hearty bowl of hot cereal, a
                crunchy muesli, or a tasty granola, we have the perfect
                millet-based breakfast option for you. Our products are made
                with the highest quality ingredients and are free from
                artificial preservatives and additives, so you can feel good
                about what you're eating. And with a wide variety of delicious
                flavors to choose from, you're sure to find a breakfast option
                that you'll love. So why wait? Start your day off right with a
                nutritious and delicious millet-based breakfast from [Website
                Name]. Browse our selection today and taste the difference for
                yourself!"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about my-4">
        <div className="container text-center">
          <h1>About</h1>
          <img src={Imgss} className="mx-auto img_about" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src="" alt="" />
            </div>
            <div className="col-6 my-4">
              Although millets have been consumed by humans for about 7,000
              years, little has been known about them. In today’s world, where
              there are abundant amounts of fast-food chains serving foods
              on-the-go, and with the humans being very busy working and living
              stressful lives, the old tradition of eating millets has vanished.
              Although it is very true that the same people have started
              becoming more health-conscious, thanks to their prudence
            </div>
          </div>
        </div>
      </section>

      <section className="contact my-5">
        <div className="container text-center">
          <h1>Contact</h1>
          <img src="" alt="" />
        </div>
        <div className="container ">
          <div className="row">
            <div className="img col-6">
              <img src="" alt="" />
            </div>
            <div className="col-6 ">
              <form action="">
                <div className="form-group my-2">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                  <div className="form-group my-2">
                    <label for="exampleInputPassword1">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    />

                    <div className="form-group my-2">
                      <label for="exampleFormControlTextarea1">
                        Type Your Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>

                      <div className="form-group form-check">
                        <button type="submit" className="btn btn-primary my-3">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Home;
