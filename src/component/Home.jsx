/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import IMGS from "../Assets/images/vision.png";
import Imgss from "../Assets/images/smallleaf.webp";
import "../style/home.css";
import IMG2 from "../Assets/images/bg11.PNG";
import IMG1 from "../Assets/images/bg111.png";
import FImg from "../Assets/images/millets.png";
// import FImg1 from "../Assets/images/ffff.png";
function Home() {
  const commentsection = useRef(null);
  const gotocommentsection = () => {
    window.scrollTo({
      top: commentsection.current.offsetTop,
      behavior: "smooth",
    });
  };
  const homet = useRef(null);
  const gotohome = () => {
    window.scrollTo({
      top: homet.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scontactsection = useRef(null);
  const gotoscontactsection = () => {
    window.scrollTo({
      top: scontactsection.current.offsetTop,
      behavior: "smooth",
    });
  };

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
      <div className="mains">
        <nav
          className={
            navbar
              ? "navbar navbar-expand-lg  bg-light fixed-top "
              : "navbar navbar-expand-lg    fixed-top margintop"
          }
        >
          <div className="container">
            <Link
              className="navbar-brand logo"
              ref={homet}
              to="/"
              onClick={gotohome}
            >
              UNICO FOODS
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <i className="fa-solid fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link inphone active"
                    aria-current="page"
                    to="/"
                    onClick={gotohome}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link inphone active"
                    aria-current="page"
                    to="/"
                    onClick={gotocommentsection}
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link inphone active"
                    aria-current="page"
                    to="/"
                    onClick={gotoscontactsection}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className=" phone_mode_iconss d-flex">
                <li className="nav-item ">
                  <a
                    className="nav-link icon_navbar topIcon"
                    href="https://www.facebook.com/people/UNICO-FOODS/100087934491728/?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands   fa-facebook  nav_itemss"> </i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link icon_navbar topIcon"
                    href="https://www.instagram.com/invites/contact/?i=1wy4i12zjvrfa&utm_content=psi6h2r"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands  fa-instagram   nav_itemss"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link icon_navbar topIcon"
                    href="https://www.linkedin.com/company/unico-foods/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands  fa-linkedin nav_itemss"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link icon_navbar topIcon"
                    href="https://twitter.com/unico_foods"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands  fa-twitter nav_itemss"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link icon_navbar topIcon"
                    href="https://api.whatsapp.com/send?phone=919900001845&text=Hey%20BlissClub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      class="fab  topIcons fa-whatsapp   "
                      style={{ fontSize: "22px" }}
                    ></i>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </nav>
        {/* section for vision hear start  */}

        <div className="  ">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner homedata">
              <div class="carousel-item active ">
                <img src={IMG1} class="d-block w-100 hompage" alt="..." />
              </div>

              <div class="carousel-item">
                <img src={IMG2} class=" d-block w-100 hompage" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* logo img  */}

      <section className="new">
        <div className="container mx-auto">
          <img
            src={IMGS}
            className="img-fluid mx-auto d-block "
            style={{ width: "200px" }}
            alt=""
            ref={commentsection}
          />
        </div>
      </section>

      <section className="vision my-3">
        <div className="container">
          <div className="container text-center">
            <h1 style={{ fontFamily: "league spartan", fontSize: "bold" }}>
              Our Vision
            </h1>
            <img src="" alt="" />
          </div>
          <div className="row">
            <div className="col-md-12  ">
              <p className=" text-center">
                Unico foods innovation will not only promote healthy food choice
                but it will also help Indian farmers in diversifying their crop
                practices which will boost their income. We @ Unico foods
                believe in the co-existence of profitability and sustainability.
                So we have come up with a range of products available to all
                from kids to the elderly ones we leave no one behind and our
                number one objective is to meet the upcoming demand of the
                present world. Our products have undergone rigorous trials and
                are clinically tested and contamination free. We do ensure that
                the quality of the product is not degraded and is maintained
                throughout the product life cycle. We are here to provide best
                fit ready to cook/eat product good for diabetics, obesed ones,
                gym lovers, health freaks, kids and youngies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about my-4 ">
        <div className="container-fluid text-center">
          <h1>About Millet</h1>
          <img src={Imgss} className="mx-auto img_about p-2" alt="" />
        </div>
        <div className="container ">
          <div className="row ">
            <div className="col-6 ">
              <img
                src={FImg}
                class="d-block w-100 bg-black"
                style={{ marginTop: "-50px" }}
                alt="..."
              />
            </div>
            <div className="col-lg-6 my-5 " style={{ marginTop: "100px" }}>
              Millet, a highly nutritious grain, is packed with antioxidants,
              protein, and fiber, making it the perfect base for a healthy
              breakfast. Whether you're looking for a hearty bowl of hot cereal,
              a crunchy muesli, or a tasty granola, we have the perfect
              millet-based breakfast option for you. Millets unlike the other
              cereal grains are known as Nutri-cereals as they are loaded with
              bulk of nutrients and dietary fibres essential for proper body
              functioning. Millets are classified into major and minor based on
              their grain size. Millets have low glycemic index and are
              naturally gluten free. Their production requires less water and
              low maintenance and are also resilient to drought. As the climate
              change and water scarcity problems are arising all across the
              globe, UNICO FOODS sole focus is to promote millet based products
              as a healthy and nutritious food choice to all. We have always
              believed in mindful eating of pure and natural products which
              balances the diet
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="product my-5">
        <div className="container text-center">
          <h1>Our Products</h1>
        </div>

        <div className="container">
          <div className="row">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner " style={{ height: "600px" }}>
                <div class="carousel-item active">
                  <img
                    src={FImg1}
                    class="d-block w-100"
                    style={{ width: "200px", height: "400px" }}
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={FImg1}
                    class="d-block w-100"
                    style={{ width: "200px", height: "400px" }}
                    alt="..."
                  />
                </div>

                <div class="carousel-item">
                  <img
                    src={FImg1}
                    class="d-block w-100"
                    style={{ width: "200px", height: "400px" }}
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section> */}
      <section className="contact my-5">
        <div className="container my-3 text-center">
          <h1 className="" ref={scontactsection}>
            Contact Us
          </h1>
        </div>
        <div className="container my-4 ">
          <div className="row justify-content-between">
            <div className="location my-3  col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7337.0514242449235!2d79.94418862345275!3d23.15100533955253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981add8e2210789%3A0x20145806faa4c93f!2sSadar%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482001!5e0!3m2!1sen!2sin!4v1675790474049!5m2!1sen!2sin"
                className="h-100 w-100"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-lg-5   ">
              <form action="https://formspree.io/f/moqzejpl" method="post">
                <div className="form-group my-2">
                  <div className="row">
                    <h5>Message Us</h5>
                    <div className="col-6 ">
                      <input
                        type="text"
                        className="form-control my-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="First Name"
                        name="FirstName"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control my-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Last Name"
                        name="LastName"
                      />
                    </div>
                  </div>

                  <div className="form-group my-2">
                    <div className="row">
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control my-2"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                      <div className="col-6">
                        <input
                          type="number"
                          className="form-control my-2"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Phone Number"
                          name="number"
                        />
                      </div>
                    </div>

                    <div className="form-group my-2">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Message"
                        name="message"
                      ></textarea>

                      <div className="form-group form-check">
                        <button
                          type="submit"
                          className="btn btn-danger my-3"
                          style={{ marginLeft: "-25px" }}
                        >
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

      <section className="container-fluid footer">
        <div className=" my-5 footer_data">
          <footer
            className=" text-center myfooter text-lg-start text-white"
            style={{
              backgroundColor: "#1c2331",
            }}
          >
            <section className="container-fluid">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto ">
                  <h6 className="text-uppercase mb-4 my-5 font-weight-bold">
                    <Link
                      onClick={gotohome}
                      to="/"
                      style={{ color: "white", marginTop: "10px" }}
                    >
                      UNICO FOODS
                    </Link>
                  </h6>
                  <p style={{ color: "#fff" }}>
                    Welcome to the world of wholesome and nutritious breakfasts!
                    At UNICO FOODS, we believe that the key to a great day
                    starts with a nutritious and delicious breakfast. That's why
                    we're proud to offer a wide variety of millet-based
                    breakfast options that are sure to please even the most
                    discerning palate.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto  mt-2">
                  <h6 className="text-uppercase mb-4 my-5 font-weight-bold">
                    Link
                  </h6>

                  <p>
                    <Link className="text-white" to="/" onClick={gotohome}>
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="text-white"
                      to="/"
                      onClick={gotocommentsection}
                    >
                      About
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="text-white"
                      to="/"
                      onClick={gotoscontactsection}
                    >
                      Contact
                    </Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">
                  <h6 className="text-uppercase my-5  mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <a className="text-white" href="/">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a className="text-white" href="/">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a className="text-white" href="/">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a className="text-white" href="/">
                      Help
                    </a>
                  </p>
                  <p>
                    <a className="text-white" href="/">
                      Become our investres
                    </a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-5">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>

                  <p>
                    <i className="fas fa-home mr-3"></i> Unit no 224 AB lane 8
                    Sadar cantt Jabalpur 482001
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i>{" "}
                    Connect@unicofoods.in
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +91 89896 35388
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +91 96695 59988
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row ">
                <div className=" col-lg-6  text-center text-md-start">
                  <p>@ 2023 UNICO FOODS.</p>
                </div>
                <div className="col-lg-6 phonemodedata  d-flex">
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.facebook.com/people/UNICO-FOODS/100087934491728/?mibextid=LQQJ4d"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-facebook  nav_itemss"> </i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      href="https://www.instagram.com/invites/contact/?i=1wy4i12zjvrfa&utm_content=psi6h2r"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-instagram   nav_itemss"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link "
                      href="https://www.linkedin.com/company/unico-foods/?viewAsMember=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin nav_itemss"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      href="https://twitter.com/unico_foods"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-twitter nav_itemss"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link "
                      href="https://api.whatsapp.com/send?phone=919900001845&text=Hey%20BlissClub"
                      class="btn-whatsapp-pulse"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        class="fab fa-whatsapp "
                        style={{ color: "white", fontSize: "20px" }}
                      ></i>
                    </a>
                  </li>
                </div>
              </div>
            </section>
          </footer>
        </div>
      </section>
    </>
  );
}

export default Home;
