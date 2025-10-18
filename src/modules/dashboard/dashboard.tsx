import { useState } from "react";

import logo from "../../assets/maglo-logo.svg";
import home from "../../assets/icons/home.svg";
import transaction from "../../assets/icons/transaction.svg";
import invoice from "../../assets/icons/invoice.svg";
import wallet from "../../assets/icons/wallet.svg";
import setting from "../../assets/icons/setting.svg";
import help from "../../assets/icons/help.svg";
import logout from "../../assets/icons/logout.svg";
import search from "../../assets/icons/search.svg";
import notification from "../../assets/icons/notification.svg";
import dropdown from "../../assets/icons/dropdown.svg";
import user from "../../assets/person.png";

interface SidebarItem {
  name: string;
  icon: string;
}

const sidebarItems: SidebarItem[] = [
  { name: "Dashboard", icon: home },
  { name: "Transactions", icon: transaction },
  { name: "Invoices", icon: invoice },
  { name: "My Wallets", icon: wallet },
  { name: "Settings", icon: setting },
];

export default function Dashboard() {
  const [shownPage, setShownPage] = useState<string>("Dashboard");

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="grid grid-cols-[250px_1fr] max-w-[1440px] w-full min-h-screen">
        {/* Sidebar */}
        <aside className="bg-[#FAFAFA] p-[30px_25px_100px] flex flex-col justify-between">
          <div>
            <div className="flex h-[30px] justify-start mb-[40px]">
              <img src={logo} />
            </div>
            <nav className="flex flex-col gap-[2px]">
              {sidebarItems.map((item, index) => (
                <div
                  className={`flex flex-row gap-[12px] cursor-pointer h-[48px] pl-[15px] items-center ${
                    item.name === shownPage
                      ? "bg-[#C8EE44] rounded-[8px] p-2"
                      : "p-2 hover:bg-lime-50"
                  }`}
                  key={index}
                >
                  <img src={item.icon} className="inline w-5 h-5 mr-3" />
                  <span
                    onClick={() => setShownPage(item.name)}
                    className={`${
                      item.name === shownPage
                        ? "text-[#1B212D] font-semibold"
                        : "text-[#929EAE] font-semibold"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </nav>
          </div>

          <nav className="flex flex-col gap-[2px]">
            <div className="flex flex-row gap-[12px] cursor-pointer h-[48px] pl-[15px] items-center">
              <img src={help} className="inline w-5 h-5 mr-3" />
              <span className="text-[#929EAE] font-semibold">Help</span>
            </div>
            <div className="flex flex-row gap-[12px] cursor-pointer h-[48px] pl-[15px] items-center">
              <img src={logout} className="inline w-5 h-5 mr-3" />
              <span className="text-[#929EAE] font-semibold">Logout</span>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="grid grid-cols-12 grid-rows-[auto_1fr] pl-[38px] pt-[30px] pr-[30px] pb-[30px] bg-white">
          {/* Üst Bar */}
          <header className="col-span-12 flex w-full h-[48px] items-center justify-between shadow px-6">
            <div className="flex items-center">
              <h2 className="text-[25px] text-[#1B212D] font-semibold">
                Dashboard
              </h2>
            </div>
            <div className="flex flex-row w-[353px] justify-between items-center">
              <div className="flex flex-row gap-[45px]">
                <img
                  className="w-[24px] h-[24px] cursor-pointer"
                  src={search}
                />
                <img
                  className="w-[24px] h-[24px] cursor-pointer"
                  src={notification}
                />
              </div>
              <div className="flex flex-row w-[215px] rounded-[100px] items-center pl-[7px] pr-[15px] justify-between h-[48px] bg-[#FAFAFA] cursor-pointer">
                <div className="gap-[12px] flex flex-row items-center min-w-[148px]">
                  <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                    <img
                      src={user}
                      alt="User avatar"
                      className="w-full h-full object-cover scale-130 object-[50%_20%]"
                      style={{ transformOrigin: "top center" }}
                    />
                  </div>
                  <span className="text-[14px] text-[#1B212D] font-semibold">
                    Mahfuzul Nabil
                  </span>
                </div>
                <img className="w-[17px] h-[17px]" src={dropdown} />
              </div>
            </div>
          </header>

          {/* Ana içerik */}
          <div className="col-span-12 w-full gap-[39px]">
            <div className=" grid grid-cols-12">
              {/* Sol blok */}
              <div className="col-span-8 sm:col-span-12 bg-gray-100 p-4 rounded-lg">
                sol taraf
              </div>
              {/* Sağ blok */}
              <div className="col-span-4 sm:col-span-12  p-4 rounded-lg">
                sağ taraf
              </div>{" "}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
