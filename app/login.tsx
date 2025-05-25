import React, { useState, useContext } from "react";
import { View, TextInput, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { AuthContext } from "../contexts/AuthContext";
import BotaoPreto from "../components/BotaoPreto";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      const success = login(username, password);
      if (!success) {
        Alert.alert("Erro", "Credenciais inválidas");
      } else {
        router.replace("/");
      }
    } else {
      Alert.alert("Erro", "Preencha usuário e senha");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <BotaoPreto title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
