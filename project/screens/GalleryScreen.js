import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

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
      <ScrollView style={styles.container}>
        <FlatList
          data={data}
          renderItem={GalleryItem}
          keyExtractor={(item) => item.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.gallery}
        />
      </ScrollView>
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
    flex: 1,
    paddingHorizontal: 15,
    gap: 10,
  },
  row: {
    gap: 15,
  },
  galleryItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
});

export default GalleryScreen;
