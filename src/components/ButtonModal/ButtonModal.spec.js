import { render } from "@testing-library/react";
import ButtonModal from ".";

describe("ButtonModal Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ButtonModal id="id" onClick={() => {}} className="delete">
        button
      </ButtonModal>
    );

    expect(getByText("button")).toBeInTheDocument();
  });

  it("is receiving delete classing", () => {
    const { getByText } = render(
      <ButtonModal id="id" onClick={() => {}} className="delete">
        button
      </ButtonModal>
    );

    expect(getByText("button")).toHaveClass("delete");
  });
});
