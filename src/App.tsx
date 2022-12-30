import React from "react";

import { ValueProvider } from "./contexts";
import { Display, BasicModeButtons, NumericButtons } from "./components";

function App() {
  return (
    <ValueProvider>
      <div
        style={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxHeight: "100vh",
          justifyContent: "center",
          overflow: "hidden",
          width: "400px",
        }}
      >
        <div style={{ width: "100%" }}>
          <h1
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              height: "16px",
              padding: "15px 0",
              textTransform: "uppercase",
              textAlign: "right",
            }}
          >
            Construction Buddy
          </h1>
        </div>
        <Display />
        <BasicModeButtons />
        <NumericButtons />
      </div>
    </ValueProvider>
  );
}

export default App;
