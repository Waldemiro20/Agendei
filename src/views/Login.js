import { View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { Divider } from "../components/Divider";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // usuário fixo
  const USER = {
    email: "waldemiro@gmail.com",
    senha: "1234567",
  };

  function handleLogin() {
    if (email === USER.email && senha === USER.senha) {
      navigation.replace("Home"); // 👈 vai pra Home
    } else {
      alert("Email ou senha incorretos, tente novamente.");
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Logo style={styles.logo} />

      <Divider style={{ marginTop: 30 }} />

      <View style={styles.inputs}>
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <Input
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Acessar" onPress={handleLogin} style={styles.button} />
      </View>

      <Divider style={{ marginTop: 300 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 20,
  },

  inputs: {
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },

  input: {
    width: 357,
    height: 56,
    borderRadius: 50,
    alignSelf: "center",


  },


  logo: {
    marginTop: 44,
    marginBottom: 0,
    alignSelf: "center",
  },
});