import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from "@react-navigation/native";

const Rail = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.root, { backgroundColor: colors.primary }]} />
  );
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
});
