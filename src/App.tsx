import React, { useEffect, useState } from "react";

import { Button, Digits, Display } from "./components";
// import { ImperialValue, MetricValue } from "./types";

function App() {
  // const [value, setValue] = useState<MetricValue | ImperialValue>();
  const [value, setValue] = useState<number>(0);
  const [action, setAction] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value]);
  return (
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        maxHeight: "100vh",
        justifyContent: "flex-start",
        overflow: "hidden",
        width: "100vw",
      }}
    >
      <div style={{ width: "100%" }}>
        <h1
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            height: "16px",
            marginLeft: "10px",
            textTransform: "uppercase",
          }}
        >
          Construction Buddy
        </h1>
      </div>
      <Display
        units="standard"
        currentValue={{
          ft: 1,
          in: 3,
          th: 14,
        }}
      />
      <Digits setValue={(v) => setValue(v)} />
    </div>
  );
}

export default App;
