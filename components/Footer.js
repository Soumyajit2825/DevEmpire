import React from "react";

import {
  Box,
  Container,
  Row,
  Column1,
  Column2,
  FooterLink,
  Heading1,
  Heading2
} from "./FooterStyles";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});
const Footer = () => {
  return (
    <div className="footer">
      <footer className="copyright">
        <div className="footer-question">
        <h2><span>👑</span>DevEmpire</h2>
        <br/>
          <h4>
            Made by{" "}
            <a
              href="https://swapnilsparsh.github.io"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Swapnil Srivastava
            </a>{" "}
          </h4>
          <br />
          <h4>
            Maintain by
            <a
              href="https://jatiinyadav.github.io"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Jatin Yadav 
            </a>
            &nbsp; and
            <a
              href="https://github.com/iamutkarshmall"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Utkarsh Mall 
            </a>
          </h4>
        </div>
        <br/>
        <br/>
        <br/>
        <p className="footer-copyright">© 2023 DevEmpire</p>
      </footer>
        <div className="footer-details">
        <div className="column1">
          <Column1>
            <Heading1>Support</Heading1>
            <FooterLink target="_blank" href="https://github.com/swapnilsparsh/DevEmpire">GitHub</FooterLink>
            <FooterLink href="https://www.producthunt.com/products/developer-empire?utm_source=badge-featured&utm_medium=badge#developer-empire">Producthunt</FooterLink>
            <FooterLink href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20having%20a%20collection%20of%20all%20the%20campus%20ambassador%20and%20fellowship%20programs&url=https://devempire.netlify.app&via=swapnilsparsh">Twitter</FooterLink>
            <FooterLink href="#">Newsletter</FooterLink>
          </Column1>
          </div>
          <div className="column2">
          <Column2>
            <Heading2>Explore</Heading2>
            <FooterLink href="/ambassador">Ambasaddor</FooterLink>
            <FooterLink href="/programs">Programs</FooterLink>
            <FooterLink href="/webdev">WebDev</FooterLink>
            <FooterLink href="/games">Games</FooterLink>
          </Column2>
          </div>
          <div className="theme-toggle-button" id="toggle-button">
            <ThemeToggle />
          </div>
        </div>
    </div>
  );
};

export default Footer;
