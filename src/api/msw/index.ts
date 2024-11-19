import { getDailyRevenueInPeriodMock } from "@/api/msw/get-daily-revenue-in-period-mock";
import { getDayOrdersAmountMock } from "@/api/msw/get-day-orders-amount-mock";
import { getMonthCanceledOrdersAmountMock } from "@/api/msw/get-month-canceled-amount-mock";
import { getMonthOrdersAmountMock } from "@/api/msw/get-month-order-amount-mock";
import { getMonthRevenueOrdersAmountMock } from "@/api/msw/get-month-revenue-mock";
import { getPopularProductsMock } from "@/api/msw/get-popular-products-mock";
import { registerRestaurantMock } from "@/api/msw/register-restaurant-mock";
import { signInMock } from "@/api/msw/sign-in-mock";
import { env } from "@/env";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueOrdersAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
