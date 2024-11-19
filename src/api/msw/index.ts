import { getDailyRevenueInPeriodMock } from "@/api/msw/get-daily-revenue-in-period-mock";
import { getDayOrdersAmountMock } from "@/api/msw/get-day-orders-amount-mock";
import { getManagedRestaurantMock } from "@/api/msw/get-managed-restaurant-mock";
import { getMonthCanceledOrdersAmountMock } from "@/api/msw/get-month-canceled-amount-mock";
import { getMonthOrdersAmountMock } from "@/api/msw/get-month-order-amount-mock";
import { getMonthRevenueOrdersAmountMock } from "@/api/msw/get-month-revenue-mock";
import { getPopularProductsMock } from "@/api/msw/get-popular-products-mock";
import { getProfileMock } from "@/api/msw/get-profile-mock";
import { registerRestaurantMock } from "@/api/msw/register-restaurant-mock";
import { signInMock } from "@/api/msw/sign-in-mock";
import { updateProfileMock } from "@/api/msw/update-profile-mock";
import { env } from "@/env";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
