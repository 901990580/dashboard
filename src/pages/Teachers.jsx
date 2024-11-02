import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
        <p>Ushbu o'qituvchini o'chirishni xohlaysizmi?</p>
        <div className="button-group">
          <button className="modal-button" onClick={onConfirm}>
            Ha
          </button>
          <button className="modal-button" onClick={onClose}>
            Yo'q
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

function Students() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:3006/student");
        setStudents(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStudents();
  }, []);

  const addStudent = async () => {
    if (!name || !phone) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    try {
      const newStudent = {
        id: Math.round(Math.random() * 1000).toString(),
        name,
        phone,
      };
      await axios.post("http://localhost:3006/student", newStudent);
      setStudents((prevStudents) => [...prevStudents, newStudent]);
      setName("");
      setPhone("");
      toast.success("O'qituvchi muvaffaqiyatli qo'shildi!");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFunc = async () => {
    try {
      await axios.delete(`http://localhost:3006/student/${studentToDelete}`);
      setStudents(students.filter((student) => student.id !== studentToDelete));
      setModalOpen(false);
      setStudentToDelete(null);
      toast.success("O'qituvchi muvaffaqiyatli o'chirildi!");
    } catch (err) {
      console.log(err.message);
    }
  };

  const confirmDelete = (id) => {
    setStudentToDelete(id);
    setModalOpen(true);
  };

  const editFunc = (student) => {
    setName(student.name);
    setPhone(student.phone);
    navigate(`edit/${student.id}`);
  };

  return (
    <div className="students-container">
      <h1 className="students-title">O'qituvchi Qo'shish</h1>
      <InputField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ism"
      />
      <InputField
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefon raqami"
      />
      <button className="add-student-button" onClick={addStudent}>
        + O'qituvchi Qo'shish
      </button> <br /> <br />

      <h2>O'qituvchilar Ro'yxati</h2>
      <ul className="students-list">
        {students.map((student) => (
          <li key={student.id}>
            <div className="student-info">
              <h2>
                Name: {student.name} | Phone: {student.phone}
              </h2>
            </div>
            <div className="button-group">
              <button
                className="btn edit-btn"
                onClick={() => editFunc(student)}
              >
                Edit
              </button>
              <button
                className="btn delete-btn"
                onClick={() => confirmDelete(student.id)}
              >
                Delete
              </button>
            </div>
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

export default Students;
