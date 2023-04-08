import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Bar,
  Calender,
  Contacts,
  Faq,
  Form,
  Geography,
  Invoices,
  Line,
  Pie,
} from "./module";
const Routess = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/form" element={<Form />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/invoice" element={<Invoices />} />
          <Route path="/line" element={<Line />} />
          <Route path="/pie" element={<Pie />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
