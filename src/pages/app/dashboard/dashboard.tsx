import { Helmet } from "react-helmet-async";
import { DailyOrdersAmountCard } from "./daily-orders-amount-card";
import { MonthlyCanceledAmountCard } from "./monthly-canceled-amount-card";
import { MonthlyOrdersAmountCard } from "./monthly-orders-amount-card";
import { MonthlyRevenueCard } from "./monthly-revenue-card";
import { RevenueChart } from "./revenue-chart";
import { PopularProductsChart } from "./popular-products-chart";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <MonthlyRevenueCard />
        <MonthlyOrdersAmountCard />
        <DailyOrdersAmountCard />
        <MonthlyCanceledAmountCard />
      </div>
      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </>
  );
}
