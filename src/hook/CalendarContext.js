import { createContext, useState, useContext, useEffect } from "react";
import { weekDays } from "../constants/WeekDays";
import {
  getDayAfterCurrentMonth,
  getDayBeforeCurrentMonth,
  lastDate,
  firstDate
} from "./helper";
import {
  subDays,
  startOfMonth,
  format,
  lastDayOfMonth,
  addDays
} from "date-fns";

const CalendarContext = createContext();

function CalendarProvider({ children }) {
  const [calendarDays, setCalendarDays] = useState([]);
  const [reminderCalendar, setReminderCalendar] = useState([]);

  const allDates = [];
  const lastDayOfMonthDate = lastDayOfMonth(new Date());

  const countOfdaysBeforeFisrtDate = getDayBeforeCurrentMonth(
    weekDays[firstDate.getDay()]
  );
  const countOfdaysAfterLastDate = getDayAfterCurrentMonth(
    weekDays[lastDate.getDay()]
  );

  for (let i = countOfdaysBeforeFisrtDate; i > 0; i--) {
    const firstDayToCompare = subDays(startOfMonth(new Date()), i);
    pushData(
      firstDayToCompare.getDate(),
      format(firstDayToCompare, "EEEE"),
      firstDayToCompare.getMonth() + 1,
      true
    );
  }

  for (let i = 1; i <= lastDate.getDate(); i++) {
    let currentDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      i
    );
    pushData(
      currentDate.getDate(),
      weekDays[currentDate.getDay()],
      currentDate.getMonth() + 1
    );
  }

  for (let i = 1; i <= countOfdaysAfterLastDate; i++) {
    const currentDate = addDays(lastDayOfMonthDate, i);
    pushData(
      currentDate.getDate(),
      format(currentDate, "EEEE"),
      currentDate.getMonth() + 1,
      true
    );
  }

  function pushData(day, weekDay, month, dayOutOfCurrentMonth = false) {
    allDates.push({
      day: day,
      weekDay: weekDay,
      currentMonth: month,
      dayOff: dayOutOfCurrentMonth
    });
  }

  useEffect(() => {
    // Checks for data saved to localStorage
    const savedCalendarDays = JSON.parse(localStorage.getItem("calendarDays"));

    if (savedCalendarDays !== null) {
      setCalendarDays(savedCalendarDays);
    } else {
      setCalendarDays(...calendarDays, allDates);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CalendarContext.Provider
      value={{
        calendarDays,
        setCalendarDays,
        reminderCalendar,
        setReminderCalendar
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

function useCalendar() {
  const context = useContext(CalendarContext);
  return context;
}

export { useCalendar, CalendarProvider };
