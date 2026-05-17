import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
export function TabBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={require("../../assets/home.png")} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DadosServicos", {
            focusSearch: Date.now(),
          })
        }
      >
        <Image source={require("../../assets/search.png")} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
        <Image source={require("../../assets/calendar.png")} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("DadosUser")}>
        <Image source={require("../../assets/user.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#eee",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  
    icon: {
      width: 64,
      height: 64,
      
    },
  });