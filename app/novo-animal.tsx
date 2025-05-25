import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { AnimalContext } from "../contexts/AnimalContext";
import BotaoPreto from "../components/BotaoPreto";
import Voltar from "../components/Voltar";

export default function AnimalFormScreen() {
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const { adicionarAnimal } = useContext(AnimalContext);
  const router = useRouter();

  const selecionarFoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  };

  const salvar = () => {
    if (nome.trim()) {
      adicionarAnimal({ nome, foto });
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <Voltar />
      <TextInput
        style={styles.input}
        placeholder="Nome do animal"
        value={nome}
        onChangeText={setNome}
      />
      <BotaoPreto title="Salvar" onPress={salvar} />
      <BotaoPreto title="Selecionar Foto" onPress={selecionarFoto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", marginBottom: 10, padding: 10 },
});
