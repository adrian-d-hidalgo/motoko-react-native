import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, View } from "react-native";

import { useAuth } from "@bundly/ares-react";
import { InternetIdentityMidlewareButton, LogoutButton } from "@bundly/ares-react-native";

export default function IndexScreen() {
  const { isAuthenticated, currentIdentity } = useAuth();

  const handlePress = () => {
    Alert.alert("Principal", currentIdentity.getPrincipal().toString());
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? <LogoutButton identity={currentIdentity} /> : <InternetIdentityMidlewareButton />}
      <Button title="Get principal" onPress={handlePress} />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
