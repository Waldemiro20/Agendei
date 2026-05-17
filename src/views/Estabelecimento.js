import React from "react";
import { ScrollView, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import ButtonSeta from "../components/ButtonSeta";
import { Divider } from "../components/Divider";

// CORREÇÃO 1: Adicione { navigation } aqui nos parênteses
export default function Estabelecimento({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Seção da Imagem e Info da Clínica */}
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../assets/foto-clinica.jpg")}
                    style={styles.image}
                />
                <View style={styles.buttonContainer}>
                    <ButtonSeta targetScreen="DadosServicos" />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.titleText}>Clínica São Remo</Text>
                    <Text style={styles.infoText}>Clínica Geral</Text>
                </View>
                <Divider />
            </View>

            <Text style={styles.servicos}>Serviços</Text>
            <Divider />

            {/* Container dos 4 Itens */}
            <View style={styles.servicosContainer}>

                {/* Item 1 */}
                <View style={styles.itemServico}>
                    <View style={styles.textoAgrupado}>
                        <Text style={styles.nomeServico}>Consulta Dr. Alberto Souza</Text>
                        <Text style={styles.precoServico}>R$ 300,00</Text>
                    </View>
                    
                    {/* CORREÇÃO 2 e 3: onPress no Touchable e nome da rota "Agendamentos" */}
                    <TouchableOpacity 
                        style={styles.buttonAgendar}
                        onPress={() => navigation.navigate("Agendamentos")}
                    >
                        <Text style={styles.textButton}>Agendar</Text>
                    </TouchableOpacity>
                </View>
                <Divider />

                {/* Item 2 */}
                <View style={styles.itemServico}>
                    <View style={styles.textoAgrupado}>
                        <Text style={styles.nomeServico}>Consulta Dra. Maria Alice</Text>
                        <Text style={styles.precoServico}>R$ 450,00</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.buttonAgendar}
                        onPress={() => navigation.navigate("Agendamentos")}
                    >
                        <Text style={styles.textButton}>Agendar</Text>
                    </TouchableOpacity>
                </View>
                <Divider />

                {/* Item 3 */}
                <View style={styles.itemServico}>
                    <View style={styles.textoAgrupado}>
                        <Text style={styles.nomeServico}>Exame Mamografia</Text>
                        <Text style={styles.precoServico}>R$ 620,00</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.buttonAgendar}
                        onPress={() => navigation.navigate("Agendamentos")}
                    >
                        <Text style={styles.textButton}>Agendar</Text>
                    </TouchableOpacity>
                </View>
                <Divider />

                {/* Item 4 */}
                <View style={styles.itemServico}>
                    <View style={styles.textoAgrupado}>
                        <Text style={styles.nomeServico}>Exame Ultrassom</Text>
                        <Text style={styles.precoServico}>R$ 270,00</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.buttonAgendar}
                        onPress={() => navigation.navigate("Agendamentos")}
                    >
                        <Text style={styles.textButton}>Agendar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#fff"
    },
    imageContainer: {
        position: "relative"
    },
    image: {
        width: "100%",
        height: 250,
        marginTop: -20
    },
    buttonContainer: {
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 10
    },
    infoContainer: {
        paddingHorizontal: 20,
        marginTop: 15
    },
    titleText: {
        fontSize: 22,
        color: "#7E7D7D",
        fontWeight: "600"
    },
    infoText: {
        fontSize: 17,
        color: "#A0A0A0",
        marginBottom: 10
    },
    servicos: {
        fontSize: 30,
        color: "#5CC6BA",
        marginHorizontal: 29,
        marginVertical: 15
    },

    // AJUSTE DO CSS DOS SERVIÇOS
    servicosContainer: {
        paddingHorizontal: 29
    },
    itemServico: {
        flexDirection: "row",        // Coloca texto e botão lado a lado
        justifyContent: "space-between", // Empurra o botão para a direita
        alignItems: "center",        // Alinha o botão no meio da altura do texto
        paddingVertical: 15,
    },
    textoAgrupado: {
        flex: 1, // Faz o texto ocupar o espaço da esquerda sem esmagar o botão
    },
    nomeServico: {
        fontSize: 18,
        color: "#8e8e8e",
        fontWeight: "500"
    },
    precoServico: {
        fontSize: 16,
        color: "#5CC6BA",
        marginTop: 2
    },
    buttonAgendar: {
        backgroundColor: "#5CC6BA",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 12,
        marginLeft: 10,
        minWidth: 90,
        alignItems: "center",
    },
    textButton: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14
    }
});