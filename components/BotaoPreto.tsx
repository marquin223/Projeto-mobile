import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BotaoPreto({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginVertical: 8,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
