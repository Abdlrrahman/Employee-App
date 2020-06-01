import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Is this the real life? Is this just fantasy?
      Caught in a landslide, no escape from reality
      Open your eyes, look up to the skies and see
      I'm just a poor boy, I need no sympathy
      Because I'm easy come, easy go, little high, little low
      Any way the wind blows doesn't really matter to me, to me
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
