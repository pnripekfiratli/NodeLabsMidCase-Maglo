import right from "../../../assets/icons/right.svg";

export default function RecentTransaction() {
  const transactions = [
    {
      id: "trx_001",
      name: "iPhone 13 Pro MAX",
      business: "Apple Inc.",
      image: "https://i.ibb.co/Apple-Logo.png",
      type: "Mobile",
      amount: -420.84,
      currency: "TRY",
      date: "2025-10-06T10:30:00.000Z",
      status: "completed",
    },
    {
      id: "trx_002",
      name: "Netflix Subscription",
      business: "Netflix",
      image: "https://i.ibb.co/Netflix-Logo.png",
      type: "Entertainment",
      amount: -100,
      currency: "TRY",
      date: "2025-10-06T04:30:00.000Z",
      status: "completed",
    },
    {
      id: "trx_003",
      name: "Figma Subscription",
      business: "Figma Inc.",
      image: "https://i.ibb.co/Figma-Logo.png",
      type: "Software",
      amount: -244.2,
      currency: "TRY",
      date: "2025-10-05T22:30:00.000Z",
      status: "completed",
    },
    {
      id: "trx_004",
      name: "Monthly Salary",
      business: "Tech Corp Ltd.",
      image: "https://i.ibb.co/Company-Logo.png",
      type: "Salary",
      amount: 45000,
      currency: "TRY",
      date: "2025-10-05T16:30:00.000Z",
      status: "completed",
    },
  ];
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
            {transactions.slice(0, 3).map((item, index: number) => (
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
                <td className="text-center">{item.amount}</td>
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
