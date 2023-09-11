import { FlatList, View } from "react-native";
import CardMovies from "./CardMovies";

const ListCard = ({ listMovies, navigation }) => {
  const renderMovieItem = ({ item }) => {
    return (
      <CardMovies
        data={item}
        onPress={() => {
          navigation.navigate("Details", { movieId: item.id });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList data={listMovies} renderItem={renderMovieItem} numColumns={2} />
    </View>
  );
};

export default ListCard;
