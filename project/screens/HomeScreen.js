import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ImageEmpty from "../assets/image-empty.svg";
import { useCallback, useEffect, useState } from "react";
import { truncateText } from "../utils/functions";

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getNews = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://raw.githubusercontent.com/ArtemKostuchenko/MobileLabs/main/data/news.json"
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
      getNews();
    });

    return unsubscribe;
  }, [navigation, getNews]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Новини</Text>
      <ScrollView style={styles.news}>
        {loading && Boolean(data.length) && (
          <>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <View style={styles.newsItem} key={index}>
                  <View style={styles.fakeImage}>
                    <ImageEmpty height={60} fill="#7d7d7d" />
                  </View>
                  <View style={styles.fakeContent}>
                    <View style={styles.fakeTitle}></View>
                    <View style={styles.fakeDate}></View>
                    <View style={styles.fakeDescription}></View>
                  </View>
                </View>
              );
            })}
          </>
        )}
        {!loading && Boolean(data.length) && (
          <>
            {data.map((news) => {
              return (
                <View style={styles.newsItem} key={news.id}>
                  <Image
                    source={{ uri: news.imageURL }}
                    style={styles.newsImage}
                  />
                  <View style={styles.textContent}>
                    <Text style={styles.newsTitle}>
                      {truncateText(news.title, 22)}
                    </Text>
                    <Text style={styles.newsCreate}>{news.dateTime}</Text>
                    <Text style={styles.newsDescription}>
                      {truncateText(news.description, 27)}
                    </Text>
                  </View>
                </View>
              );
            })}
          </>
        )}
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
  },
  newsItem: {
    paddingVertical: 5,
    flex: 0,
    flexDirection: "row",
    gap: 20,
  },
  fakeImage: {
    width: 100,
    height: 90,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
  },
  newsImage: {
    width: 100,
    height: 90,
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
  fakeContent: {
    flex: 1,
    gap: 5,
  },
  fakeTitle: {
    height: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 3,
  },
  fakeDate: {
    height: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 3,
  },
  fakeDescription: {
    height: 18,
    backgroundColor: "#f2f2f2",
    borderRadius: 3,
  },
});

export default HomeScreen;
