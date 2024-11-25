import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            99 Moo 18 Paholyothin Road, Klong Nueng, Klong Luang, Pathumthani
            12121 Thailand.
          </p>
          <p>
            <span>
              <i className="ri-phone-line"></i>
            </span>
            +66 (0) 2564 4451-79
          </p>
        </div>
      </footer>
      <div className="footer__bar">Copyright 2024</div>
    </>
  );
};

export default Footer;
