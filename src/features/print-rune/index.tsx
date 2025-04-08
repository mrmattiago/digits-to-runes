import { digitsToRunes } from "../../shared/constants";
import { transformDigit } from "../../shared/utils";

export const PrintRune = ({
  digit,
  length,
}: {
  digit: string;
  length: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 90"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      display: "block",
      transform: transformDigit(length),
    }}
  >
    <g stroke="black" strokeWidth="2">
      {digitsToRunes[digit].map(({ x1, x2, y1, y2 }, i) => (
        <line key={x1 + i} x1={x1} y1={y1} x2={x2} y2={y2} />
      ))}
    </g>
  </svg>
);
