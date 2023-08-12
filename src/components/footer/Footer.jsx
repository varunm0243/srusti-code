// import React from 'react';
// import './Footer.css'; // You can create a CSS file for styling

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="social-icons">
//         <a href="https://www.facebook.com">
//           <img
//             src="facebook-icon.png"
//             alt="Facebook"
//           />
//         </a>
//         <a href="https://www.twitter.com">
//           <img
//             src="twitter-icon.png"
//             alt="Twitter"
//           />
//         </a>
//         <a href="https://www.instagram.com">
//           <img
//             src="instagram-icon.png"
//             alt="Instagram"
//           />
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const SocialIconsContainer = styled.div`
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

export default function App() {
  return (
    <MDBFooter
      bgColor="light"
      style={{ position: "inherit" }}
      className="text-center text-lg-start text-muted footer"
    >
      <FooterContainer>
        <p>&copy; 2023 Nokia. All rights reserved.</p>
        <SocialIconsContainer>
          <SocialIcon href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </SocialIcon>
          <SocialIcon href="https://www.twitter.com/">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </SocialIcon>
          {/* Add more social media icons as needed */}
        </SocialIconsContainer>
      </FooterContainer>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
