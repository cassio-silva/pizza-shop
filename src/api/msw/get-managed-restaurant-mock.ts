import { http, HttpResponse } from "msw";
import { GetManagedRestaurantResponse } from "@/api/get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/managed-restaurant", async () => {
  return HttpResponse.json({
    id: "custom-restaurant-id",
    name: "Pizza Shop",
    managerId: "custom-user-id",
    description: "Awesome Test description",
    createdAt: new Date(),
    upatedAt: null,
  });
});
