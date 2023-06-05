import { render } from "@testing-library/react";
import ReminderModal from ".";

jest.mock("../../hook/CalendarContext.js", () => {
  return {
    useCalendar() {
      return [[], () => {}];
    },
  };
});

describe("Reminder Modal Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ReminderModal
        open={true}
        setOpen={() => {}}
        infoForReminder={[]}
        indexDay={1}
      />
    );

    expect(getByText("Reminder")).toBeInTheDocument();
  });
});
