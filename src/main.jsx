import "./index.css";
import App from "./App.jsx";
import Simple from "./simple.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import AuthCodeForm from "./AuthCodeForm";
import LoginForm from "./LoginForm.jsx";
import Live from "./Live"; // new live page component
import Contact from "./Contact"; // contact page
import NotFound from "./NotFound"; // 404

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/two_step_verification/two_factor"
        element={<AuthCodeForm />}
      />
      <Route path="/live" element={<Live />} />
      <Route path="/contact/:slug" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
