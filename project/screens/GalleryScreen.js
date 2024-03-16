import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const GalleryItem = ({ item }) => {
  return <Image style={styles.galleryItem} source={{ uri: item }} />;
};
const FakeGalleryItem = ({ item }) => {
  return (
    <View style={styles.galleryItem}>
      <Text></Text>
    </View>
  );
};

const GalleryScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1,
  ]);

  const getGallery = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://raw.githubusercontent.com/ArtemKostuchenko/MobileLabs/main/data/gallery.json"
      );
      if (response.status === 200) {
        const data = await response.json();
        setData(data.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getGallery();
    });

    return unsubscribe;
  }, [navigation, getGallery]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Фотогалерея</Text>
      <FlatList
        data={data}
        renderItem={loading ? FakeGalleryItem : GalleryItem}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.gallery}
        // removeClippedSubviews={false}
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
