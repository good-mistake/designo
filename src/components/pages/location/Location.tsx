import React from "react";
import { Header } from "../../header/index.ts";
import { Footer } from "../../footer/index.ts";
import "./location.scss";
import useToggleMenu from "../../../hooks/useToggleMenu.ts";

const Location = () => {
  const { isMobile: isMobile768 } = useToggleMenu(768);
  const { isMobile: isMobile568 } = useToggleMenu(568);

  return (
    <div className="containerLocation">
      <Header />
      <main>
        <div>
          <div>
            <h2>Canada</h2>
            <div>
              <p>
                Designo Central Office
                <span>3886 Wellington Street</span>
                <span>Toronto, Ontario M9C 3J5</span>
              </p>
              <p>
                Contact
                <span>P : +1 253-863-8967</span>
                <span>M : contact@designo.co</span>
              </p>
            </div>
          </div>
          {isMobile568 ? (
            <img
              src="../../assets/locations/desktop/image-map-canada.png"
              alt=""
            />
          ) : isMobile768 ? (
            <img
              src="../../assets/locations/tablet/image-map-canada.png"
              alt=""
            />
          ) : (
            <img
              src="../../assets/locations/desktop/image-map-canada.png"
              alt=""
            />
          )}
        </div>
        <div>
          <div>
            <h2>Australia</h2>
            <div>
              <p>
                Designo AU Office
                <span>19 Balonne Street</span>
                <span>New South Wales 2443</span>
              </p>
              <p>
                Contact
                <span>P : (02) 6720 9092</span>
                <span>M : contact@designo.au</span>
              </p>
            </div>
          </div>
          {isMobile568 ? (
            <img
              src="../../assets/locations/desktop/image-map-australia.png"
              alt=""
            />
          ) : isMobile768 ? (
            <img
              src="../../assets/locations/tablet/image-map-australia.png"
              alt=""
            />
          ) : (
            <img
              src="../../assets/locations/desktop/image-map-australia.png"
              alt=""
            />
          )}
        </div>
        <div>
          <div>
            <h2>United Kingdom</h2>
            <div>
              <p>
                Designo UK Office
                <span>13 Colorado Way</span>
                <span>Rhyd-y-fro SA8 9GA</span>
              </p>
              <p>
                Contact
                <span>P : 078 3115 1400</span>
                <span>M : contact@designo.uk</span>
              </p>
            </div>
          </div>{" "}
          {isMobile568 ? (
            <img
              src="../../assets/locations/desktop/image-map-united-kingdom.png"
              alt=""
            />
          ) : isMobile768 ? (
            <img src="../../assets/locations/tablet/image-map-uk.png" alt="" />
          ) : (
            <img
              src="../../assets/locations/desktop/image-map-united-kingdom.png"
              alt=""
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Location;
