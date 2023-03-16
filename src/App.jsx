import React, { useEffect, useState } from "react";

// COMPONENTS
import Navbar from "./components/Navbar";

import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { GoArrowUp } from "react-icons/go";

function App() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document.querySelector(".navigate-top").style.opacity = 1;
        setBackToTopButton(true);
      } else {
        document.querySelector(".navigate-top").style.opacity = 0;
        setBackToTopButton(false);
      }
    });
  }, [backToTopButton]);

  const SCROLL_UP = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <div className="index-container">
        <section>
          <div className="row">
            <div className="col-md-6">
              <h1>Bringing joy to you</h1>
              <h2 className="my-3">
                Have your Jollibee favorites delivered right to your doorstep!
              </h2>
              <div className="mt-4">
                <a href="#" className="btn-order">
                  <span>Order Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row gy-3">
            <div className="col-md-4">
              <img
                src="https://queen.jollibee.com.ph/2021/12/order_pickup-150x150.png"
                alt="..."
                className="img-fluid"
              />
              <h1>Order & Pick Up</h1>
            </div>
            <div className="col-md-4">
              <img
                src="https://queen.jollibee.com.ph/2021/12/download_app-150x150.png"
                alt="..."
                className="img-fluid"
              />
              <h1>Download the App</h1>
            </div>
            <div className="col-md-4">
              <img
                src="https://queen.jollibee.com.ph/2021/12/8700-150x150.png"
                alt="..."
                className="img-fluid"
              />
              <h1>#87000</h1>
            </div>
          </div>
        </section>
        <section>
          <div className="row gy-3">
            <h1 className="my-5">Exclusive Promos</h1>
            <div className="col-md-4">
              <img
                src="https://queen.jollibee.com.ph/2023/02/FA-JBPH-P-MALAYSIA-DIGIPOST-min-819x1024.jpg"
                alt="..."
                width="325px"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://queen.jollibee.com.ph/2023/01/REV01_JBPH_P.MALAYSIA-2_NEW-USERS-KV-min-819x1024.jpg"
                alt="..."
                width="325px"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <img
                src="https://queen.jollibee.com.ph/2023/02/JBPH-SYNDEY-DIGIPOST_FA-min-819x1024.jpg"
                alt="..."
                width="325px"
                className="img-fluid"
              />
            </div>
            <a href="#" className="btn-see-all-promos my-5">
              <span>See All Promos</span>
            </a>
          </div>
        </section>
        <section>
          <div className="row gy-3">
            <h1>Featured Menu Items</h1>
            <div className="col-md-3">
              <h1>Chickenjoy Bucket</h1>
              <p>Philippines’ best-tasting crispylicious, juicylicious.</p>
              <img
                src="https://queen.jollibee.com.ph/2021/12/chickenjoy.png"
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="col-md-3">
              <h1>Spaghetti Pan</h1>
              <p>The meatiest, cheesiest, and sweet-sarap Jolly Spaghetti!</p>
              <img
                src="https://queen.jollibee.com.ph/2022/02/CSyirkKq-Jolly-Spaghetti-Pan_750x750-v4-300x207.png"
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="col-md-3">
              <h1>Yumburger</h1>
              <p>Your favorite 100% Beefy Langhap-Sarap Burgers.</p>
              <img
                src="https://queen.jollibee.com.ph/2021/12/burger.png"
                alt="..."
                className="img-fluid"
              />
            </div>
            <div className="col-md-3">
              <h1>Burger Steak</h1>
              <p>
                100% pure beef patty with a hearty serving of flavorful mushroom
                gravy.
              </p>
              <img
                src="https://queen.jollibee.com.ph/2022/02/LnnuI5ic-1pc-bsteak-300x174.png"
                alt="..."
                className="img-fluid"
              />
            </div>
            <a href="#" className="btn-view-menu my-5">
              <span>View Menu</span>
            </a>
          </div>
        </section>
        <section className="mt-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://queen.jollibee.com.ph/2022/05/what_we_stand_for.webp"
                alt="..."
                className="img-fluid"
              />
              <div className="overlay"></div>
              <div className="content">
                <h1>What We Do</h1>
                <p>
                  Jollibee's Mission is to serve great-tasting food, bringing
                  the joy of eating to everyone.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://queen.jollibee.com.ph/2021/12/what_we_do.png"
                alt="..."
                className="img-fluid"
              />
              <div className="overlay"></div>
              <div className="content">
                <h1>What We Stand For</h1>
                <p>
                  Jollibee is a family-centric brand that promotes family values
                  and togetherness and espouses Filipino pride.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer class="text-center text-lg-start bg-white text-muted mt-5">
          <section class="">
            <div class="container text-center text-md-start">
              <div className="row">
                <div className="col-md-6" style={{ marginTop: 0 }}>
                  <a href="">
                    <img
                      src="https://queen.jollibee.com.ph/2022/02/jollibee-logo-footer-2x.png"
                      alt="..."
                      width="273px"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-2">
                  <h6
                    class="text-uppercase fw-bold mb-4"
                    style={{ color: "#212529" }}
                  >
                    Follow Us
                  </h6>
                  <div>
                    <a href="#" class="me-2 soc-icon">
                      <GrFacebookOption className="icon" />
                    </a>
                    <a href="#" class="me-2 soc-icon">
                      <GrInstagram className="icon" />
                    </a>
                    <a href="#" class="me-2 soc-icon">
                      <GrTwitter className="icon" />
                    </a>
                    <a href="#" class="me-2 soc-icon">
                      <BsWhatsapp className="icon" />
                    </a>
                  </div>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mb-4">
                  <ul className="footer-nav">
                    <h6 class="text-uppercase fw-bold mb-4">How To Order</h6>
                    <li>
                      <a href="">View Menu</a>
                    </li>
                    <li>
                      <a href="">Delivery</a>
                    </li>
                    <li>
                      <a href="">Multi-Delivery</a>
                    </li>
                    <li>
                      <a href="">Locations</a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mb-4">
                  <ul className="footer-nav">
                    <h6 class="text-uppercase fw-bold mb-4">Promotions</h6>
                    <li>
                      <a href="">Promos</a>
                    </li>
                    <li>
                      <a href="">Gift Cards</a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mb-4">
                  <ul className="footer-nav">
                    <h6 class="text-uppercase fw-bold mb-4">About Us</h6>
                    <li>
                      <a href="">About Jollibee</a>
                    </li>
                    <li>
                      <a href="">Safety</a>
                    </li>
                    <li>
                      <a href="">Investors</a>
                    </li>
                    <li>
                      <a href="">Franchising</a>
                    </li>
                    <li>
                      <a href="">Careers</a>
                    </li>
                    <li>
                      <a href="">Jollibee Group Foundation</a>
                    </li>
                    <li>
                      <a href="">Contact Us</a>
                    </li>
                    <li>
                      <a href="">Rate Our Stores</a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mb-4">
                  <ul className="footer-nav">
                    <h6 class="text-uppercase fw-bold mb-4">
                      About Our Website
                    </h6>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="">Accessibility</a>
                    </li>
                    <li>
                      <a href="">Sitemap</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-2">
                  <ul className="app-download">
                    <li className="mb-5">
                      <a href="#" className="footer-order">
                        <span>Order Now</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="https://queen.jollibee.com.ph/2022/01/Google-Play-Badge.png"
                          alt="..."
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="https://queen.jollibee.com.ph/2022/01/Apple-Store-Badge.png"
                          alt="..."
                          className="img-fluid"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center p-4 float-start">ybon.dev</div>
            </div>
          </section>
        </footer>
        <div className="navigate-top">
          <button>
            <GoArrowUp className="icon-arrow" onClick={SCROLL_UP} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
