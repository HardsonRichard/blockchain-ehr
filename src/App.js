import React from "react";
import "./styles/output.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/receptionist/Dashboard";
import Registration from "./pages/receptionist/Registration";
import Appointments from "./pages/receptionist/Appointments";
import Login from "./pages/auth/Login";
import DoctorAppointmentPage from "./pages/receptionist/DoctorAppointmentPage";
import SharedAppointmentsLayout from "./components/receptionist/SharedAppointmentsLayout";
import AddRecord from "./pages/doctor/AddRecord";
import ViewRecord from "./pages/doctor/ViewRecord";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import SharedLayout from "./components/shared/SharedLayout";
import OrderedTest from "./pages/labTech/OrderedTest";
import AddTestResult from "./pages/labTech/AddTestResult";
import AddMedication from "./pages/pharmacist/AddMedication";
import Users from "./pages/admin/Users";
import EventsLog from "./pages/admin/EventsLog";
import Prescriptions from "./pages/pharmacist/Presriptions";
// import { RegisterProvider } from "./contexts/RegisterContext";
// import Web3 from "web3/dist/web3.min";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="registration" element={<Registration />} />
            <Route path="appointments" element={<SharedAppointmentsLayout />}>
              {" "}
              <Route index element={<Appointments />} />
              <Route path=":doctorsId" element={<DoctorAppointmentPage />} />
            </Route>
            <Route path="addRecord" element={<AddRecord />} />
            <Route path="viewRecord" element={<ViewRecord />} />
            <Route path="doctorAppointments" element={<DoctorAppointments />} />
            <Route path="orderedTest" element={<OrderedTest />} />
            <Route path="addTest" element={<AddTestResult />} />
            <Route path="orderedMedication" element={<Prescriptions />} />
            <Route path="addMedication" element={<AddMedication />} />
            <Route path="users" element={<Users />} />
            <Route path="eventsLog" element={<EventsLog />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
