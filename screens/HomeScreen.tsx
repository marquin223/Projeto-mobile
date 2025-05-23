import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AnimalContext } from "../contexts/AnimalContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import BotaoPreto from "../components/BotãoPreto";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function HomeScreen({ navigation }: Props) {
  const { animais } = useContext(AnimalContext);

  return (
    <View style={styles.container}>
      <BotaoPreto
        title="Cadastrar Animal"
        onPress={() => navigation.navigate("NovoAnimal", { animal: undefined })}
      />
      <FlatList
        data={animais}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: "#ccc" },
});
