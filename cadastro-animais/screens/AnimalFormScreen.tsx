import React, { useState, useContext, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AnimalContext } from "../contexts/AnimalContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import BotaoPreto from "../components/BotaoPreto";

type Props = NativeStackScreenProps<RootStackParamList, "NovoAnimal">;

export default function AnimalFormScreen({ navigation, route }: Props) {
  const { animal: animalEdicao } = route.params || {};
  const { adicionarAnimal, editarAnimal } = useContext(AnimalContext);

  const [nome, setNome] = useState(animalEdicao?.nome || "");
  const [foto, setFoto] = useState(animalEdicao?.foto || "");

  useEffect(() => {
    if (animalEdicao) {
      navigation.setOptions({ title: "Editar Animal" });
    } else {
      navigation.setOptions({ title: "Novo Animal" });
    }
  }, [animalEdicao]);

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
    if (!nome.trim()) return;

    if (animalEdicao) {
      editarAnimal({ ...animalEdicao, nome, foto });
    } else {
      adicionarAnimal({ id: Date.now().toString(), nome, foto });
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do animal"
        value={nome}
        onChangeText={setNome}
      />
      <BotaoPreto title="Selecionar Foto" onPress={selecionarFoto} />
      <BotaoPreto title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
