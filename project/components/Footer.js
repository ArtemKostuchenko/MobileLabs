import { StyleSheet, View, Text } from "react-native";

const Footer = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Костюченко А.В, ІПЗ-20-4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#ededed",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "400",
    fontStyle: "italic",
  },
});

export default Footer;
