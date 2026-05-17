import { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TabBar } from "../components/TabBar";
import { Divider } from "../components/Divider";
import { Input } from "../components/Input";
import ButtonSeta from "../components/ButtonSeta";
import { useClinicSearchFocus } from "../context/ClinicSearchFocusContext";
import {SaoGabriel,SaoRemo,Assis,Integrada,} from "../data/DatasServices";

const CLINIC_GROUPS = [
  { key: "saoGabriel", lines: SaoGabriel },
  { key: "saoRemo", lines: SaoRemo },
  { key: "assis", lines: Assis },
  { key: "integrada", lines: Integrada },
];

function normalize(s) {
  return s.trim().toLowerCase();
}

function clinicMatches(lines, query) {
  const q = normalize(query);
  if (!q) return true;
  return lines.some((line) => normalize(line).includes(q));
}

export default function DadosServicos() {
  const navigation = useNavigation();
  const route = useRoute();
  const [search, setSearch] = useState("");
  const { setClinicSearchInputRef, focusClinicSearch } = useClinicSearchFocus();

  useEffect(() => {
    const token = route.params?.focusSearch;
    if (token == null) return;
    const t = setTimeout(() => {
      focusClinicSearch();
      navigation.setParams({ focusSearch: undefined });
    }, 100);
    return () => clearTimeout(t);
  }, [route.params?.focusSearch, focusClinicSearch, navigation]);

  const filteredGroups = useMemo(
    () => CLINIC_GROUPS.filter(({ lines }) => clinicMatches(lines, search)),
    [search]
  );

  return (
    <View style={styles.screen}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <ButtonSeta targetScreen="Home" />
        <Text style={styles.Explore}>Explorar</Text>
        <Text style= {styles.TextMedico}>Médico</Text>

        <View style={styles.searchSection}>
          <View style={styles.searchContainer}>
            <Input
              ref={setClinicSearchInputRef}
              style={styles.searchInput}
              placeholder="Pesquisar"
              value={search}
              onChangeText={setSearch}
              backgroundColor="#E9E9E9"
            />
          </View>
        </View>

        {filteredGroups.map(({ key, lines }) => (
          <TouchableOpacity
            key={key}
            style={styles.group}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Estabelecimento")}
          >
            {lines.map((line, index) => (
              <Text
                key={index}
                style={index === 0 ? styles.clinicName : styles.clinicInfo}
              >
                {line}
              </Text>
            ))}
            <Divider style={styles.groupDivider} />
          </TouchableOpacity>
        ))}

        {filteredGroups.length === 0 ? (
          <Text style={styles.empty}>Nenhuma clínica encontrada.</Text>
        ) : null}
      </ScrollView>

      <View style={styles.footer}>
        <Divider style={styles.lineDivider} />
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

  Explore:{
    color: "#5cc6ba",
    fontSize: 35,
    marginHorizontal: 150,
    marginTop: 30,    
  },

  TextMedico:{
    fontSize: 25,
    marginHorizontal: 165,
    marginTop: 10,

  },

  searchSection: {
    marginTop: 35,
    marginBottom: 8,
  },
  searchContainer: {
    paddingHorizontal: 20,
  },
  searchInput: {
    fontSize: 23,
    marginBottom: 15,
    paddingRight: 30,
    paddingLeft: 30,
  },
  group: {
    marginBottom: 26,
    paddingHorizontal: 20,
   
  },
  groupDivider: {
    marginTop: 8,
  },
  clinicName: {
    fontSize: 20,
    color: "#717F7F",
    marginBottom: 8,
  },
  clinicInfo: {
    fontSize: 20,
    color: "#A0A0A0",
    marginBottom: 8,
  },
  empty: {
    marginHorizontal: 20,
    marginTop: 12,
    fontSize: 16,
    color: "#717F7F",
  },
  lineDivider: {
    marginVertical: 0,
    color: "#ECECEC",
  },
  footer: {
    backgroundColor: "#ECECEC",
    paddingBottom: 10,
  },
});
