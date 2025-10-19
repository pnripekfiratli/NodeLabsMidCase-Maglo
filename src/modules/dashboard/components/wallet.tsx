import dots from "../../../assets/icons/dots.svg";
import chip from "../../../assets/dashboard/chip.svg";
import logo from "../../../assets/dashboard/cardLogo.svg";
import less from "../../../assets/dashboard/contactless.svg";
import visa from "../../../assets/dashboard/visa.svg";
import master from "../../../assets/dashboard/mastercard.svg";
import { useEffect, useState } from "react";
import { useWallet } from "../../../hooks/useDashboard";

export default function Wallet() {
  const { data: wallet } = useWallet();

  const [cardsData, setCardsData] = useState<
    Array<{
      id: string;
      name: string;
      type: string;
      cardNumber: string;
      bank: string;
      network: string;
      expiryMonth: number;
      expiryYear: number;
      color: string;
      isDefault: boolean;
    }>
  >();

  useEffect(() => {
    if (wallet?.data.cards) {
      setCardsData(wallet.data.cards);
    }
  }, [wallet]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row w-full justify-between items-center pb-[12px]">
        <text className="text-[18px] font-semibold text-[#1B212D]">Wallet</text>
        <img className="cursor-pointer" src={dots} />
      </div>
      {cardsData?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col pt-[8px] pb-[12px] gap-[12px] w-full"
          style={{
            background:
              item.color === "#000000"
                ? "linear-gradient(90deg, #4A4A49 20%, #20201F 100%"
                : "rgba(255, 255, 255, 0.25)",
            width: index !== 0 ? "100%" : "90%",
            maxWidth: index === 0 ? "354px" : "324px",
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
            marginTop: index !== 0 ? "-52px" : "none",
            boxShadow : index !== 0 ? "0px 3px 14px 0px rgba(0,0,0,0.10)" : "none",
          }}
        >
          <div className="flex flex-col px-[30px] pt-[8px] gap-[20px]">
            <div className="flex flex-row w-full gap-[10px] items-center">
              <img src={logo} />
              <text className="text-[20px] font-medium text-[#626260]">|</text>
              <text
                className={`text-[12px] font-medium ${
                  index === 0 ? "text-[#626260]" : "text-[#F5F5F5]"
                } `}
              >
                {item.bank.split(" ").at(2) + " " + item.bank.split(" ").at(3)}
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
              <img
                width={"32px"}
                src={item.network === "Visa" ? visa : master}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
