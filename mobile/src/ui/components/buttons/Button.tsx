import React, { FC, ReactElement } from 'react';
import Color from 'color';
import { Button as NBButton, Box, Text } from 'native-base';

interface ButtonProps {
  altFnColor?: string;
  altFnText?: string;
  bgColor?: string;
  disabled?: boolean;
  fontSize?: number;
  size?: number;
  textColor?: string;
  children: ReactElement | string;
  heightMultiple?: number;
  onPress: (currentValue?: number) => void;
  widthMultiple?: number;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    // altFnColor,
    // altFnText = '#fff',
    bgColor = '#2f2f2f',
    children,
    disabled,
    fontSize = 16,
    size = 42,
    textColor = '#fff',
    widthMultiple = 1.25,
    onPress,
  } = props;
  const width = size * widthMultiple;

  const backgroundColor = Color(bgColor);
  const pressedColor = backgroundColor.isDark()
    ? backgroundColor.lighten(0.2)
    : backgroundColor.darken(0.2);

  return (
    <NBButton
      backgroundColor={backgroundColor.hex()}
      _pressed={{ backgroundColor: pressedColor.hex() }}
      width={width}
      height={size}
      disabled={disabled}
      onPress={() => (disabled ? {} : onPress())}
    >
      {typeof children === 'string' ? (
        <Text fontSize={fontSize} color={textColor}>
          {children}
        </Text>
      ) : (
        children
      )}
    </NBButton>
  );
};
