import { StyleSheet, StatusBar } from "react-native";
import { Provider } from "react-redux";

import BottomNavigator from "./src/navigation/BottomNavigation";

import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="aqua" barStyle="light-content" />
      <BottomNavigator />
    </Provider>
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
