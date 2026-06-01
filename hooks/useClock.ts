"use client";
import { useState, useEffect } from "react";

const DAYS = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

export interface ClockData {
  day: string;
  date: string;
  time: string;
}

export function useClock(): ClockData {
  const [data, setData] = useState<ClockData>({ day: "", date: "", time: "" });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const day = DAYS[now.getDay()];
      const date = `${MONTHS[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
      const h = now.getHours();
      const m = now.getMinutes().toString().padStart(2, "0");
      const ampm = h >= 12 ? "PM" : "AM";
      const h12 = h % 12 || 12;
      const time = `${h12}:${m} ${ampm}`;
      setData({ day, date, time });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return data;
}
