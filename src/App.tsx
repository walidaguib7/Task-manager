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
import { useEffect } from "react";
import { useUserStore } from "./store/UserStore";
import { Account } from "appwrite";
import { client } from "./utils/Appwrite";
import TasksListPage from "./pages/tasksList";

function App() {
  const account = new Account(client);
  const user = useUserStore();

  const isAuthenticated =
    localStorage.getItem("user") && localStorage.getItem("token");

  useEffect(() => {
    if (user.getUser() == "") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    } else {
      account.get().then((res) => user.setUser(res.$id));
    }
  });

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
