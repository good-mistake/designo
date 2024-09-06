import React from "react";
import { Header } from "../../header/index.ts";
import { Footer } from "../../footer/index.ts";
import AppDesign from "../../reusable/app/AppDesign.tsx";
import WebDesing from "../../reusable/web/WebDesing.tsx";
import "./graphicDesignPage.scss";
import Intro from "../../reusable/intro/Intro.tsx";

const GraphicDesignPage = () => {
  return (
    <div className="graphicDesignContainer">
      <Header />
      <main>
        <Intro
          title="Graphic Design"
          description="            We deliver eye-catching branding materials that are tailored to meet
            your business objectives."
        />

        <div className="graphicGridDesign">
          <div className="item">
            <img
              src="../../assets/graphic-design/desktop/image-change.jpg"
              alt=""
            />
            <div>
              <h3>TIM BROWN</h3>
              <p>
                A book cover designed for Tim Brown’s new release, ‘Change’{" "}
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src="../../assets/graphic-design/desktop/image-boxed-water.jpg"
              alt=""
            />
            <div>
              <h3>BOXED WATER</h3>
              <p>A simple packaging concept made for Boxed Water </p>
            </div>
          </div>
          <div className="item">
            <img
              src="../../assets/graphic-design/desktop/image-science.jpg"
              alt=""
            />
            <div>
              {" "}
              <h3>SCIENCE!</h3>
              <p>A poster made in collaboration with the Federal Art Project</p>
            </div>
          </div>
        </div>
        <div className="otherDesign">
          <div>
            <AppDesign />
          </div>
          <div>
            <WebDesing />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GraphicDesignPage;
