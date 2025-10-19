import { useEffect, useState } from "react";
import right from "../../../assets/icons/right.svg";
import { useRecentTransactions } from "../../../hooks/useDashboard";
import { formatCurrency } from "../../../utils/formatCurrency";

export default function RecentTransaction() {
  const { data: transactions } = useRecentTransactions();
  const [transactionsData, setTransactionsData] = useState<
    Array<{
      id: string;
      name: string;
      business: string;
      image: string;
      type: string;
      amount: number;
      currency: string;
      date: string;
      status: string;
    }>
  >();

  useEffect(() => {
    if (transactions?.data.transactions) {
      setTransactionsData(transactions.data.transactions);
    }
  }, [transactions]);

  return (
    <div className="flex flex-col border border-[#F5F5F5] rounded-[10px] px-[25px] py-[15px] gap-[8px]">
      <div className="w-full h-[22px] flex flex-row justify-between items-center">
        <text className="text-[18px] font-semibold text-[#1B212D]">
          Recent Transaction
        </text>
        <div className="flex flex-row gap-[12px] cursor-pointer">
          <text className="text-[14px] font-semibold text-[#29A073]">
            View All
          </text>
          <img src={right} />
        </div>
      </div>
      <div className="w-full flex">
        <table className="w-full border-separate border-spacing-y-[15px]">
          <thead>
            <tr>
              <th className="text-[12px] font-semibold text-[#929EAE] flex justify-start">
                NAME/BUSINESS
              </th>
              <th>
                <text className="text-[12px] font-semibold text-[#929EAE]">
                  TYPE
                </text>
              </th>
              <th>
                <text className="text-[12px] font-semibold text-[#929EAE]">
                  AMOUNT
                </text>
              </th>
              <th>
                <text className="text-[12px] font-semibold text-[#929EAE]">
                  DATE
                </text>
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionsData?.slice(0, 3).map((item, index: number) => (
              <tr
                key={index}
                className="border-b border-[#F5F5F5] last:border-0"
              >
                <td className="flex flex-row gap-[14px]">
                  <img
                    src={item.image}
                    alt={item.business}
                    className="w-[40px] h-[40px] object-contain"
                  />
                  <div className="flex flex-col">
                    <text className="text-[14px] font-medium text-[#1B212D]">
                      {item.name}
                    </text>
                    <text className="text-[12px] font-regular text-[#929EAE]">
                      {item.business}
                    </text>
                  </div>
                </td>
                <td className="text-center">{item.type}</td>
                <td className="text-center">
                  {formatCurrency(item.amount, { currency: item.currency })}
                </td>
                <td className="text-center">
                  {new Date(item.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
