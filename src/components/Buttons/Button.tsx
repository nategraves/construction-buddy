import React, { FC, ReactElement } from "react";

interface ButtonProps {
  altFnColor?: string;
  altFnText?: string;
  bgColor?: string;
  textColor?: string;
  onClick: (currentValue?: number) => void;
  disabled?: boolean;
  children: ReactElement | string;
  size?: number;
  widthMultiple?: number;
  heightMultiple?: number;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    altFnColor,
    altFnText,
    bgColor,
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
        display: "flex",
        cursor: disabled ? "pointer" : "default",
        width: `${size * widthMultiple}px`,
        height: `${size}px`,
        borderRadius: `${size}px`,
        background: "rgb(47,47,47)",
        fontWeight: "bold",
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
