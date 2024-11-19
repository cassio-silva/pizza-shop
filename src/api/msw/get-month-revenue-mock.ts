import { http, HttpResponse } from "msw";
import { GetMonthRevenueResponse } from "@/api/get-month-revenue";

export const getMonthRevenueOrdersAmountMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>("/metrics/month-receipt", async () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: -5,
  });
});
