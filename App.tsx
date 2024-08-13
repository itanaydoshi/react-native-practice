import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  const users = [
    {
      id: 1,
      name: "Anil"
    },
    {
      id: 2,
      name: "Sam"
    },
    {
      id: 3,
      name: "Peter"
    },
    {
      id: 4,
      name: "Bruce"
    },
    {
      id: 5,
      name: "Tony"
    }
  ]

  return (
    <View >
      <Text style={{ fontSize: 31 }}>List with Flat List component</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: "#fff",
    backgroundColor: 'lightblue',
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  }
})
export default App
