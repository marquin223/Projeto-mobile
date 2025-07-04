import React, { useContext, useEffect, useState } from "react";
import { Slot, useRouter, usePathname } from "expo-router";
import { AuthProvider, AuthContext } from "../contexts/AuthContext";
import { AnimalProvider } from "../contexts/AnimalContext";
import { View, ActivityIndicator } from "react-native";

export default function Layout() {
  return (
    <AuthProvider>
      <AnimalProvider>
        <RootNavigator />
      </AnimalProvider>
    </AuthProvider>
  );
}

function RootNavigator() {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const verificar = async () => {
      setIsReady(true);
    };
    verificar();
  }, []);

  useEffect(() => {
    if (isReady && !isAuthenticated && pathname !== "/login") {
      router.replace("/login");
    }
  }, [isReady, isAuthenticated, pathname]);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return <Slot />;
}
