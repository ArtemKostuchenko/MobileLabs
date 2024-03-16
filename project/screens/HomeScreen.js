import { ScrollView, StyleSheet, Text, View } from "react-native";
import ImageEmpty from "../assets/image-empty.svg";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Новини</Text>
      <ScrollView style={styles.news}>
        <View style={styles.newsItem}>
          <View style={styles.fakeImage}>
            <ImageEmpty height={60} fill="#7d7d7d" />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.newsTitle}>Заголовок новини</Text>
            <Text style={styles.newsCreate}>Дата новини</Text>
            <Text style={styles.newsDescription}>Короткий текст новини</Text>
          </View>
        </View>
        <View style={styles.newsItem}>
          <View style={styles.fakeImage}>
            <ImageEmpty height={60} fill="#7d7d7d" />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.newsTitle}>Заголовок новини</Text>
            <Text style={styles.newsCreate}>Дата новини</Text>
            <Text style={styles.newsDescription}>Короткий текст новини</Text>
          </View>
        </View>
        <View style={styles.newsItem}>
          <View style={styles.fakeImage}>
            <ImageEmpty height={60} fill="#7d7d7d" />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.newsTitle}>Заголовок новини</Text>
            <Text style={styles.newsCreate}>Дата новини</Text>
            <Text style={styles.newsDescription}>Короткий текст новини</Text>
          </View>
        </View>
        <View style={styles.newsItem}>
          <View style={styles.fakeImage}>
            <ImageEmpty height={60} fill="#7d7d7d" />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.newsTitle}>Заголовок новини</Text>
            <Text style={styles.newsCreate}>Дата новини</Text>
            <Text style={styles.newsDescription}>Короткий текст новини</Text>
          </View>
        </View>
        <View style={styles.newsItem}>
          <View style={styles.fakeImage}>
            <ImageEmpty height={60} fill="#7d7d7d" />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.newsTitle}>Заголовок новини</Text>
            <Text style={styles.newsCreate}>Дата новини</Text>
            <Text style={styles.newsDescription}>Короткий текст новини</Text>
          </View>
        </View>
        <View style={styles.newsItem}>
          <View style={styles.fakeImage}>
            <ImageEmpty height={60} fill="#7d7d7d" />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.newsTitle}>Заголовок новини</Text>
            <Text style={styles.newsCreate}>Дата новини</Text>
            <Text style={styles.newsDescription}>Короткий текст новини</Text>
          </View>
        </View>
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
  news: {
    flex: 1,
    paddingHorizontal: 15,
    gap: 10,
  },
  newsItem: {
    flex: 0,
    flexDirection: "row",
    gap: 20,
  },
  fakeImage: {
    width: 100,
    height: 90,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  newsCreate: {
    fontSize: 14,
    fontWeight: "300",
  },
  newsDescription: {
    fontWeight: "100",
    fontSize: 15,
  },
});

export default HomeScreen;
