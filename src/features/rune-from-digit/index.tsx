import { splitNumberIntoChunks } from "../../shared/utils";
import { PrintRune } from "../print-rune/index";
import { useId } from "react";

export const RuneFromDigit = ({ value }: { value: string }) => {
  const runeChunks = splitNumberIntoChunks(Number(value));
  const uid = useId();

  return (
    <>
      {Object.values(runeChunks).map((rune, i) => {
        if (rune <= 0) {
          return null;
        }
        const mappedDigit = rune.toString().charAt(0);
        return (
          <PrintRune
            key={uid + i}
            digit={mappedDigit}
            length={rune.toString().length}
          />
        );
      })}
    </>
  );
};

export default RuneFromDigit;
