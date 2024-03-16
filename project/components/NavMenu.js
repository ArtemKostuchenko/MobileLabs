import { StyleSheet, Text, View } from "react-native";
import HomeIcon from "../assets/home.svg";
import GalleryIcon from "../assets/gallery.svg";
import ProfileIcon from "../assets/profile.svg";

const NavMenu = () => {
  return (
    <View style={styles.menu}>
      <View style={styles.menuItem}>
        <HomeIcon style={{ ...styles.menuIcon, fill: "#007aff" }} />
        <Text style={{ ...styles.menuText, color: "#007aff" }}>Головна</Text>
      </View>
      <View style={styles.menuItem}>
        <GalleryIcon style={styles.menuIcon} />
        <Text style={styles.menuText}>Фотогалерея</Text>
      </View>
      <View style={styles.menuItem}>
        <ProfileIcon style={styles.menuIcon} />
        <Text style={styles.menuText}>Профіль</Text>
      </View>
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
