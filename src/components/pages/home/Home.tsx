import React from "react";
import { Header } from "../../header/index.ts";
import { Footer } from "../../footer/index.ts";
import { Button } from "../../reusable/button/index.ts";
import { HomeProps } from "./Home.types";
import { Link } from "react-router-dom";

import "./home.scss";
import WebDesing from "../../reusable/web/WebDesing.tsx";
import GraphicDesign from "../../reusable/graphic/GraphicDesign.tsx";
import AppDesign from "../../reusable/app/AppDesign.tsx";
const Home: React.FC<HomeProps> = () => {
  return (
    <div className="homeContainer">
      <Header />

      <section className="sectionOne">
        <div className="content">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button variant="dark">Learn More</Button>
        </div>

        <img
          src="../../assets/home/desktop/bg-pattern-hero-home.svg"
          alt="Logo"
          className="pattern"
        />
        <img
          src="../../assets/home/desktop/image-hero-phone.png"
          alt="phonePic"
          className="phonePic"
        />
      </section>
      <section className="sectionTwo">
        <div>
          <WebDesing />
        </div>
        <div>
          <AppDesign />
          <GraphicDesign />
        </div>
      </section>
      <section className="sectionThree">
        <div>
          <img
            src="../../assets/home/desktop/illustration-passionate.svg"
            alt=""
            className="passionate"
          />
          <div>
            <h3>PASSIONATE</h3>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div>
          <img
            src="../../assets/home/desktop/illustration-resourceful.svg"
            alt=""
            className="resourceful"
          />
          <div>
            <h3>RESOURCEFUL</h3>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div>
          <img
            src="../../assets/home/desktop/illustration-friendly.svg"
            alt=""
            className="friendly"
          />
          <div>
            <h3>FRIENDLY</h3>
            <p>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
