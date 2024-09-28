import { StyleSheet, Text, View } from 'react-native';
import AppBar from './components/AppBar/AppBar';
import Auth from './components/Auth/Auth';
import { useState } from 'react';

export default function App() {
  const [appTitle, setAppTitle] = useState("Home")
  return (
    <View style={styles.container}>
      <AppBar title={appTitle} />
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpTitle}>{appTitle}</Text>
        <Auth setAppTitle={setAppTitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpTitle: {
    fontSize: 30,
    color: 'white',
  },
  signUpContainer: {
    width: 200,
    height: 'auto',
  },
  container: {
    flex: 1,
    backgroundColor: '#0398fc',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
