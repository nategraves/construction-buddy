import React, { FC, ReactElement } from "react";

interface ButtonProps {
  altFnColor?: string;
  altFnText?: string;
  bgColor?: string;
  disabled?: boolean;
  size?: number;
  textColor?: string;
  children: ReactElement | string;
  heightMultiple?: number;
  onClick: (currentValue?: number) => void;
  widthMultiple?: number;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    altFnColor,
    altFnText,
    bgColor = "#2f2f2f",
    children,
    disabled,
    textColor = "#fff",
    size = 48,
    widthMultiple = 1.25,
  } = props;
  return (
    <button
      className="button"
      style={{
        background: "transparent",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => (disabled ? {} : props.onClick())}
    >
      {altFnText != null && (
        <span style={{ color: altFnColor, textTransform: "uppercase" }}>
          {altFnText}
        </span>
      )}
      <div
        style={{
          cursor: disabled ? "default" : "pointer",
          width: `${size * widthMultiple}px`,
          height: `${size}px`,
          background: disabled ? "#6d6d6d" : bgColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: `${size}px`,
          fontWeight: "bold",
        }}
      >
        <span style={{ color: textColor }}>{children}</span>
      </div>
    </button>
  );
};
