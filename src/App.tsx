import React from "react";

import { ValueProvider } from "./contexts";
import { Digits, Display, Targets } from "./components";

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
    </ValueProvider>
  );
}

export default App;
