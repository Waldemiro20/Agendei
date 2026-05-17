import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Divider } from "../components/Divider";
import { TabBar } from "../components/TabBar";

export default function DadosUser() {
    return (
        <View style={styles.screen}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
            >
                <Text style={styles.Title}>Meu Perfil</Text>
                <Divider />

                <View style={styles.containerNome}>
                    <Text style={styles.nomeC}>Nome</Text>
                    <Text style={styles.nomeB}>Heber Stein Mazutti</Text>
                </View>
                <Divider />

                <View style={styles.containerEmail}>
                    <Text style={styles.emailC}>Email</Text>
                    <Text style={styles.emailB}>heber@99coders.com.br</Text>
                </View>
                <Divider />
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

    scroll: {
        flex: 1,
    },

    scrollContent: {
        paddingBottom: 8,
        backgroundColor: "#FFFFFF",
    },

    Title: {
        fontSize: 30,
        color: "#5CC6BA",
        marginHorizontal: 135,
        marginVertical: 20,
    },

    containerNome: {
        marginHorizontal: 40,
        marginVertical: 10,
    },

    nomeC: {
        fontSize: 20,
        color: "#717F7F",
    },

    nomeB: {
        fontSize: 20,
        color: "#A0A0A0",
    },

    containerEmail: {
        marginHorizontal: 40,
        marginVertical: 10,
    },

    emailC: {
        fontSize: 20,
        color: "#717F7F",
    },

    emailB: {
        fontSize: 20,
        color: "#A0A0A0",
    },

    LineB: {
        marginVertical: 0,
    },

    footer: {
        backgroundColor: "#fff",
        paddingBottom: 10,
    },
});