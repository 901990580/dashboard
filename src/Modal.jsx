import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const notifySuccess = () => toast("Dashboardga o'tdi!!!");

  const goToDashboard = () => {
    if (email === "12345" && password === "12345") {
      navigate("/");
      notifySuccess();
      onClose();
    } else {
      toast.error("Xato kiritdingiz!!!");
    }
  };

  return (
    <div className="custom-modal-background">
      <div className="custom-modal">
        <h1 className="custom-modal-title">Kirish</h1>
        <input
          className="custom-modal-input"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          value={email}
        />
        <input
          className="custom-modal-input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Parol"
          value={password}
        />
        <button className="custom-modal-button" onClick={goToDashboard}>
          Kirish
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Modal;