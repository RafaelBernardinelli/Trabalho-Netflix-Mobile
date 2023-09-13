import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import ListCard from '../../components/ListCard';

const Omdb = ({ navigation }) => {
  const [search, setSearch] = useState();
  const [moviesFound, setMoviesFound] = useState();
  const [emptyMessage, setEmptyMessage] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const clearSearch = () => {
    if (search === '' || search === undefined) return;
    setSearch(null);
    setNotFound(false);
    setEmptyMessage(false);
    setMoviesFound(undefined);
  };

  const searchMovies = async () => {
    try {
      if (search === '' || search === undefined) return setEmptyMessage(true);
      const data = await axios.get(
        `http://www.omdbapi.com/?s=${search}?&apikey=70898e1d`
      );
      setMoviesFound(data.data.Search);
      if (data.data.Search === undefined) setNotFound(true);
    } catch (err) {
      console.error(err);
      setNotFound(true);
    }
  };

  const setInputSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    if (search === '' || search === undefined) {
      setMoviesFound(undefined);
      setNotFound(false);
    }
    if (search) setEmptyMessage(false);
  }, [search]);

  return (
    <>
      <View styles={styles.container}>
        <TextInput
          placeholder="Digite o nome do filme"
          value={search}
          onChangeText={setInputSearch}
          style={styles.input}
        />
        {emptyMessage && (
          <Text style={styles.warnMessage}>
            Digite um filme para pesquisar...
          </Text>
        )}
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <CustomButton
            title="Pesquisar"
            onPress={() => searchMovies()}
            backgroundColor={'#111'}
            color={'#fff'}
          />
          <CustomButton
            title="Limpar Pesquisa"
            onPress={() => clearSearch()}
            disabled={search === undefined}
            width={230}
            backgroundColor={'#fff'}
            color={'#111'}
          />
        </View>

        <ListCard
          listMovies={moviesFound}
          navigation={navigation}
          search={true}
        />
        {notFound && (
          <Text style={styles.notFound}>
            Desculpe, não conseguimos encontrar o filme pesquisado :(
          </Text>
        )}
      </View>
    </>
  );
};

export default Omdb;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 16,
    margin: 8,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  warnMessage: {
    color: '#ff7f17',
    fontSize: 12,
    marginLeft: 8,
  },
  errorMessage: {
    color: '#ff1717',
    fontSize: 12,
    marginLeft: 8,
  },
  notFound: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 90,
    fontWeight: 'bold',
    padding: 20,
  },
});
