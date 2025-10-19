import right from "../../../assets/icons/right.svg";

export default function ScheduledTransfers() {
  const transfers = [
    {
      id: "sch_001",
      name: "Saleh Ahmed",
      image:
        "https://ui-avatars.com/api/?name=Saleh+Ahmed&background=random&size=100",
      date: "2022-04-28T11:00:00Z",
      amount: -435,
      currency: "$",
      status: "scheduled",
    },
  ];

  return (
    <div>
      <div className="w-full h-[22px] flex flex-row justify-between items-center pb-[12px]">
        <text className="text-[18px] font-semibold text-[#1B212D]">
          Scheduled Transfers
        </text>
        <div className="flex flex-row gap-[12px] cursor-pointer">
          <text className="text-[14px] font-semibold text-[#29A073]">
            View All
          </text>
          <img src={right} />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        {transfers.map((item, index) => (
          <div key={index} className="flex flex-row w-full justify-between items-center">
            <div className="gap-[12px] flex flex-row items-center">
              <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                <img
                  src={item.image}
                  alt="User avatar"
                  className="w-full h-full object-cover scale-130 object-[50%_20%]"
                  style={{ transformOrigin: "center center" }}
                />
              </div>
              <div className="flex flex-col justify-between">
                <text className="text-[14px] font-semibold text-[#1B212D]">
                  {item.name}
                </text>
                <text className="text-[12px] font-medium text-[#929EAE]">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  }) +
                    " at " +
                    new Date(item.date).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                </text>
              </div>
            </div>
            <text className="text-[18px] font-semibold text-[#000000]">{item.amount}</text>
          </div>
        ))}
      </div>
    </div>
  );
}
