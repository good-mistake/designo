import React from "react";
import { Button } from "../../components/reusable/button/index.ts";
import { FooterProps } from "./Footer.types";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <section className="top">
        <div>
          <h2>Let’s talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Link to="/contact">
          <Button variant="dark">Get in touch</Button>
        </Link>
      </section>
      <div>
        <div className="mid">
          <Link to="/">
            <img src="../../assets/shared/desktop/logo-light.png" alt="" />
          </Link>
          <ul>
            <li>
              <Link to="/our-company">Our Company</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="bot">
          <div className="address">
            <p>
              Designo Central Office
              <span>3886 Wellington Street</span>
              <span>Toronto, Ontario M9C 3J5</span>
            </p>
            <p className="contact">
              Contact Us (Central Office) <span>P : +1 253-863-8967</span>
              <span>M : contact@designo.co</span>
            </p>
          </div>
          <div className="icons">
            <img
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="facebook"
            />
            <img src="/assets/shared/desktop/icon-youtube.svg" alt="youtube" />
            <img
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="twitter"
              className="twitterIcon"
            />
            <img
              src="/assets/shared/desktop/icon-pinterest.svg"
              alt="pinterest"
            />
            <img
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
