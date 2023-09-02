import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TmdbPage from "./screens/TmdbPage";
import Omdb from './src/screens/Omdb/Omdb';

export default function App() {
  return (
    <View style={styles.container}>
      <TmdbPage />
      <Omdb />
      <StatusBar style="auto" />
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
});
