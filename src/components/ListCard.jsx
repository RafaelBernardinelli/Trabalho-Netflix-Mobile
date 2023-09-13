import { FlatList, View } from "react-native";
import CardMovies from "./CardMovies";

const ListCard = ({ listMovies, navigation, search }) => {
  const navi = (item) => {
    if (!search) navigation.navigate("Detalhes", { movieId: item.id });
    else navigation.navigate("Detalhes", { movieId: item.imdbID });
  };

  const renderMovieItem = ({ item }) => {
    if (!search)
      return (
        <CardMovies
          onPress={() => navi(item)}
          image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        />
      );
    return <CardMovies onPress={() => navi(item)} image={item.Poster} />;
  };

  return (
    <View>
      <FlatList data={listMovies} renderItem={renderMovieItem} numColumns={2} />
    </View>
  );
};

export default ListCard;
