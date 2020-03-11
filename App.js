import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>110719041黃筠婷</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDD55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'#AA7700',
    fontSize:30,
  },
});
