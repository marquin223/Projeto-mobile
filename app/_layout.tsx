import React, { useContext } from "react";
import { Slot, useRouter } from "expo-router";
import { AuthProvider, AuthContext } from "../contexts/AuthContext";
import { AnimalProvider } from "../contexts/AnimalContext";

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
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setIsReady(true);
  }, []);

  React.useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isReady, isAuthenticated]);

  return <Slot />;
}
