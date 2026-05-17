import { View, StyleSheet } from "react-native";

export function Divider({ style }) {
  return <View style=
  {[
    styles.line, style
    
   ]

  } />;
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
    alignSelf: "center",
    marginVertical: 10,
  },
});