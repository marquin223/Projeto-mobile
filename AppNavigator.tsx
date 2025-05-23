import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AnimalFormScreen from "./screens/AnimalFormScreen";
import AnimalDetailsScreen from "./screens/AnimalDetailsScreen";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import { AnimalProvider } from "./contexts/AnimalContext";
import { RootStackParamList } from "./types"; // 👈 IMPORTA os tipos

const Stack = createNativeStackNavigator<RootStackParamList>(); // 👈 APLICA O TIPO

export default function AppNavigator() {
  return (
    <AuthProvider>
      <AnimalProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </AnimalProvider>
    </AuthProvider>
  );
}

function MainStack() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NovoAnimal" component={AnimalFormScreen} />
          <Stack.Screen name="Detalhes" component={AnimalDetailsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
