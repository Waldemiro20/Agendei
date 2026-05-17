import { useState } from "react";
import { View, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView, Text } from "react-native";
import { services } from "../data/services";
import { TabBar } from "../components/TabBar";
import { Logo } from "../components/Logo";
import { Divider } from "../components/Divider"
import { useNavigation } from "@react-navigation/native";
import { Input } from "../components/Input";

export default function Home() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const filteredServices = services.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.Logo}>
          <Logo />
        </View>
        <Divider style={styles.LineC} />

        <View>
          <Text style={styles.title}>Agende os seus serviços</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <Image style={styles.PinImage} source={require("../../assets/pin.png")} />
            <Input
              style={{ fontSize: 23, paddingRight: 58 }}
              placeholder="Qual cidade você está ?"
              value={search}
              onChangeText={setSearch}
              backgroundColor="#E9E9E9"
            />
          </View>
        </View>

        <FlatList
          data={filteredServices}
          numColumns={3}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.container}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("DadosServicos", { service: item })}
            >
              <View style={styles.box}>
                <Image source={item.image} style={styles.image} />
              </View>

              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      <View style={styles.footer}>
        <Divider style={styles.LineB} />
        <TabBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollContent: {
    paddingBottom: 8,
  },

  container: {
    paddingVertical: 24,
    alignItems: "center",
    paddingBottom: 20,
  },

  Logo: {
    marginTop: 35,
  },

  title: {
    fontSize: 25,
    color: "#000000",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 50,

  },

  PinImage: {
    width: 28,
    height: 28,
    position: "absolute",
    right: 70,
    top: "50%",
    transform: [{ translateY: -25 }],
    zIndex: 1,
  },

  searchContainer: {
    paddingHorizontal: 20,
  },

  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },


  item: {

    alignItems: "center",
    marginBottom: 20,
  },
  box: {
    width: 99,
    height: 98,
    borderRadius: 18,
    backgroundColor: "#E9E9E9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    margin: 10,
  },
  image: {
    width: 72,
    height: 72,
    resizeMode: "contain",
  },
  text: {
    marginTop: 8,
    fontSize: 17,
    color: "#7E7D7D",
    textAlign: "center",
  },

  LineC: {
    marginVertical: 28,
  },

  LineB: {
    marginVertical: 0,
  },

  footer: {
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
});