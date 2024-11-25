import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "2024-10-22 14:00", value: 0 },
  { time: "2024-10-22 16:00", value: 10000 },
  { time: "2024-10-22 18:00", value: 20000 },
  { time: "2024-10-22 20:00", value: 25000 },
  { time: "2024-10-22 22:00", value: 22000 },
  { time: "2024-10-23 00:00", value: 26000 },
  { time: "2024-10-23 02:00", value: 30000 },
  { time: "2024-10-23 04:00", value: 0 },
];

const CustomChart = () => {
  return (
    <div className="w-full h-[309.95px] bg-[#FAFBFB] p-4 md:p-[30px] rounded-[5px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          {/* Horizontal Grid Lines */}
          <CartesianGrid
            stroke="#DFE0E0"
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />

          {/* X-Axis */}
          <XAxis
            dataKey="time"
            tick={{ fontSize: 12, fill: "#B3B3B3" }}
            tickLine={false}
            axisLine={false}
          />
          {/* Y-Axis */}
          <YAxis
            tick={{ fontSize: 12, fill: "#B3B3B3" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              border: "1px solid #DFE0E0",
              fontSize: "12px",
            }}
            labelStyle={{ color: "#666666" }}
            formatter={(value) => [`${value}`, "Value"]}
          />
          {/* Line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#000000"
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomChart;
