import React, { useMemo } from "react";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Area,
  YAxis
} from "recharts";
type Props = {};

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  console.log("🚀 ~ file: Row1.tsx:8 ~ Row1 ~ data:", data);
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ expenses, revenue, month }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        }
      })
    )
  }, [])
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="a">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;
