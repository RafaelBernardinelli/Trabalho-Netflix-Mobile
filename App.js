import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Omdb from './src/screens/Omdb/Omdb';
import TmdbPage from './src/screens/Tmdb/TmdbPage';

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
