import "./Header.css";
import userIcon from "../../assets/icons/user.png"; 
import logoIcon from "../../assets/icons/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"><a href="#"><img src={logoIcon} alt="user" className="logo-icon" /></a></div>

      <nav className="header__nav">
        <a href="#">Who we are</a>
        <a href="#">Contacts</a>
        <a href="#">Menu</a>
      </nav>

      <div className="header__actions">
        <button className="signup-btn">Sign up</button>
        <img src={userIcon} alt="user" className="user-icon" />
      </div>
    </header>
  );
};

export default Header;