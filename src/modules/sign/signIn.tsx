import pageImage from "../../assets/sign/signPageImg.svg";
import logo from "../../assets/logos/maglo-logo.svg";
import google from "../../assets/logos/googleLogo.svg";
import line from "../../assets/sign/singLine.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile, useSignIn } from "../../hooks/useAuth";

export default function SignIn() {
  const navigate = useNavigate();

  const {
    mutate,
    isSuccess: isSuccessSign,
    isPending: isPendingSign,
    data,
  } = useSignIn();
  const { data: dataProfile, refetch: fetchProfile } = useProfile();

  const [emailInput, setEmailInput] = useState<string>();
  const [passwordInput, setPasswordInput] = useState<string>();
  const [errorsInput, setErrorsInput] = useState({ email: "", password: "" });

  useEffect(() => {
    if (isSuccessSign === true && data.data.accessToken) {
      localStorage.setItem("accessToken", data.data.accessToken);
      fetchProfile();
    }
  }, [isSuccessSign, data]);

  useEffect(() => {
    if (dataProfile) {
      localStorage.setItem("user", JSON.stringify(dataProfile));
      navigate("/dashboard");
    }
  }, [dataProfile]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken || refreshToken) {
      navigate("/dashboard");
    }
  }, [navigate]);

  function validate() {
    const newErrors = { email: "", password: "" };
    let valid = true;

    if (!emailInput) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!passwordInput) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (passwordInput.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrorsInput(newErrors);
    return valid;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      mutate({ email: emailInput ?? "", password: passwordInput ?? "" });
    }
  }

  return (
    <div className="flex flex-row w-full h-screen overflow-x-hidden p-0 m-0 gap-[20px] bg-white">
      <div className="flex flex-col justify-center items-center w-1/2 h-screen bg-white">
        <div className="flex w-full max-w-[404px] h-[30px] justify-start pt-[40px]">
          <img src={logo} />
        </div>
        <div className="flex flex-col w-full max-w-[404px] h-full pt-[80px] justify-start align-middle">
          <div className="flex flex-col gap-[8px]">
            <text className="text-[30px] font-semibold ">Sign In</text>
            <text className="text-[16px] font-regular text-[#78778B] ">
              Welcome back! Please enter your details
            </text>
          </div>
          <form className="flex flex-col max-w-[404px] bg-white pt-[25px] gap-[8px]">
            <text className="text-[14px] font-medium text-[#1B212D]">
              Email
            </text>
            <input
              disabled={isPendingSign}
              value={emailInput}
              className={`border rounded-[10px] h-[48px] pl-[16px] text-[14px] placeholder:text-[#78778B] focus:outline-none ${
                errorsInput.email
                  ? "border-[#e64037]"
                  : "border-[#E4E4E7] focus:border-[#C8EE44]"
              }`}
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmailInput(e.currentTarget.value)}
            />
            {errorsInput.email && (
              <text className="text-[12px] text-[#e64037]">
                {errorsInput.email}
              </text>
            )}
            <text className="text-[14px] font-medium text-[#1B212D]">
              Password
            </text>
            <input
              disabled={isPendingSign}
              value={passwordInput}
              className={`border rounded-[10px] h-[48px] pl-[16px] text-[14px] placeholder:text-[#78778B] focus:outline-none ${
                errorsInput.password
                  ? "border-[#e64037]"
                  : "border-[#E4E4E7] focus:border-[#C8EE44]"
              }`}
              type="password"
              placeholder="•••••••"
              onChange={(e) => setPasswordInput(e.currentTarget.value)}
            />
            {errorsInput.password && (
              <text className="text-[12px] text-[#e64037]">
                {errorsInput.password}
              </text>
            )}
            <button
              disabled={isPendingSign}
              className="bg-[#C8EE44] border-transparent rounded-[10px] h-[48px] mt-[20px]"
              onClick={handleSubmit}
            >
              <text className="text-[16px] font-semibold text-[#1B212D]">
                Sign In
              </text>
            </button>
            <button className="bg-transparent border border-solid border-[#F5F5F5] rounded-[10px] h-[48px] mt-[20px]">
              <div className="flex flex-row w-full h-full justify-center items-center gap-[10px]">
                <img className="w-[24px] h-[24px]" src={google} />
                <text className="text-[16px] font-semibold text-[#78778B]">
                  Sing in with google
                </text>
              </div>
            </button>

            <div className="flex flex-row justify-center mt-[24px] gap-[8px]">
              <text className="text-[14px] font-regular text-[#929EAE]">
                Don't have an account?
              </text>
              <div
                className="flex flex-col gap-[4px]"
                onClick={() => navigate("/sign-up")}
              >
                <text className="text-[14px] font-regular text-[1B212D] cursor-pointer">
                  Sign Up
                </text>
                <img src={line} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-end align-top w-1/2 h-screen p-0 m-0">
        <img
          className="w-full h-full object-cover md:object-contain sm:h-[300px] sm:object-cover transition-all duration-500"
          src={pageImage}
        />
      </div>
    </div>
  );
}
