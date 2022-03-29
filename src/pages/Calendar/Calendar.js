import React, { useState } from 'react';
import { useCalendar } from '../../hook/CalendarContext.js';
import { Container, Reminder} from './styles';
import { weekDays } from '../../constants/WeekDays';
import ReminderModal from '../../components/ReminderModal';

function Calendar() {
  const [openReminder, setOpenReminder] = useState(false);
  const [indexDay, setIndexDay] = useState(null);
  const [infoForReminder, setInfoForReminder] = useState(null);

  const weeks = [1, 2, 3, 4, 5];

  const { calendarDays } = useCalendar();

  function addOrUpdateReminder(item, index) {
    setOpenReminder(true);
    setInfoForReminder(item);
    setIndexDay(index);
  }

  return (
    <Container >
      <table>
        <thead>
          <tr>
            {weekDays.map(item => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {weeks.map((weekDay, indexWeek) => (
             <tr key={indexWeek}>
             {calendarDays.slice(indexWeek * 7, weekDay * 7).map((item, index) => {
                return (
                  <td 
                    key={index} 
                    onClick={() => addOrUpdateReminder(item, index)} 
                    className={
                      (item.weekDay === "Saturday" || item.weekDay === 'Sunday' ? 'weekend' : '') ||
                      (item.day === new Date().getDate() ? 'today' : '')
                      }
                    >
                    <span className={item.dayOff ? 'dayOff' : ''}>{item.day}</span>
                    {item?.reminders ? (
                      <Reminder>
                        <span>
                          Reminder - {item?.reminders.time}
                        </span>
                      </Reminder>
                    ) : ''}
                  </td>
                )
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
  )
}

export default Calendar;