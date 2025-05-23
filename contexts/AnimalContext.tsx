// contexts/AnimalContext.tsx
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Animal = {
  nome: string;
  foto?: string;
};

type AnimalContextType = {
  animais: Animal[];
  adicionarAnimal: (animal: Animal) => void;
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

  return (
    <AnimalContext.Provider value={{ animais, adicionarAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};
