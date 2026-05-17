import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ButtonSeta({ targetScreen = "Home", containerStyle, iconStyle }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={() => navigation.navigate(targetScreen)}>
        <Image
          source={require("../../assets/Arrow.png")}
          style={[styles.icon, iconStyle]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: 8,
    resizeMode: "contain",
  },
});