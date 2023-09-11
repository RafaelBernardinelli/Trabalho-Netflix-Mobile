import { SafeAreaView, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text}>Netflix</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
  },
});

export default Header;
