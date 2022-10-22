import React from "react";

interface ButtonProps {
  altFnColor?: string;
  altFnText?: string;
  bgColor?: string;
  text: string;
  textColor?: string;
  action: (currentValue?: number) => void;
}

export function Button(props: ButtonProps) {
  const { altFnColor, altFnText, bgColor, text, textColor = "#fff" } = props;
  return (
    <button className="button" style={{ display: "flex" }}>
      {altFnText != null && (
        <span style={{ color: altFnColor, textTransform: "uppercase" }}>
          {altFnText}
        </span>
      )}
      <div
        style={{
          width: "80px",
          height: "48px",
          backgroundColor: bgColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4px",
        }}
      >
        <span style={{ color: textColor }}>{text}</span>
      </div>
    </button>
  );
}
