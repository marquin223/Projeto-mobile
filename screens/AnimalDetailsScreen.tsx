import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";

type Props = {
  route: RouteProp<RootStackParamList, "Detalhes">;
};

export default function AnimalDetailsScreen({ route }: Props) {
  const { animal } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{animal.nome}</Text>
      {animal.foto && (
        <Image source={{ uri: animal.foto }} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  name: { fontSize: 24, marginBottom: 10 },
  image: { width: 200, height: 200, resizeMode: "contain" },
});
