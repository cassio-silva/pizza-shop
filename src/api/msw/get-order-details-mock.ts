import { http, HttpResponse } from "msw";
import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "@/api/get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "Jhon Doe",
      email: "jhondoe@example.com",
      phone: "123123123",
    },
    status: "pending",
    createdAt: new Date(),
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 1000,
        product: {
          name: "Pizza 100",
        },
        quantity: 2,
      },
    ],
    totalInCents: 5000,
  });
});
