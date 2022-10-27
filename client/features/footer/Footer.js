import React from "react";
import { ABOUT, CONTACT, LEGAL, STORE } from "./Menus";
import Item from "./Item";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <Item Links={ABOUT} title="ABOUT US" />
          </div>
          <div className="footer-column">
            <Item Links={CONTACT} title="CONTACT US" />
          </div>
          <div className="footer-column">
            <Item Links={LEGAL} title="LEGAL & PRIVACY" />
          </div>
          <div className="footer-column">
            <Item Links={STORE} title="STORE" />
          </div>
        </div>
        <hr />
        <span style={{ textAlign: "left" }}>
          Copyright ©2022 All rights reserved.
        </span>

        <div id="icons">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-snapchat"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
