import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Animal = {
  id: string;
  nome: string;
  foto?: string;
  especie: string;
  idade: string;
};

type AnimalContextType = {
  animais: Animal[];
  adicionarAnimal: (animal: Omit<Animal, "id">) => void;
  editarAnimal: (id: string, novoAnimal: Animal) => void;
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

  const adicionarAnimal = (animal: Omit<Animal, "id">) => {
    const novoAnimal: Animal = {
      ...animal,
      id: Math.random().toString(36).substring(2, 10),
    };
    setAnimais((prev) => [...prev, novoAnimal]);
  };

  const editarAnimal = (id: string, novoAnimal: Animal) => {
    setAnimais((prev) =>
      prev.map((a) => (a.id === id ? { ...novoAnimal, id } : a))
    );
  };

  const removerAnimal = (id: string) => {
    setAnimais((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <AnimalContext.Provider
      value={{ animais, adicionarAnimal, editarAnimal, removerAnimal }}
    >
      {children}
    </AnimalContext.Provider>
  );
};
