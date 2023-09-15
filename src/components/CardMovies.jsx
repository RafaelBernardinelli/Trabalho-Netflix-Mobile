import { Image, Pressable, StyleSheet } from 'react-native';

const CardMovies = ({ image, ...rest }) => {
  return (
    <Pressable {...rest} style={styles.cardMovies}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.cardImage}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: 170,
    height: 300,
    borderRadius: 15,
    borderColor: '#fff',
    borderWidth: 1,
  },
  cardMovies: {
    width: 170,
    height: 300,
    borderRadius: 15,
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: '#424242',
  },
});

export default CardMovies;
