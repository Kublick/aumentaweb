"use client";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./flip.css";

type Props = {
  date?: string;
  mobile: boolean;
  classname?: string;
};
export const CountDown = ({
  date = "2024-02-15 23:50",
  mobile = false,
  classname = "flip-clock-black",
}: Props) => {
  return (
    <FlipClockCountdown
      className={classname}
      to={new Date(date)}
      showLabels={true}
      showSeparators={false}
      labels={["Dias", "Horas", "Minutos", "Segundos"]}
    />
  );
};
