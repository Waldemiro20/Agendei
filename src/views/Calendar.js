import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Divider } from "../components/Divider";
import { Button } from "../components/Button";
import { TabBar } from "../components/TabBar";
import ButtonSeta from "../components/ButtonSeta";

const CALENDAR_ASSETS = {
  data: require("../../assets/calendar2.png"),
  valor: require("../../assets/valor.png"),
  endereco: require("../../assets/pin.png"),
  hora: require("../../assets/clock.png"),
};

function LinhaComIcone({ imageKey, children, alignTop, containerStyle }) {
  const source = CALENDAR_ASSETS[imageKey];
  if (!source) {
    return (
      <View style={[styles.rowIconText, containerStyle]}>{children}</View>
    );
  }
  return (
    <View
      style={[
        styles.rowIconText,
        alignTop && styles.rowIconTextTop,
        containerStyle,
      ]}
    >
      <Image source={source} style={styles.image} />
      {children}
    </View>
  );
}

export default function Calendar() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View
        style={[
          styles.buttonSetaContainer,
          { top: Math.max(insets.top, 12) + 4 },
        ]}
        pointerEvents="box-none"
      >
        <ButtonSeta
          targetScreen="Home"
          containerStyle={styles.buttonSetaInner}
          iconStyle={styles.buttonSetaIcon}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.titlePrincipal}>Minhas Reservas</Text>
      <Divider />
      <View>
        <Text style={styles.titleConsulta}>Consulta Dr. Alberto Souza</Text>
        <Text style={styles.titleClinica}>Clínica Médica São Remo</Text>
      </View>

      <View style={styles.DadosC}>
        <View style={styles.linhaDataHora}>
          <LinhaComIcone imageKey="data">
            <Text style={styles.Text}>18/02/2021</Text>
          </LinhaComIcone>
          <LinhaComIcone imageKey="hora" containerStyle={styles.horaProximaData}>
            <Text style={styles.TextHora}>09:30h</Text>
          </LinhaComIcone>
        </View>

        <LinhaComIcone imageKey="valor">
          <Text style={styles.Text}>R$ 350,00</Text>
        </LinhaComIcone>

        <LinhaComIcone imageKey="endereco" alignTop>
          <Text style={styles.Text}>
            {"Av. Nove de Julho, 854\nCentro - São Paulo\n(11) 0000-0000"}
          </Text>
        </LinhaComIcone>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Reagendar"
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Button
          title="Excluir reserva"
          style={styles.button}
          textStyle={styles.buttonText}
          backgroundColor="#DF5951"
        />
      </View>
      <Divider />

      <View>
        <Text style={styles.titleConsulta}>Consulta Dr. Alberto Souza</Text>
        <Text style={styles.titleClinica}>Clínica Médica São Remo</Text>
      </View>

      <View style={styles.DadosC}>
        <View style={styles.linhaDataHora}>
          <LinhaComIcone imageKey="data">
            <Text style={styles.Text}>18/02/2021</Text>
          </LinhaComIcone>
          <LinhaComIcone imageKey="hora" containerStyle={styles.horaProximaData}>
            <Text style={styles.TextHora}>09:30h</Text>
          </LinhaComIcone>
        </View>

        <LinhaComIcone imageKey="valor">
          <Text style={styles.Text}>R$ 350,00</Text>
        </LinhaComIcone>

        <LinhaComIcone imageKey="endereco" alignTop>
          <Text style={styles.Text}>
            {"Av. Nove de Julho, 854\nCentro - São Paulo\n(11) 0000-0000"}
          </Text>
        </LinhaComIcone>
      </View>

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
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    paddingBottom: 8,
    backgroundColor: "#FFFFFF",
  },

  buttonSetaContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 999,
    elevation: 10,
  },

  buttonSetaInner: {
    paddingTop: 0,
    paddingHorizontal: 12,
  },

  buttonSetaIcon: {
    marginTop: 0,
  },

  titlePrincipal: {
    fontSize: 30,
    color: "#5CC6BA",
    marginHorizontal: 100,
    marginTop: 45,
    marginBottom: 20,
  },

  titleConsulta: {
    fontSize: 22,
    marginHorizontal: 20,
  },

  titleClinica: {
    fontSize: 20,
    color: "#717F7F",
    marginHorizontal: 20,
  },

  DadosC: {
    gap: 10,
    marginHorizontal: 25,
    marginVertical: 10,
  },

  linhaDataHora: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  horaProximaData: {
    marginLeft: 20,
  },

  Text: {
    fontSize: 20,
    flexShrink: 1,
  },

  TextHora: {
    fontSize: 20,
  },

  image: {
    width: 32,
    height: 32,
  },

  rowIconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  rowIconTextTop: {
    alignItems: "flex-start",
  },

  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 12,
  },

  button: {
    width: 170,
    minHeight: 46,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 11,
  },

  buttonText: {
    fontSize: 22,
    lineHeight: 18,
  },

  LineB: {
    marginVertical: 0,
  },

  footer: {
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
});
