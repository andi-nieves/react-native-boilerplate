import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 20,
  },
});

export default function App() {
  const [modalOpen, setModal] = useState('REACT');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Boilerplate Demo v1</Text>
      </View>
      <TouchableOpacity onPress={() => setModal('NATIVE')}>
        <Text style={styles.textStyle}>{modalOpen}</Text>
      </TouchableOpacity>
    </View>
  );
}
