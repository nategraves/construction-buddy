import React from "react";

import { ValueContext, defaultValue } from "./contexts";
import { Digits, Display, Targets } from "./components";
import { ValueMode, ValueTarget } from "./types";

function App() {
  const [value, setValue] = React.useState(defaultValue);
  const [valueMode, setValueMode] = React.useState(ValueMode.imperial);
  const [valueTarget, setValueTarget] = React.useState<ValueTarget>();
  const [valueTargetless, setValueTargetless] = React.useState<Maybe<number>>();

  const toggleValueMode = () =>
    setValueMode(
      valueMode === ValueMode.imperial ? ValueMode.metric : ValueMode.imperial
    );

  return (
    <ValueContext.Provider
      value={{
        mode: valueMode,
        value,
        valueTarget,
        valueTargetless,
        setValue,
        setValueTarget,
        setValueTargetless,
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
        <Targets />
        <Digits />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
