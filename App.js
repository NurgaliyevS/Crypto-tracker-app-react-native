import { StyleSheet, StatusBar } from "react-native";

import BottomNavigator from "./src/navigation/BottomNavigation";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="aqua" barStyle="light-content" />
      <BottomNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
