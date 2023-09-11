import axios from "axios";
import { useEffect, useState } from "react";
import { View } from "react-native";
import ListCard from "../../components/ListCard";

const TmdbPage = ({ navigation }) => {
  const [infos, setInfos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMoviesData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=343c0cc8f2eba1f7ced8409cc651090f&language=pt-BR&page=${page}`
      );
      setInfos(response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, [page]);

  return (
    <View>
      <ListCard listMovies={infos} navigation={navigation} />
    </View>
  );
};

export default TmdbPage;
