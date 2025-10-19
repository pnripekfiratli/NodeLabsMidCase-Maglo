import dots from "../../../assets/icons/dots.svg";
import chip from "../../../assets/dashboard/chip.svg";
import logo from "../../../assets/dashboard/cardLogo.svg";
import less from "../../../assets/dashboard/contactless.svg";
import visa from "../../../assets/dashboard/visa.svg";
import master from "../../../assets/dashboard/mastercard.svg";

export default function Wallet() {
  const cards = [
    {
      id: "card_001",
      name: "Maglo Gold Card",
      type: "credit",
      cardNumber: "5495 7381 3759 2321",
      bank: "Maglo | Universal Bank",
      network: "Visa",
      expiryMonth: 12,
      expiryYear: 2027,
      color: "#000000",
      isDefault: true,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row w-full justify-between items-center pb-[12px]">
        <text className="text-[18px] font-semibold text-[#1B212D]">Wallet</text>
        <img className="cursor-pointer" src={dots} />
      </div>
      {cards.map((item, index) => (
        <div
          key={index}
          className="flex flex-col pt-[8px] pb-[12px] gap-[12px] w-full"
          style={{
            background:
              item.color === "#000000"
                ? "linear-gradient(90deg, #4A4A49 20%, #20201F 100%"
                : "rgba(255, 255, 255, 0.25)",
            width: item.isDefault ? "100%" : "90%",
            maxWidth: "354px",
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex flex-col px-[30px] pt-[8px] gap-[20px]">
            <div className="flex flex-row w-full gap-[10px] items-center">
              <img src={logo} />
              <text className="text-[20px] font-medium text-[#626260]">|</text>
              <text className="text-[12px] font-medium text-[#626260]">
                {item.name.split(" ").at(1) + " " + item.name.split(" ").at(2)}
              </text>
            </div>
            <div className="flex flex-row w-full justify-between">
              <img src={chip} />
              <img src={less} />
            </div>
          </div>
          <div className="flex flex-col px-[30px] py-[12px] gap-[12px]">
            <text className="text-[17px] font-bold text-[#FFFFFF]">
              {item.cardNumber}
            </text>
            <div className="flex flex-row w-full justify-between items-center">
              <text className="text-[12px] font-medium text-[#929EAE]">
                {item.expiryMonth + "/" + item.expiryYear}
              </text>
              <img width={"32px"} src={item.network === "Visa" ? visa : master} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
