import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import down from "../../../assets/icons/down.svg";
import { useWorkingCapital } from "../../../hooks/useDashboard";
import { useEffect, useState } from "react";

export default function WorkingCapital() {
  const { data: capitalData } = useWorkingCapital();
  const [chartData, setChartData] =
    useState<
      Array<{ month: string; income: number; expense: number; net: number }>
    >();

  useEffect(() => {
    if (capitalData?.data.data) {
      setChartData(capitalData.data.data)
    }
  }, [capitalData]);

  return (
    <div className="flex flex-col border border-[#F5F5F5] rounded-[10px] px-[25px] py-[15px] gap-[8px]">
      <div className="flex items-center justify-between">
        <label className="text-[16px] font-semibold text-[#1B212D]">
          Working Capital
        </label>
        <div className="bg-[#F8F8F8] min-w-[107px] h-[30px] flex flex-row cursor-pointer items-center border-none rounded-[5px] py-[6px] pr-[8px] pl-[10px] justify-between">
          <text className="text-[12px] text-[#1B212D]"> Last 6 Months</text>
          <img className="w-[9px]" src={down} />
        </div>
      </div>
      <div className="w-full">
        <ResponsiveContainer height={291}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              axisLine={false}
              dataKey="month"
              padding={{ left: 25, right: 25 }}
            />
            <YAxis axisLine={false} padding={{ bottom: 25, top: 25 }} />
            <Tooltip isAnimationActive />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={8}
              color="#1B212D"
              wrapperStyle={{
                top: -36,
                right: 170,
                fontSize: "12px",
                fontWeight: 400,
              }}
            />
            <Line
              type="monotone"
              dataKey="income"
              strokeWidth={2}
              stroke="#29A073"
            />
            <Line
              type="monotone"
              dataKey="expense"
              strokeWidth={2}
              stroke="#C8EE44"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
