import { FlatList, StyleSheet, Text, View } from "react-native";

const GalleryItem = ({ item }) => {
  return (
    <View style={styles.galleryItem}>
      <Text>{item}</Text>
    </View>
  );
};

const GalleryScreen = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Фотогалерея</Text>
      <FlatList
        data={data}
        renderItem={GalleryItem}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.gallery}
      />
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
  gallery: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  galleryItem: {
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 100,
    backgroundColor: "#f0f0f0",
  },
});

export default GalleryScreen;
