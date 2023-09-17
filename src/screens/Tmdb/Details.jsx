import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";

const Details = ({ navigation }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const route = useRoute();
  const { movieId } = route.params ?? -1;

  useEffect(() => {
    if (movieId === undefined || movieId === -1) return;

    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=343c0cc8f2eba1f7ced8409cc651090f&language=pt-BR`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const getYear = (data) => {
    const year = new Date(data).getFullYear();
    return year;
  };

  const navigationToMovies = () => {
    navigation.navigate("Recomendados");
  };

  return (
    <View style={styles.container}>
      {!movieDetails ? (
        <View>
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Nenhum filme selecionado para ver detalhes
          </Text>
          <CustomButton
            title={"Clique aqui para escolher um filme"}
            width={300}
            backgroundColor={"red"}
            color={"#fff"}
            onPress={navigationToMovies}
          />
        </View>
      ) : (
        <>
          {!loading ? (
            <ScrollView>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`,
                }}
                style={styles.detailsImage}
              />
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
                }}
                style={styles.detailsPosterImage}
              />
              <Text style={styles.stars}>{movieDetails.title}</Text>

              <View style={styles.description}>
                <View style={styles.descriptionGroup}>
                  <Text style={styles.descriptionText}>
                    {getYear(movieDetails.release_date)}
                  </Text>
                </View>
                <View style={styles.descriptionGroup}>
                  <Text style={styles.descriptionText}>
                    {movieDetails.runtime} Minutos
                  </Text>
                </View>
                <View style={styles.descriptionGroup}>
                  <Text
                    style={[
                      movieDetails.vote_average.toFixed(2) >= "7"
                        ? styles.descriptionText1
                        : styles.descriptionText,
                    ]}
                  >
                    {movieDetails.vote_average.toFixed(1)}
                  </Text>
                </View>
              </View>

              <View style={styles.about}>
                <Text style={styles.aboutText}>
                  {movieDetails.overview === ""
                    ? "Ops! Parece que esse filme ainda não tem sinopse :-("
                    : movieDetails.overview}
                </Text>
              </View>
            </ScrollView>
          ) : (
            <Text style={styles.loading}>Carregando...</Text>
          )}
        </>
      )}
    </View>
  );
};

export default Details;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingTop: 30,
    height: 115,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  detailsImage: {
    position: "absolute",
    width: "100%",
    height: 210,
  },
  detailsPosterImage: {
    width: 100,
    height: 160,
    borderRadius: 16,
    left: 29,
    right: 251,
    top: 140,
  },
  stars: {
    position: "absolute",
    height: 60,
    left: 140,
    right: 32,
    top: 230,
    color: "#fff",
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "700",
  },

  description: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 170,
  },

  descriptionText: {
    marginLeft: 10,
    color: "#92929D",
  },

  descriptionText1: {
    marginLeft: 10,
    color: "#FF8700",
  },

  descriptionGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  aboutMovie: {
    width: "100%",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  aboutMovieText: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
  },
  about: {
    padding: 20,
  },
  aboutText: {
    color: "#fff",
    textAlign: "justify",
  },

  loading: {
    color: "#fff",
  },
});
