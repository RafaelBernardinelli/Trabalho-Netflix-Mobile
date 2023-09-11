import { FlatList, View } from "react-native";
import CardMovies from "./CardMovies";

const ListCard = ({ listMovies, navigation }) => {
  const navi = (item) => {
    navigation.navigate("Detalhes", { movieId: item.id });
  };

  const renderMovieItem = ({ item }) => {
    return <CardMovies data={item} onPress={() => navi(item)} />;
  };

  return (
    <View>
      <FlatList data={listMovies} renderItem={renderMovieItem} numColumns={2} />
    </View>
  );
};

export default ListCard;
