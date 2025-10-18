import pageImage from "../../assets/signPageImg.svg";
import logo from "../../assets/maglo-logo.svg";
import google from "../../assets/googleLogo.svg";
import line from "../../assets/singLine.svg";

export default function SignUp() {
  return (
    <div className="flex flex-row w-full h-screen overflow-x-hidden p-0 m-0 bg-white">
      <div className="flex flex-col justify-start w-1/2 h-screen p-0 m-0 bg-white">
        <div className="flex h-[30px] justify-start pt-[40px] pl-[135px]">
          <img src={logo} />
        </div>
        <div className="flex flex-col w-full h-full pt-[80px] justify-start align-middle pl-[135px]">
          <div className="flex flex-col max-w-[404px] gap-[8px]">
            <text className="text-[30px] font-semibold ">Create new account</text>
            <text className="text-[16px] font-regular text-[#78778B] ">
              Welcome back! Please enter your details
            </text>
          </div>
          <form className="flex flex-col max-w-[404px] bg-white pt-[25px] gap-[8px]">
            <text className="text-[14px] font-medium text-[#1B212D]">
              Full Name
            </text>
            <input
              className="border border-[#E4E4E7] rounded-[10px] h-[48px] pl-[16px] text-[14px] placeholder:text-[#78778B]"
              type="text"
              placeholder="Mahfuzul Nabil"
            />
            <text className="text-[14px] font-medium text-[#1B212D]">
              Email
            </text>
            <input
              className="border border-[#E4E4E7] rounded-[10px] h-[48px] pl-[16px] text-[14px] placeholder:text-[#78778B]"
              type="email"
              placeholder="example@gmail.com"
            />
            <text className="text-[14px] font-medium text-[#1B212D]">
              Password
            </text>
            <input
              className="border border-[#E4E4E7] rounded-[10px] h-[48px] pl-[16px] text-[14px] placeholder:text-[#78778B]"
              type="password"
              placeholder="•••••••"
            />
            <button className="bg-[#C8EE44] border-transparent rounded-[10px] h-[48px] mt-[20px]">
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
              <div className="flex flex-col gap-[4px]">
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
