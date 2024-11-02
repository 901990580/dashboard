import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Modal from "./Modal";
import { PrivateRoute } from "./PrivateRoute";
import { routes } from "./routes";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const isModalOpen = true; 
    if (isModalOpen) {
      setModalOpen(true);
    }
  }, []);

  return (
    <div className="App">
        <Routes>
          <Route
            path="/modal"
            element={<Modal isOpen={isModalOpen} onClose={closeModal} />}
          />
          <Route path="/" element={<PrivateRoute />}>
            {routes.map((item) => (
              <Route key={item.path} element={item.element} path={item.path} />
            ))}
          </Route>
        </Routes>
    </div>
  );
}

export default App;