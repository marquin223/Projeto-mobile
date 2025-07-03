import React, { useCallback, useContext, useState } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useFocusEffect } from "@react-navigation/native";
import { AnimalContext } from "../contexts/AnimalContext";
import BotaoPreto from "../components/BotaoPreto";

type Props = NativeStackScreenProps<RootStackParamList, "Detalhes">;

export default function AnimalDetailsScreen({ route, navigation }: Props) {
  const { animal: animalOriginal } = route.params;

  const { animais, removerAnimal } = useContext(AnimalContext);

  const [animal, setAnimal] = useState(animalOriginal);

  useFocusEffect(
    useCallback(() => {
      const atualizado = animais.find((a) => a.id === animalOriginal.id);
      if (atualizado) {
        setAnimal(atualizado);
      }
    }, [animais])
  );

  const excluir = () => {
    Alert.alert("Excluir", "Deseja remover este animal?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: () => {
          removerAnimal(animal.id);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{animal.nome}</Text>
      {animal.foto && (
        <Image source={{ uri: animal.foto }} style={styles.image} />
      )}

      <View style={styles.buttons}>
        <BotaoPreto title="Voltar" onPress={() => navigation.goBack()} />
        <BotaoPreto
          title="Editar"
          onPress={() => navigation.navigate("NovoAnimal", { animal })}
        />
        <BotaoPreto title="Excluir" onPress={excluir} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  name: { fontSize: 24, marginBottom: 10 },
  image: { width: 200, height: 200, resizeMode: "contain" },
  buttons: { marginTop: 20, width: "100%", gap: 10 },
});
