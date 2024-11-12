import { Pagination } from "@/components/pagination";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

const onPageChangeCallback = vi.fn();

describe("Pagination", () => {
  it("Should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    );

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument();
    expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument();
  });
  it("Should be able to navigate the first page", async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima Página",
    });

    const user = userEvent.setup();
    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });
  it("Should be able to navigate to next page", () => {});
  it("Should be able to navigate previous page", () => {});
  it("Should be able to navigate last page", () => {});
});
