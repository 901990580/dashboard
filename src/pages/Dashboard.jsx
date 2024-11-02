import React from "react";
import { BarChart } from '@mui/x-charts';
import { FaChalkboardTeacher, FaUserGraduate, FaBook, FaClock } from 'react-icons/fa';
import "./style/NewDashboard.css"

function NewDashboard() {
  return (
    <div className="new-dashboard">
      <h1 className="dashboard-title">Ma'lumotlar Boshqaruvi</h1>
      <div className="cards">
        <div className="card">
          <FaChalkboardTeacher className="card-icon" />
          <h2>O'qituvchilar</h2>
          <p>50</p>
        </div>
        <div className="card">
          <FaUserGraduate className="card-icon" />
          <h2>Talabalar</h2>
          <p>1,500</p>
        </div>
        <div className="card">
          <FaBook className="card-icon" />
          <h2>Kurslar</h2>
          <p>15</p>
        </div>
        <div className="card">
          <FaClock className="card-icon" />
          <h2>Vaqt</h2>
          <p>13:00</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-section">
          <h3>Talabalar Oylik O'sishi</h3>
          <BarChart
            series={[{ data: [40, 70, 50, 80] }]}
            height={300}
            xAxis={[{ data: ["Yan", "Fev", "Mar", "Apr"], scaleType: "band" }]}
            margin={{ top: 20, bottom: 30, left: 40, right: 10 }}
            aria-label="Talabalar Oylik O'sishi chart"
          />
        </div>

        <div className="chart-section">
          <h3>O'qituvchilar Bo'yicha Taqqoslash</h3>
          <BarChart
            series={[{ data: [30, 40, 20, 10] }]}
            height={300}
            margin={{ top: 20, bottom: 30, left: 40, right: 10 }}
            aria-label="O'qituvchilar Bo'yicha Taqqoslash chart"
          />
        </div>
      </div>
    </div>
  );
}

export default NewDashboard;