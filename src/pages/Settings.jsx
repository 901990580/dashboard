import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputField = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="input-field"
  />
);

function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (!username || !email || !password) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }
    toast.success("Sozlamalar muvaffaqiyatli saqlandi!");
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Sozlamalar</h1>
      <InputField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Foydalanuvchi ismi"
      />
      <InputField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <InputField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Parol"
        type="password"
      />
      <button className="save-button" onClick={handleSave}>
        Saqlash
      </button>

      <ToastContainer />
    </div>
  );
}

export default Settings;