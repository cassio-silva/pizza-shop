import { NavLink } from "@/components/nav-link";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("NavLink", () => {
  it("should highlight the NavLink when at the correct path", () => {
    const wrapper = render(
      <>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
          );
        },
      },
    );

    expect(wrapper.getByText("Home").dataset.current).toEqual("false");
    expect(wrapper.getByText("About").dataset.current).toEqual("true");
  });
});
