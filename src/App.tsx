import { RuneFromDigit } from "./features/rune-from-digit/index";
import { useState, SyntheticEvent, useEffect, useCallback } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleOnChange = (e: SyntheticEvent) => {
    const value = (e?.target as HTMLInputElement)?.value;
    if (value.length > 4) {
      return;
    }
    setValue(value);
  };

  const generateSvgBlob = useCallback(() => {
    const svgContainer = document.getElementById("svgContainer")!.outerHTML;
    const blob = new Blob([svgContainer], { type: "image/svg+xml" });

    (document.getElementById("downloadSvgHandler")! as HTMLAnchorElement).href =
      URL.createObjectURL(blob);
  }, []);

  useEffect(() => {
    if (!value) {
      return;
    }
    generateSvgBlob();
  }, [value, generateSvgBlob]);

  return (
    <>
      <input type="number" value={value} onChange={handleOnChange} />
      <div className="runesContainer" id="svgContainer">
        <a id="downloadSvgHandler" href="" download="rune.svg">
          <RuneFromDigit value={value} />
        </a>
      </div>
    </>
  );
}

export default App;
