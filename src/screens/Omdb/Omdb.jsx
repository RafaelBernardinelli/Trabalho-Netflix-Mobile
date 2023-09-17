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
      if (search === '' || search === undefined || search === null)
        return setEmptyMessage(true);
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
        {notFound && (
          <Text style={styles.notFound}>
            Desculpe, não conseguimos encontrar o filme pesquisado :(
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

        <View style={styles.page}>
          <ListCard
            listMovies={moviesFound}
            navigation={navigation}
            search={true}
          />
        </View>
      </View>
    </>
  );
};

export default Omdb;

export const styles = StyleSheet.create({
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
    color: '#db0000',
    fontSize: 12,
    marginLeft: 8,
  },
  notFound: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 0,
    fontWeight: 'bold',
    padding: 20,
  },
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: 'black',
  },
});
