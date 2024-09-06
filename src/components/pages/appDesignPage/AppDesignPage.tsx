import React from "react";
import { Header } from "../../header/index.ts";
import { Footer } from "../../footer/index.ts";
import "./appDesignPage.scss";
import GraphicDesign from "../../reusable/graphic/GraphicDesign.tsx";
import WebDesing from "../../reusable/web/WebDesing.tsx";
import Intro from "../../reusable/intro/Intro.tsx";

const AppDesignPage = () => {
  return (
    <div className="appDesignContainer">
      <Header />
      <main>
        <Intro
          title="App Design"
          description="Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips."
        />
        <div className="appGridDesign">
          <div className="item">
            <img
              src="../../assets/app-design/desktop/image-airfilter.jpg"
              alt=""
            />
            <div>
              {" "}
              <h3>AIRFILTER</h3>
              <p>
                Solving the problem of poor indoor air quality by filtering the
                air
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src="../../assets/app-design/desktop/image-eyecam.jpg"
              alt=""
            />
            <div>
              {" "}
              <h3>EYECAM</h3>
              <p>
                Product that lets you edit your favorite photos and videos at
                any time
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src="../../assets/app-design/desktop/image-faceit.jpg"
              alt=""
            />
            <div>
              {" "}
              <h3>FACEIT</h3>
              <p>
                Get to meet your favorite internet superstar with the faceit app
              </p>
            </div>
          </div>
          <div className="item">
            <img src="../../assets/app-design/desktop/image-todo.jpg" alt="" />
            <div>
              {" "}
              <h3>TODO</h3>
              <p>
                A todo app that features cloud sync with light and dark mode
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src="../../assets/app-design/desktop/image-loopstudios.jpg"
              alt=""
            />
            <div>
              {" "}
              <h3>LOOPSTUDIOS</h3>
              <p>A VR experience app made for Loopstudios</p>
            </div>
          </div>
        </div>{" "}
        <div className="otherDesign">
          <div>
            <WebDesing />
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

export default AppDesignPage;
