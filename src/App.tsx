import * as React from "react";

import { Button, Display } from "./components";

function App() {
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
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "space-between",
          justifyContent: "flex-start",
        }}
      >
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
        <Button text="Rise" action={() => console.log("hi")} bgColor="#666" />
      </div>
    </div>
  );
}

export default App;
