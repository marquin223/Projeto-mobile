import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Voltar() {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
      <Text style={styles.texto}>⬅ Voltar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  texto: {
    color: "#fff",
    fontSize: 16,
  },
});
