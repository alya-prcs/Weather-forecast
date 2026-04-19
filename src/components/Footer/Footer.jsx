import "./Footer.css";
import insta from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import logoIcon from "../../assets/icons/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__logo">
          <a href="#"><img src={logoIcon} alt="user" className="logo-icon" /></a>
        </div>

        <div className="footer__address">
          <h3>Address</h3>
          <p>Svobody str. 35</p>
          <p>Kyiv</p>
          <p>Ukraine</p>
        </div>

        <div className="footer__socials">
          <h3>Contact us</h3>
          <div className="icons">
            <img src={insta} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={whatsapp} alt="whatsapp" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;