import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Symbols } from 'src/data';

export const FractionDisplay = ({
  n,
  d,
  displayNPlaceholder = false,
  fontSize = 24,
  color = '#ffffff',
  bold,
}: {
  n?: number;
  d: number;
  displayNPlaceholder?: boolean;
  fontSize?: number;
  color?: string;
  bold?: boolean;
}) => {
  const numerator = displayNPlaceholder ? n ?? 'X' : n;

  if (!numerator) {
    return null;
  }

  const styles = StyleSheet.create({
    outerContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    valueText: {
      fontSize,
      color,
      ...(bold ? { fontWeight: 'bold' } : {}),
    },
  });

  return (
    <View style={styles.outerContainer}>
      {/* <Text style={{ ...styles.valueText, left: 0, top: 0 }}>{numerator}</Text> */}
      <Text style={{ ...styles.valueText }}>{numerator}</Text>
      {/* <Text style={{ ...styles.valueText, left: 10, top: 6, fontSize: 30 }}>
        {Symbols.fraction}
      </Text> */}
      <View
        style={{
          borderBottomColor: color,
          borderBottomWidth: fontSize > 20 ? 2 : 1,
          width: 20,
        }}
      />
      <Text style={{ ...styles.valueText }}>{d}</Text>
      {/* <Text style={{ ...styles.valueText, right: 0, bottom: 0 }}>{d}</Text> */}
    </View>
  );
};
