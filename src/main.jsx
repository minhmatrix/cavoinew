// src/main.jsx
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthCodeForm from "./AuthCodeForm";
import Live from "./Live";
import Contact from "./Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Tuyệt đối KHÔNG thêm Route cho path="/" ở đây */}
      
      <Route
        path="/two_step_verification/two_factor"
        element={<AuthCodeForm />}
      />
      <Route path="/live" element={<Live />} />
      <Route path="/contact/:slug" element={<Contact />} />

      {/* Route này sẽ bắt tất cả các trang không khai báo (bao gồm cả trang chủ) và để trống */}
      <Route path="*" element={<></>} /> 
    </Routes>
  </BrowserRouter>
);
