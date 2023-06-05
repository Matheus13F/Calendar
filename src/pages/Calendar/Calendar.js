import React, { useState } from "react";
import { useCalendar } from "../../hook/CalendarContext.js";
import { Container } from "./styles";
import { weekDays } from "../../constants/WeekDays";
import ReminderModal from "../../components/ReminderModal";
import { format } from "date-fns";
import ReminderCard from "../../components/Reminder";

function Calendar() {
  const [openReminder, setOpenReminder] = useState(false);
  const [indexDay, setIndexDay] = useState(null);
  const [infoForReminder, setInfoForReminder] = useState(null);

  const today = new Date();
  const currentMonth = format(today, "MMMM");

  const weeks = [1, 2, 3, 4, 5, 6];

  const { calendarDays } = useCalendar();

  function addOrUpdateReminder(item, index) {
    setOpenReminder(true);
    setInfoForReminder(item);
    setIndexDay(index);
  }

  return (
    <Container>
      <h1>Calendar | {currentMonth}</h1>
      <table>
        <thead>
          <tr>
            {weekDays.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {weeks.map((weekDay, indexWeek) => (
            <tr key={indexWeek}>
              {calendarDays
                .slice(indexWeek * 7, weekDay * 7)
                .map((calendar, index) => {
                  return (
                    <td
                      key={index}
                      onClick={() => addOrUpdateReminder(calendar, index)}
                      className={`
                        ${
                          calendar.weekDay === "Saturday" ||
                          calendar.weekDay === "Sunday"
                            ? "weekend"
                            : ""
                        } 
                        ${calendar.day === new Date().getDate() ? "today" : ""}
                      `}
                    >
                      <span className={calendar.dayOff ? "dayOff" : ""}>
                        {calendar.day}
                      </span>
                      {calendar?.reminders && (
                        <ReminderCard time={calendar.reminders.time} />
                      )}
                    </td>
                  );
                })}
            </tr>
          ))}
        </tbody>
      </table>
      <ReminderModal
        open={openReminder}
        setOpen={setOpenReminder}
        infoForReminder={infoForReminder}
        indexDay={indexDay}
      />
    </Container>
  );
}

export default Calendar;
