import React, { useState, useEffect } from "react";
import axios from "axios";
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

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-content">
      <div className="modal">
        <h1 className="modal-title">Tasdiqlash</h1>
        <p>Ushbu guruhni o'chirishni xohlaysizmi?</p>
        <div className="button-group">
          <button className="modal-button confirm" onClick={onConfirm}>
            Ha
          </button>
          <button className="modal-button cancel" onClick={onClose}>
            Yo'q
          </button>
        </div>
      </div>
    </div>
  );
};

function Groups() {
  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [groupToDelete, setGroupToDelete] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get("http://localhost:3006/student");
        setGroups(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGroups();
  }, []);

  const addGroup = async () => {
    if (!groupName) {
      toast.error("Iltimos, guruh nomini kiriting.");
      return;
    }

    try {
      const newGroup = {
        id: Math.round(Math.random() * 1000).toString(),
        name: groupName,
      };
      await axios.post("http://localhost:3006/student", newGroup);
      setGroups((prevGroups) => [...prevGroups, newGroup]);
      setGroupName("");
      toast.success("Guruh muvaffaqiyatli qo'shildi!");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFunc = async () => {
    try {
      await axios.delete(`http://localhost:3006/student/${groupToDelete}`);
      setGroups(groups.filter(group => group.id !== groupToDelete));
      setModalOpen(false);
      setGroupToDelete(null);
      toast.success("Guruh muvaffaqiyatli o'chirildi!");
    } catch (err) {
      console.log(err.message);
    }
  };

  const confirmDelete = (id) => {
    setGroupToDelete(id);
    setModalOpen(true);
  };

  return (
    <div className="groups-container">
      <h1 className="groups-title">Guruh Qo'shish</h1>
      <div className="input-container">
        <InputField
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Guruh Nomi"
        />
        <button className="add-group-button" onClick={addGroup}>
          Qo'shish
        </button>
      </div>

      <h2>Guruhlar Ro'yxati</h2>
      <ul className="groups-list">
        {groups.map((group) => (
          <li key={group.id} className="group-item">
            <h2>{group.name}</h2>
            <button
              className="btn delete-btn"
              onClick={() => confirmDelete(group.id)}
            >
              O'chirish
            </button>
          </li>
        ))}
      </ul>

      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={deleteFunc}
      />
      
      <ToastContainer />
    </div>
  );
}

export default Groups;