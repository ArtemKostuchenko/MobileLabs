import { StyleSheet, Image, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/university-colored.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>First Mobile App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 70,
  },
  logo: {
    width: 131,
    height: 40,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Header;
