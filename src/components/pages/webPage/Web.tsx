import React from "react";
import { Header } from "../../header/index.ts";
import { Footer } from "../../footer/index.ts";
import "./web.scss";
import AppDesign from "../../reusable/app/AppDesign.tsx";
import GraphicDesign from "../../reusable/graphic/GraphicDesign.tsx";
import "../../../";
import Intro from "../../reusable/intro/Intro.tsx";
const Web = () => {
  return (
    <div className="webContainer">
      <Header />
      <main>
        <Intro
          title="Web Design"
          description="            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences."
        />
        <div className="designs">
          <div className="item">
            <img
              src="../../assets/web-design/desktop/image-express.jpg"
              alt=""
            ></img>
            <div>
              <h3>EXPRESS</h3>
              <p>A multi-carrier shipping website for ecommerce businesses</p>
            </div>
          </div>
          <div className="item">
            <img
              src="../../assets/web-design/desktop/image-transfer.jpg"
              alt=""
            ></img>
            <div>
              <h3>TRANSFER</h3>
              <p>
                Site for low-cost money transfers and sending money within
                seconds
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src="../../assets/web-design/desktop/image-photon.jpg"
              alt=""
            ></img>
            <div>
              <h3>PHOTON</h3>
              <p>
                A state-of-the-art music player with high-resolution audio and
                DSP effects
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src="../../assets/web-design/desktop/image-builder.jpg"
              alt=""
            ></img>
            <div>
              <h3>BUILDER</h3>
              <p>
                Connects users with local contractors based on their location
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src="../../assets/web-design/desktop/image-blogr.jpg"
              alt=""
            ></img>
            <div>
              <h3>BLOGR</h3>
              <p>
                Blogr is a platform for creating an online blog or publication
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src="../../assets/web-design/desktop/image-camp.jpg"
              alt=""
            ></img>
            <div>
              <h3>CAMP</h3>
              <p>
                Get expert training in coding, data, design, and digital
                marketing
              </p>
            </div>
          </div>
        </div>
        <div className="otherDesign">
          <div>
            <AppDesign />
          </div>
          <div>
            <GraphicDesign />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Web;
