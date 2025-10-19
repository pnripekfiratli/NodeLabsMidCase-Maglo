import { useEffect, useState } from "react";
import balance from "../../../assets/icons/totalBalance.svg";
import saved from "../../../assets/icons/totalSaved.svg";
import spending from "../../../assets/icons/totalSpending.svg";
import { useSummary } from "../../../hooks/useDashboard";
import { formatCurrency } from "../../../utils/formatCurrency";

export default function TotalValueItems() {
  const { data } = useSummary();
  const [totalBalance, setTotalBalance] = useState<string>();
  const [totalSpending, setTotalSpending] = useState<string>();
  const [totalSaved, setTotalSaved] = useState<string>();

  useEffect(() => {
    if (data && data.data) {
      setTotalBalance(
        formatCurrency(data.data.totalBalance.amount, {
          currency: data.data.totalBalance.currency,
        })
      );
      setTotalSpending(
        formatCurrency(data.data.totalExpense.amount, {
          currency: data.data.totalExpense.currency,
        })
      );
      setTotalSaved(
        formatCurrency(data.data.totalSavings.amount, {
          currency: data.data.totalSavings.currency,
        })
      );
    }
  }, [data]);

  return (
    <div className="grid grid-cols-9 gap-[8px]">
      <div className="col-span-3 bg-[#363A3F] p-[24px_20px] rounded-[10px]">
        <div className="flex flex-row justify-center items-center gap-[25px]">
          <div className="bg-[#4E5257] flex items-center justify-center rounded-full w-[42px] h-[42px]">
            <img className="w-[20px] h-[20px]" src={balance} />
          </div>
          <div className="flex flex-col gap-[10px] w-[125px] h-auto">
            <text className="text-[14px] text-[#929EAE]">Total balance</text>
            <text className="text-[24px] font-bold text-[#ffffff] mt-2">
              {totalBalance}
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
              {totalSpending}
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
              {totalSaved}
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}
