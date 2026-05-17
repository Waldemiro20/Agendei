import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export function Button({ title, onPress, style, backgroundColor, textStyle }) {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          style,
          backgroundColor != null && { backgroundColor },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5CC6BA",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 326,
    height: 56,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    includeFontPadding: false,
  },
});