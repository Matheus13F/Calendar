import { ReminderContainer } from "./styles";

export default function ReminderCard({ time }) {
  return (
    <ReminderContainer>
      <span>Reminder - {time}</span>
    </ReminderContainer>
  );
}
