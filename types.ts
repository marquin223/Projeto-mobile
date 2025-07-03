export type Animal = {
  nome: string;
  foto?: string;
};

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  NovoAnimal: { animal?: Animal };
  editarAnimal: (animal: Animal) => void;
};
