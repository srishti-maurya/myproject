import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

/*
text inside the views do not inherit the views style 
text inside the text inherits the style 
*/

export default function App() {
  const [name, setName] = useState("mary");
  const [person, setPerson] = useState({ name: "mario", age: 20 });
  const buttonHandler = () => {
    setName("srishti");
    setPerson({ name: "Jack", age: 30 });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!</Text>
        <Text>My name is {name}</Text>
      </View>
      <View style={styles.body}>
        <Text>
          His name is {person.name} and his age is {person.age}
        </Text>
        <Text style={styles.boldText}>
          Lorem ipsum <Text>test part</Text> dolor sit ame
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={buttonHandler} />
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
  buttonContainer: {
    backgroundColor: "gray",
    marginTop: 20,
  },
});
