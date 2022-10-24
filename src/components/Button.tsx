import React, { FC, ReactElement } from "react";

interface ButtonProps {
  altFnColor?: string;
  altFnText?: string;
  bgColor?: string;
  textColor?: string;
  action: (currentValue?: number) => void;
  children: ReactElement | string;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    altFnColor,
    altFnText,
    bgColor,
    children,
    textColor = "#fff",
  } = props;
  return (
    <button
      className="button"
      style={{ display: "flex" }}
      onClick={() => props.action()}
    >
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
        <span style={{ color: textColor }}>{children}</span>
      </div>
    </button>
  );
};
