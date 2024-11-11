import { OrderStatus } from "@/components/order-status";
import { render } from "@testing-library/react";

describe("Order Status", () => {
  it("should display the right text based on order status", () => {
    let wrapper = render(<OrderStatus status="pending" />);

    // wrapper.debug();

    let statusText = wrapper.getByText("Pendente");
    let badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-500");

    wrapper = render(<OrderStatus status="canceled" />);

    statusText = wrapper.getByText("Cancelado");
    badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });
});
