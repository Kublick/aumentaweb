import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./flip.css";

type Props = {
  date?: string;
  color: boolean;
};
export const CountDown = ({ date = "2024-02-15 23:50", color }: Props) => {
  return (
    <FlipClockCountdown
      className={"flip-clock-black"}
      to={new Date(date)}
      digitBlockStyle={{ fontSize: 56, fontFamily: "Soap" }}
      showLabels={true}
      showSeparators={false}
      labels={["Dias", "Horas", "Minutos", "Segundos"]}
      labelStyle={{
        fontSize: 16,
        fontWeight: 500,
        textTransform: "uppercase",
        fontFamily: "Soap",
      }}
    />
  );
};
