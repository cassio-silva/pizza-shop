import { http, HttpResponse } from "msw";
import { GetPopularProductsResponse } from "@/api/get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", async () => {
  return HttpResponse.json([
    { product: "Pizza 1", amount: 5 },
    { product: "Pizza 2", amount: 3 },
    { product: "Pizza 3", amount: 12 },
    { product: "Pizza 4", amount: 10 },
    { product: "Pizza 5", amount: 7 },
  ]);
});
