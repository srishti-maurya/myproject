import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

/*
text inside the views do not inherit the views style 
text inside the text inherits the style 
*/

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.boldText}>
          Lorem ipsum <Text>test part</Text> dolor sit ame
        </Text>
        <Text>Lorem ipsum dolor sit ame</Text>
        <Text>Lorem ipsum dolor sit ame</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
});
