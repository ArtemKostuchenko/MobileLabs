import { StyleSheet, Text, View } from "react-native";

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Фотогаларея</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default GalleryScreen;
