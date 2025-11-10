import { render, screen } from "@testing-library/react";
import Breadcrumb from "./index";

describe("Breadcrumb", () => {
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: new URL("http://localhost/foo/bar"),
    });
  });

  it("renders breadcrumb links for each path part and marks last as current", () => {
    render(<Breadcrumb />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Foo")).toBeInTheDocument();
    expect(screen.getByText("Bar")).toBeInTheDocument();

    const items = screen.getAllByTestId("breadcrumb-item");
    expect(items[items.length - 1]).toHaveAttribute("data-current", "true");
  });
});
