import { http, HttpResponse } from "msw";
import { GetProfileResponse } from "@/api/get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  async () => {
    return HttpResponse.json({
      id: "custom-user-id",
      name: "Jhon Doe",
      email: "jhondoe@example.com",
      phone: "50080987987",
      role: "manager",
      createdAt: new Date(),
      upatedAt: null,
    });
  },
);
