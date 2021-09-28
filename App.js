import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

/*
      flatview automatically has scroll view 
      and it does not require a unique key 
      it is prefered over scrollview bcoz on render it does not 
      loads all the items of the list instead loads only first few and accordingly on the scroll of view 
      comparetively scrollview renders all the items of the list at once (initially) 
      
*/

export default function App() {
  const [list, setList] = useState([
    { name: "Jack", id: "1" },
    { name: "Jacky", id: "2" },
    { name: "Joe", id: "3" },
    { name: "John", id: "4" },
    { name: "Mary", id: "5" },
    { name: "Mathew", id: "6" },
    { name: "Mario", id: "7" },
    { name: "Kelvin", id: "8" },
    { name: "Kim", id: "9" },
    { name: "Tim", id: "10" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={({ item }) => <Text style={styles.list}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  list: {
    padding: 30,
    marginTop: 50,
    backgroundColor: "#CEE5D0",
    fontSize: 24,
    marginHorizontal: 10,
  },
});
