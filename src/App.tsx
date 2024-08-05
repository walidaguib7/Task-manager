import { Route, Routes } from "react-router-dom";

// import TasksList from "./pages/tasksList";

// import XV from "./pages/XV";
import Header from "./global/Headers/Header";
import ForgetPassword from "./components/Auth/ForgetPassword/FP";
import LoginPage from "./components/Auth/Login/Login";
import Reset from "./components/Auth/ResetPassword/Reset";
import SignUpPage from "./components/Auth/SignUp/SignUp";
import LandingPage from "./pages/LandingPage";

import AuthHeader from "./global/Headers/Auth_Header/AuthHeader";
import TasksListPage from "./pages/tasksList";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const isAuthenticated = sessionStorage.getItem("token");
  const data = useQuery("", () => {
    return axios.get(
      "http://localhost:5176/api/Tasks/d51bafdd-5757-4a65-9220-6045ac1b65fc"
    );
  });
  console.log(data.data);
  return (
    <div className="">
      {isAuthenticated ? <AuthHeader /> : <Header />}
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<TasksListPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset" element={<Reset />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
