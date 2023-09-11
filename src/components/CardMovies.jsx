import { Image, Pressable, StyleSheet } from "react-native";

const CardMovies = ({ data, ...rest }) => {
  return (
    <Pressable {...rest} style={styles.cardMovies}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        }}
        style={styles.cardImage}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: 190,
    height: 300,
    borderRadius: 15,
  },
  cardMovies: {
    width: 190,
    height: 300,
    borderRadius: 15,
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: "#424242",
  },
});

export default CardMovies;
