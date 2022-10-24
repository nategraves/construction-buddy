import React, { useEffect, useState, useContext } from "react";

import { ValueContext, defaultValue } from "./contexts";
import { Button, Digits, Display } from "./components";
import { ImperialValue, MetricValue, ValueMode } from "./types";

function App() {
  const [value, setValue] = React.useState(defaultValue);
  const [valueMode, setValueMode] = React.useState(ValueMode.imperial);

  const toggleValueMode = () =>
    setValueMode(
      valueMode === ValueMode.imperial ? ValueMode.metric : ValueMode.imperial
    );

  return (
    <ValueContext.Provider
      value={{
        value,
        mode: valueMode,
        setValue,
        toggleValueMode,
      }}
    >
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
        <Display />
        <Digits />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
