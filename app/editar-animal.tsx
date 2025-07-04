import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter, useLocalSearchParams } from "expo-router";
import { AnimalContext } from "../contexts/AnimalContext";
import BotaoPreto from "../components/BotaoPreto";
import Voltar from "../components/Voltar";

export default function EditarAnimalScreen() {
  const { id } = useLocalSearchParams();
  const { animais, editarAnimal } = useContext(AnimalContext);
  const router = useRouter();

  const idFinal = Array.isArray(id) ? id[0] : id;
  const animal = animais.find((a) => a.id === idFinal);

  const [nomeEditado, setNomeEditado] = useState(animal?.nome || "");
  const [fotoEditada, setFotoEditada] = useState(animal?.foto || "");
  const [espcieEditada, setEspecieEditada] = useState(animal?.especie || "");
  const [idadeEditada, setIdadeEditada] = useState(animal?.idade || "");

  const selecionarFoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setFotoEditada(result.assets[0].uri);
    }
  };

  const salvar = () => {
    if (animal) {
      editarAnimal(animal.id, {
        id: animal.id,
        nome: nomeEditado,
        foto: fotoEditada,
        especie: espcieEditada,
        idade: idadeEditada,
      });
      router.replace("/");
    }
  };

  return (
    <View style={styles.container}>
      <Voltar />
      <TextInput
        style={styles.input}
        placeholder="Nome do animal"
        value={nomeEditado}
        onChangeText={setNomeEditado}
      />
      <TextInput
        style={styles.input}
        placeholder="Especie do animal"
        value={espcieEditada}
        onChangeText={setEspecieEditada}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do animal"
        value={idadeEditada}
        onChangeText={setIdadeEditada}
      />
      <BotaoPreto title="Selecionar Foto" onPress={selecionarFoto} />
      <BotaoPreto title="Salvar Alterações" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", marginBottom: 10, padding: 10 },
});
