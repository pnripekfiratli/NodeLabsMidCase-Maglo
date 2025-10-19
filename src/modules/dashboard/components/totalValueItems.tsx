import balance from "../../../assets/icons/totalBalance.svg";
import saved from "../../../assets/icons/totalSaved.svg";
import spending from "../../../assets/icons/totalSpending.svg";

export default function TotalValueItems() {
  return (
    <div className="grid grid-cols-9 gap-[25px]">
      <div className="col-span-3 bg-[#363A3F] p-[24px_20px] rounded-[10px]">
        <div className="flex flex-row justify-center items-center gap-[15px]">
          <div className="bg-[#4E5257] flex items-center justify-center rounded-full w-[42px] h-[42px]">
            <img src={balance} />
          </div>
          <div className="flex flex-col gap-[10px] w-[125px] h-auto">
            <text className="text-[14px] text-[#929EAE]">Total balance</text>
            <text className="text-[24px] font-bold text-[#ffffff] mt-2">
              $25,000
            </text>
          </div>
        </div>
      </div>
      <div className="col-span-3 bg-[#F8F8F8] p-[24px_20px] rounded-[10px]">
        <div className="flex flex-row justify-center items-center gap-[15px]">
          <div className="bg-[#EBE8E8] flex items-center justify-center rounded-full w-[42px] h-[42px]">
            <img src={spending} />
          </div>
          <div className="flex flex-col gap-[10px] w-[125px] h-auto">
            <text className="text-[14px] text-[#929EAE]">Total spending</text>
            <text className="text-[24px] font-bold text-[#1B212D] mt-2">
              $25,000
            </text>
          </div>
        </div>
      </div>
      <div className="col-span-3 bg-[#F8F8F8] p-[24px_20px] rounded-[10px]">
        <div className="flex flex-row justify-center items-center gap-[15px]">
          <div className="bg-[#EBE8E8] flex items-center justify-center rounded-full w-[42px] h-[42px]">
            <img src={saved} />
          </div>
          <div className="flex flex-col gap-[10px] w-[125px] h-auto">
            <text className="text-[14px] text-[#929EAE]">Total saved</text>
            <text className="text-[24px] font-bold text-[#1B212D] mt-2">
              $25,000
            </text>
          </div>
        </div>
      </div>

    </div>
  );
}
