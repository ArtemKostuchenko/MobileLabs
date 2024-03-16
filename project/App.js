import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NavMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
