import React from "react";
import { ABOUT, CONTACT, LEGAL, COMPANY } from "./Menus";
import Item from "./Item";

function Footer() {
  return (
    <footer>
      <div>
        <div className="menus">
          <Item Links={ABOUT} title="ABOUT US" />
          <Item Links={CONTACT} title="CONTACT US" />
          <Item Links={LEGAL} title="LEGAL & PRIVACY" />
          <Item Links={COMPANY} title="COMPANY" />
        </div>
        <hr />
        <span style={{ textAlign: "left" }}>
          Copyright ©2022 All rights reserved.
        </span>

        <div id="icons" style={{ textAlign: "right", zoom: 1.5 }}>
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-snapchat"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
