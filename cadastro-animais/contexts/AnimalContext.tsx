import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Animal } from "../types";
import { Alert } from "react-native";

type AnimalContextType = {
  animais: Animal[];
  adicionarAnimal: (animal: Animal) => void;
  editarAnimal: (animal: Animal) => void;
  removerAnimal: (id: string) => void;
};

export const AnimalContext = createContext<AnimalContextType>(
  {} as AnimalContextType
);

export const AnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const [animais, setAnimais] = useState<Animal[]>([]);

  useEffect(() => {
    carregarAnimais();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("@animais", JSON.stringify(animais));
  }, [animais]);

  const carregarAnimais = async () => {
    const dados = await AsyncStorage.getItem("@animais");
    if (dados) {
      setAnimais(JSON.parse(dados));
    }
  };

  const adicionarAnimal = (animal: Animal) => {
    setAnimais((prev) => [...prev, animal]);
  };

  const editarAnimal = (atualizado: Animal) => {
    setAnimais((prev) =>
      prev.map((a) => (a.id === atualizado.id ? atualizado : a))
    );
  };

  const removerAnimal = (id: string) => {
    setAnimais((prev) => prev.filter((a) => a.id !== id));
  };

  const resetarAnimais = async () => {
    await AsyncStorage.removeItem("@animais");
    Alert.alert("Dados apagados");
    setAnimais([]);
  };

  return (
    <AnimalContext.Provider
      value={{ animais, adicionarAnimal, editarAnimal, removerAnimal }}
    >
      {children}
    </AnimalContext.Provider>
  );
};
