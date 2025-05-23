import AsyncStorage from "@react-native-async-storage/async-storage";
import { Animal } from "../types";

const STORAGE_KEY = "@animais";

export async function salvarAnimal(animal: Animal) {
  const animais = await listarAnimais();
  animais.push(animal);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(animais));
}

export async function listarAnimais(): Promise<Animal[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
