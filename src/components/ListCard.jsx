import { useState } from "react";
import { FlatList, View } from "react-native";
import CardMovies from "./CardMovies";
import CustonButton from "./CustomButton";

const ListCard = ({ listMovies, navigation, search, fetchData, page }) => {
  const navi = (item) => {
    if (!search) navigation.navigate("Detalhes", { movieId: item.id });
    else navigation.navigate("Detalhes", { movieId: item.imdbID });
  };

  const [showPaginationButton, setShowPaginationButton] = useState(false);

  const handlePaginationButtonPressMore = () => {
    if (page < 499) {
      const nextPage = page + 1;
      fetchData(nextPage);
    } else {
      setShowPaginationButton(false);
    }
  };

  const handlePaginationButtonPressLess = () => {
    const nextPage = page - 1;
    fetchData(nextPage);
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const scrollThreshold = 2300;
    if (offsetY > scrollThreshold) {
      setShowPaginationButton(true);
    } else {
      setShowPaginationButton(false);
    }
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
      <FlatList
        onScroll={handleScroll}
        data={listMovies}
        renderItem={renderMovieItem}
        numColumns={2}
      />
      {showPaginationButton && (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <CustonButton
            title="Carregar mais"
            color={"#fff"}
            width={130}
            backgroundColor={"red"}
            onPress={handlePaginationButtonPressMore}
          />
          {page > 1 && (
            <CustonButton
              title="Carregar menos"
              color={"#fff"}
              backgroundColor={"red"}
              width={130}
              onPress={handlePaginationButtonPressLess}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default ListCard;
