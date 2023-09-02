import { FlatList, SafeAreaView, Text, TouchableOpacity } from "react-native";

const ListCard = ({ listMovies }) => {
  const Movie = ({ movie }) => {
    const { name, alpha_two_code } = movie;

    return (
      <TouchableOpacity
        style={{ backgroundColor: "#ccc", padding: 10, marginBottom: 10 }}
      >
        <Text>Nome: {name}</Text>
        <Text>Código: {alpha_two_code}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={listMovies}
        renderItem={({ item }) => <Movie movie={item} />}
      />
    </SafeAreaView>
  );
};

export default ListCard;
