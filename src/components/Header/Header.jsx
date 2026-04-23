import { useState } from "react";
import "./Header.css";
import userIcon from "../../assets/icons/user.png";
import logoIcon from "../../assets/icons/logo.png";
import Modal from "../Modal/Modal";

const Header = ({ userName, setUserName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <a href="#">
            <img src={logoIcon} alt="logo" className="logo-icon" />
          </a>
        </div>

        <nav className="header__nav">
          <a href="#">Who we are</a>
          <a href="#">Contacts</a>
          <a href="#">Menu</a>
        </nav>

        <div className="header__actions">
          {/* 🔥 якщо є ім’я — показуємо його */}
          {userName ? (
            <div className="user-info">
              <img src={userIcon} alt="user" className="user-icon" />
              <span>{userName}</span>
            </div>
          ) : (
            <>
              <button
                className="signup-btn"
                onClick={() => setIsOpen(true)}
              >
                Sign up
              </button>
              <img src={userIcon} alt="user" className="user-icon" />
            </>
          )}
        </div>
      </header>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setUserName={setUserName}
      />
    </>
  );
};

export default Header;