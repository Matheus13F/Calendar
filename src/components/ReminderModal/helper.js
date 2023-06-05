export function UpdateCalendarWithReminder(
  calendarDays,
  infoForReminder,
  reminders = null
) {
  const indexForDayThatWillBeChanged = calendarDays.indexOf(infoForReminder);

  let tempCalendarDays = calendarDays;

  if (reminders === null) {
    tempCalendarDays[indexForDayThatWillBeChanged] = {
      currentMonth: tempCalendarDays[indexForDayThatWillBeChanged].currentMonth,
      day: tempCalendarDays[indexForDayThatWillBeChanged].day,
      dayOff: tempCalendarDays[indexForDayThatWillBeChanged].dayOff,
      weekDay: tempCalendarDays[indexForDayThatWillBeChanged].weekDay,
    };
  } else {
    tempCalendarDays[indexForDayThatWillBeChanged] = {
      currentMonth: tempCalendarDays[indexForDayThatWillBeChanged].currentMonth,
      day: tempCalendarDays[indexForDayThatWillBeChanged].day,
      dayOff: tempCalendarDays[indexForDayThatWillBeChanged].dayOff,
      weekDay: tempCalendarDays[indexForDayThatWillBeChanged].weekDay,
      reminders,
    };
  }
  localStorage.setItem("calendarDays", JSON.stringify(tempCalendarDays));
  return tempCalendarDays;
}
