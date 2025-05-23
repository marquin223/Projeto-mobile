import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useContext } from "react";
import BotaoPreto from "../components/BotãoPreto";

import { AuthContext } from "../contexts/AuthContext";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      const success = login(username, password);
      if (!success) {
        Alert.alert("Erro", "Credenciais inválidas");
      }
      // ❌ Não faça: navigation.replace("Home")
      // ✅ A navegação será controlada pelo AuthContext
    } else {
      Alert.alert("Erro", "Preencha usuário e senha");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <BotaoPreto title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
