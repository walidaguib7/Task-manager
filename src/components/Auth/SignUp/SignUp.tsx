/* eslint-disable @typescript-eslint/no-unused-vars */
import SignUpImage from "/SignUp.jpg";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <div className="pt-14  px-24 max-sm:px-8">
      <div className="flex justify-between items-center rounded-xl shadow-xl max-lg:p-4 bg-white">
        {/* Left Side */}
        <SignUpForm />

        {/* Right Side */}
        <div className="basis-[50%] max-lg:hidden">
          <img src={SignUpImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

/* 
          <div className="flex gap-2 items-center">
            <span className="text-[14px]">Have you already an account?</span>
            <span
              className="text-[14px] font-bold text-[var(--primary)] cursor-pointer"
              onClick={() => nav("/login")}>
              Sign In
            </span>
          </div>



*/
