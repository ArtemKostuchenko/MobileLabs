import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import GalleryScreen from "./screens/GalleryScreen";
import { useRef } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useRef(null);

  return (
    <NavigationContainer initialRouteName="Home" ref={navigationRef}>
      <View style={styles.container}>
        <Header />
        <NavMenu navigation={navigationRef} />
        <Stack.Navigator screenOptions={{ animation: "none" }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Gallery"
            component={GalleryScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
