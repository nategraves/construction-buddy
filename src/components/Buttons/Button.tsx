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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    altFnColor,
    altFnText,
    bgColor,
    children,
    disabled,
    textColor = "#000",
    size = 48,
  } = props;
  return (
    <button
      className="button"
      style={{
        display: "flex",
        cursor: disabled ? "pointer" : "default",
        width: `${size}px`,
        height: `${size}px`,
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
