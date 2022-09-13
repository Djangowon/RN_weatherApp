import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const getPermission = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
  };

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>23</Text>
          <Text style={styles.description}>Windy</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>23</Text>
          <Text style={styles.description}>Windy</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>23</Text>
          <Text style={styles.description}>Windy</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>23</Text>
          <Text style={styles.description}>Windy</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#64b5f6",
    backgroundColor: "#90caf9",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 65,
    fontWeight: "700",
  },
  weather: {
    backgroundColor: "#bbdefb",
  },
  day: {
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 170,
  },
  description: {
    fontSize: 60,
  },
});
