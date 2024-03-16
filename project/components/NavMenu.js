import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeIcon from "../assets/home.svg";
import GalleryIcon from "../assets/gallery.svg";
import ProfileIcon from "../assets/profile.svg";
import { useState } from "react";

const NavMenu = ({ navigation }) => {
  const [selectedScreen, setSelectedScreen] = useState("Home");

  const navigateToScreen = (screen) => {
    setSelectedScreen(screen);
    navigation.current.navigate(screen);
  };

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => navigateToScreen("Home")}>
        <View style={styles.menuItem}>
          <HomeIcon
            style={{
              ...styles.menuIcon,
              fill: selectedScreen === "Home" ? "#007aff" : "#7d7d7d",
            }}
          />
          <Text
            style={{
              ...styles.menuText,
              color: selectedScreen === "Home" ? "#007aff" : "#7d7d7d",
            }}
          >
            Головна
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen("Gallery")}>
        <View style={styles.menuItem}>
          <GalleryIcon
            style={{
              ...styles.menuIcon,
              fill: selectedScreen === "Gallery" ? "#007aff" : "#7d7d7d",
            }}
          />
          <Text
            style={{
              ...styles.menuText,
              color: selectedScreen === "Gallery" ? "#007aff" : "#7d7d7d",
            }}
          >
            Фотогаларея
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen("Profile")}>
        <View style={styles.menuItem}>
          <ProfileIcon
            style={{
              ...styles.menuIcon,
              fill: selectedScreen === "Profile" ? "#007aff" : "#7d7d7d",
            }}
          />
          <Text
            style={{
              ...styles.menuText,
              color: selectedScreen === "Profile" ? "#007aff" : "#7d7d7d",
            }}
          >
            Профіль
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  menuItem: {
    justifyContent: "center",
  },
  menuImage: {
    height: 50,
  },
  menuText: {
    color: "#7d7d7d",
    fontSize: 12,
  },
  menuIcon: {
    height: 30,
    fill: "#7d7d7d",
  },
});

export default NavMenu;
