import { useState } from "react";
import apiService from "../../services/api";
import { useCalendar } from "../../hook/CalendarContext";
import { UpdateCalendarWithReminder } from "./helper";

import Modal from "@mui/material/Modal";
import { MdClose, MdLocationOn } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { ContainerModal, Container } from "./styles";
import ButtonModal from "../ButtonModal";

export default function ReminderModal({ open, setOpen, infoForReminder }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [weather, setWather] = useState(null);
  const [time, setTime] = useState(new Date().getTime());

  const { calendarDays, setCalendarDays } = useCalendar();

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const reminders = {
      title: title,
      description: description,
      time: time,
    };

    const tempAddReminder = UpdateCalendarWithReminder(
      calendarDays,
      infoForReminder,
      reminders
    );

    setCalendarDays(tempAddReminder);
    setOpen(false);
  };

  function deleteReminder() {
    const tempRemoveReminder = UpdateCalendarWithReminder(
      calendarDays,
      infoForReminder
    );
    setCalendarDays(tempRemoveReminder);
    setOpen(false);
  }

  async function getWeather(lat, long) {
    await apiService
      .get("weather", {
        params: {
          lat: lat,
          lon: long,
          appid: "1db481d00d3a5b22eec89d08051534c9",
          lang: "en",
          units: "metric",
        },
      })
      .then((response) => {
        setWather(response.data);
      })
      .catch((err) =>
        // eslint-disable-next-line no-console
        console.error("Error connecting to weather server", err.message)
      );
  }

  function getGeoLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
    });
  }

  const body = (
    <ContainerModal>
      <header>
        <h1>Reminder</h1>
        <MdClose onClick={handleClose} size={25} />
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <div className="content">
            <input
              required
              placeholder="Title"
              maxLength={30}
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={infoForReminder?.reminders?.title}
            />
            <textarea
              required
              placeholder="Description"
              maxLength={30}
              onChange={(e) => setDescription(e.target.value)}
              defaultValue={infoForReminder?.reminders?.description}
            />
            <input
              required
              placeholder="time"
              type="time"
              min="00:00"
              max="23:59"
              onChange={(e) => setTime(e.target.value)}
              defaultValue={infoForReminder?.reminders?.time}
              title="time"
            />
            <input
              placeholder="Add location and weather"
              disabled={weather && true}
              onClick={getGeoLocation}
              className="cursor"
              maxLength={0}
            />

            <footer className="buttons">
              <span>
                {weather && (
                  <>
                    <MdLocationOn size={22} />
                    {weather?.name},
                    <TiWeatherPartlySunny size={22} />
                    {`${weather?.main?.temp}°C - ${weather?.weather[0]?.description}`}
                  </>
                )}
              </span>

              <div>
                {infoForReminder?.reminders?.title && (
                  <ButtonModal
                    id="delete"
                    onClick={deleteReminder}
                    className="delete"
                    type="button"
                  >
                    Delete
                  </ButtonModal>
                )}

                <ButtonModal type="submit">
                  {infoForReminder?.reminders?.title
                    ? "Update Reminder"
                    : "Add Reminder"}
                </ButtonModal>
              </div>
            </footer>
          </div>
        </form>
      </main>
    </ContainerModal>
  );

  return (
    <Container className={open ? "" : "none"}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Container>
  );
}
