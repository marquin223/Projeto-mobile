import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { AnimalContext } from "../contexts/AnimalContext";
import BotaoPreto from "../components/BotaoPreto";

export default function HomeScreen() {
  const { animais } = useContext(AnimalContext);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <BotaoPreto
        title="Cadastrar Animal"
        onPress={() => router.push("/novo-animal")}
      />
      <FlatList
        data={animais}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/detalhes",
                params: { nome: item.nome, foto: item.foto },
              })
            }
          >
            <View style={styles.item}>
              <Text>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: "#ccc" },
});
