export type Animal = {
  id: string;
  nome: string;
  foto?: string;
};

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  NovoAnimal: { animal?: Animal };
  Detalhes: { animal: Animal };
};
