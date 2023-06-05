import { render } from "@testing-library/react";
import ReminderCard from ".";

describe("Reminder Card Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<ReminderCard time="12:23" />);

    expect(getByText("Reminder - 12:23")).toBeInTheDocument();
  });
});
