import { http, HttpResponse } from "msw";
import { GetMonthCanceledOrdersAmountResponse } from "@/api/get-month-canceled-orders-amount";

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", async () => {
  return HttpResponse.json({
    amount: 12,
    diffFromLastMonth: 5,
  });
});
