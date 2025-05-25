import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Voltar from "../components/Voltar";

export default function AnimalDetailsScreen() {
  const { nome, foto } = useLocalSearchParams();

  const nomeFinal = Array.isArray(nome) ? nome[0] : nome;
  const fotoFinal = Array.isArray(foto) ? foto[0] : foto;

  return (
    <View style={styles.container}>
      <Voltar />
      <Text style={styles.name}>{nomeFinal}</Text>
      {fotoFinal && <Image source={{ uri: fotoFinal }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  name: { fontSize: 24, marginBottom: 10 },
  image: { width: 200, height: 200, resizeMode: "contain" },
});
