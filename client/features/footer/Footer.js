import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import ScrollButton from "./ScrollButton";

function Footer() {
  return (
    <div className="footer-container">
      <MDBFooter className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Connect with us on Social Media:</span>
          </div>
          <div id="icons">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-snapchat"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">ABOUT US</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Accessibility
                  </a>
                </p>

                <p>
                  <a href="#!" className="text-reset">
                    Customer Stories
                  </a>
                </p>

                <p>
                  <a href="#!" className="text-reset">
                    Affiliates
                  </a>
                </p>

                <p>
                  <a href="#!" className="text-reset">
                    Careers
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Legal & Privacy</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Diversity & Inclusion Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Press
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Private Policy
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">CONTACT US</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Feedback
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Recall Notices
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Blog
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Refund & Order Status
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">STORE</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Address: 362 Lake Road, Queens, NY, 11506
                </p>
                <p>Email: gameStore@gamestore.com</p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> Phone: 516-432-1234
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> Fax: 516-432-4321
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div className="text-center p-4 copyright-section">
          © 2022 Copyright: All Rights Reserved.
          <ScrollButton />
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
