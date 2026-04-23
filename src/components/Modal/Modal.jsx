import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

export default function Modal({ isOpen, onClose, setUserName }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSignup = () => {
    setUserName(name);   // 🔥 зберігаємо ім’я
    onClose();
    navigate("/signup");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Sign up</h2>

        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>E-Mail</label>
        <input type="email" placeholder="E-Mail" />

        <label>Password</label>
        <input type="password" placeholder="Password" />

        <button className="signup-btn" onClick={handleSignup}>
          Sign up
        </button>
      </div>
    </div>
  );
}