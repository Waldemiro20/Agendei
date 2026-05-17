import { Image, StyleSheet } from "react-native";

export function Logo() {
  return (
    <Image
      style={styles.logo}
      source={require("../../assets/logo4.png")}
      
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    alignSelf: "center",
    width: 214,
    height: 49,
  },
});