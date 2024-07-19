import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function App() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios.get('http://backend:5000/apartments')
      .then(response => {
        setApartments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Apartment Listings</Text>
      <FlatList
        data={apartments}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
