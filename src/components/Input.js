import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const Input = React.forwardRef(function Input(
  {
    value,
    onChangeText,
    placeholder,
    backgroundColor = "#E9E9E9",
    secureTextEntry,
    style,
  },
  ref
) {
  return (
    <TextInput
      ref={ref}
      style={[styles.input, { backgroundColor }, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#000000"
      secureTextEntry={secureTextEntry}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    width: 357,
    padding: 14,
    height: 56,
    borderRadius: 25,
    marginBottom: 15,
    paddingLeft: 30,
    fontSize: 25,
  },
});