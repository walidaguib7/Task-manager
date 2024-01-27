import { Route, Routes } from "react-router-dom";

import Header from "./global/Header";
import LandingPage from "./global/LandingPage";
import LoginPage from "./components/Auth/Login/Login";
import SignUpPage from "./components/Auth/SignUp/SignUp";
import ForgetPassword from "./components/Auth/ForgetPassword/FP";
import Reset from "./components/Auth/ResetPassword/Reset";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </div>
  );
}

export default App;
