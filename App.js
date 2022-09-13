import React from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
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
