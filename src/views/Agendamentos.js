import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from "react-native";

import ButtonSeta from "../components/ButtonSeta";
import { Divider } from "../components/Divider";

export default function Agendamentos() {

  function mostrarMenssagem() {
    Alert.alert("Seu agendamento foi feito com sucesso.");
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>

      <View style={styles.buttonContainer}>
        <ButtonSeta targetScreen="Estabelecimento" />
      </View>

      <Text style={styles.Title}>Fazer uma reserva</Text>

      <Divider style={styles.lineC} />

      <View style={styles.calendar}>
        <Image
          source={require("../../assets/calendario.png")}
          style={styles.image}
        />
      </View>

      <Divider />

      <Text style={styles.hora}>Horário</Text>

      <View style={styles.containerButton}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>09:00</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGreen}>
          <Text style={styles.textButtonWhite}>09:30</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>10:00</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>10:30</Text>
        </TouchableOpacity>

      </View>

      <Divider />

      <View style={styles.infoContainer}>
        <Text style={styles.consulta}>
          Consulta Dr. Alberto Souza
        </Text>

        <Text style={styles.valor}>
          R$ 300,00
        </Text>
      </View>

      <Divider />

      <TouchableOpacity
        style={styles.buttonReserva}
        onPress={mostrarMenssagem}
      >
        <Text style={styles.textReserva}>
          Confirmar Reserva
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 30,
  },

  buttonContainer: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 999,
    elevation: 10,
  },

  Title: {
    fontSize: 30,
    color: "#5CC6BA",
    textAlign: "center",
    marginTop: 45,
    marginBottom: 10,
    fontWeight: "600",
  },

  lineC: {
    marginVertical: 25,
  },

  calendar: {
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },

  hora: {
    fontSize: 27,
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "500",
  },

  containerButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: 80,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
  },

  buttonGreen: {
    backgroundColor: "#5CC6BA",
    borderRadius: 10,
    width: 80,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },

  textButtonWhite: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  infoContainer: {
    paddingHorizontal: 25,
    marginTop: 10,
  },

  consulta: {
    fontSize: 20,
    color: "#000",
    marginBottom: 5,
  },

  valor: {
    fontSize: 22,
    color: "#5CC6BA",
    fontWeight: "bold",
  },

  buttonReserva: {
    width: 350,
    height: 50,
    borderRadius: 11,
    backgroundColor: "#5CC6BA",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 25,
  },

  textReserva: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});