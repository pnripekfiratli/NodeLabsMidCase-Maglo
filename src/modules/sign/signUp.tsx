import pageImage from "../../assets/sign/signPageImg.svg";
import logo from "../../assets/logos/maglo-logo.svg";
import google from "../../assets/logos/googleLogo.svg";
import line from "../../assets/sign/singLine.svg";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SignPageSkeleton from "./pageSkeleton";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  function validate() {
    const newErrors = { name: "", email: "", password: "" };
    let valid = true;

    if (!name) {
      newErrors.name = "Full name is required";
      valid = false;
    } else if (name.trim().length < 3) {
      newErrors.name = "Please enter your full name";
      valid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      toast.success("Account created successfully 🎉");
      setName("");
      setEmail("");
      setPassword("");
    } else {
      toast.error("Please fix the errors and try again");
    }
  }
  return loading ? (
    <>
      <SignPageSkeleton />
    </>
  ) : (
    <div className="flex flex-row w-full h-screen overflow-x-hidden p-0 m-0 bg-white">
      <div className="flex flex-col justify-start w-1/2 h-screen p-0 m-0 bg-white">
        <div className="flex h-[30px] justify-start pt-[40px] pl-[135px]">
          <img src={logo} />
        </div>
        <div className="flex flex-col w-full h-full pt-[80px] justify-start align-middle pl-[135px]">
          <div className="flex flex-col max-w-[404px] gap-[8px]">
            <text className="text-[30px] font-semibold ">
              Create new account
            </text>
            <text className="text-[16px] font-regular text-[#78778B] ">
              Welcome back! Please enter your details
            </text>
          </div>
          <form className="flex flex-col max-w-[404px] bg-white pt-[25px] gap-[8px]">
            <text className="text-[14px] font-medium text-[#1B212D]">
              Full Name
            </text>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`border rounded-[10px] h-[48px] pl-[16px] text-[14px] placeholder:text-[#78778B] ${
                errors.name
                  ? "border-[#e64037] focus:border-[#e64037]"
                  : "border-[#E4E4E7] focus:border-[#C8EE44]"
              }`}
              type="text"
              placeholder="Mahfuzul Nabil"
            />
            {errors.name && (
              <text className="text-[12px] text-[#e64037]">{errors.name}</text>
            )}
            <text className="text-[14px] font-medium text-[#1B212D]">
              Email
            </text>
            <input
              value={email}
              className={`border rounded-[10px] h-[48px] pl-[16px] text-[14px] placeholder:text-[#78778B] focus:outline-none ${
                errors.email
                  ? "border-[#e64037]"
                  : "border-[#E4E4E7] focus:border-[#C8EE44]"
              }`}
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            {errors.email && (
              <text className="text-[12px] text-[#e64037]">{errors.email}</text>
            )}
            <text className="text-[14px] font-medium text-[#1B212D]">
              Password
            </text>
            <input
              value={password}
              className={`border rounded-[10px] h-[48px] pl-[16px] text-[14px] placeholder:text-[#78778B] focus:outline-none ${
                errors.password
                  ? "border-[#e64037]"
                  : "border-[#E4E4E7] focus:border-[#C8EE44]"
              }`}
              type="password"
              placeholder="•••••••"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            {errors.password && (
              <text className="text-[12px] text-[#e64037]">
                {errors.password}
              </text>
            )}
            <button
              className="bg-[#C8EE44] border-transparent rounded-[10px] h-[48px] mt-[20px]"
              onClick={handleSubmit}
            >
              <text className="text-[16px] font-semibold text-[#1B212D]">
                Create Account
              </text>
            </button>
            <button className="bg-transparent border border-solid border-[#F5F5F5] rounded-[10px] h-[48px] mt-[10px]">
              <div className="flex flex-row w-full h-full justify-center items-center gap-[10px]">
                <img className="w-[24px] h-[24px]" src={google} />
                <text className="text-[16px] font-semibold text-[#78778B]">
                  Sing up with google
                </text>
              </div>
            </button>

            <div className="flex flex-row justify-center mt-[24px] gap-[8px]">
              <text className="text-[14px] font-regular text-[#929EAE]">
                Already have an account?
              </text>
              <div
                className="flex flex-col gap-[4px]"
                onClick={() => navigate("/sign-in")}
              >
                <text className="text-[14px] font-regular text-[1B212D] cursor-pointer">
                  Sign in
                </text>
                <img src={line} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-end align-top w-1/2 h-screen p-0 m-0">
        <img className="aspect-auto" src={pageImage} />
      </div>
    </div>
  );
}
