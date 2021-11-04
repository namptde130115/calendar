import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";

export const MyCalendar = () => {
  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const events = [
    {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2021, 10, 4),
      end: new Date(2021, 10, 5),
    },
    {
      title: "Vacation",
      allDay: true,
      start: new Date(2021, 11, 0),
      end: new Date(2021, 11, 5),
    },
    {
      title: "Conference",
      start: new Date(2021, 11, 4),
      end: new Date(2021, 11, 5),
    },
  ];

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, margin: "50px" }}
      />
    </div>
  );
};
