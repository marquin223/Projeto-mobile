import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, Alert, Platform } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Voltar from "../components/Voltar";
import BotaoPreto from "../components/BotaoPreto";
import { AnimalContext } from "../contexts/AnimalContext";

export default function AnimalDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { animais, removerAnimal } = useContext(AnimalContext);

  const idFinal = Array.isArray(id) ? id[0] : id;
  const animal = animais.find((a) => a.id === idFinal);

  if (!animal) {
    return <Text>Animal não encontrado.</Text>;
  }

  const excluir = () => {
    if (Platform.OS === "web") {
      const confirmado = window.confirm(`Excluir ${animal.nome}?`);
      if (confirmado) {
        removerAnimal(animal.id);
        router.replace("/");
      }
    } else {
      Alert.alert("Confirmar exclusão", `Excluir ${animal.nome}?`, [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            removerAnimal(animal.id);
            router.replace("/");
          },
        },
      ]);
    }
  };

  const editar = () => {
    router.push({
      pathname: "/editar-animal",
      params: { id: animal.id },
    });
  };

  return (
    <View style={styles.container}>
      <Voltar />
      <Text style={styles.name}>{animal.nome}</Text>
      {animal.foto && (
        <Image source={{ uri: animal.foto }} style={styles.image} />
      )}
      <Text style={styles.opcoes}>{animal.especie}</Text>
      <Text style={styles.opcoes}>{animal.idade}</Text>
      <BotaoPreto title="Editar" onPress={editar} />
      <BotaoPreto title="Excluir" onPress={excluir} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  name: { fontSize: 24, marginBottom: 10 },
  image: { width: 200, height: 200, resizeMode: "contain" },
  opcoes: { fontSize: 20, marginBottom: 10 },
});
