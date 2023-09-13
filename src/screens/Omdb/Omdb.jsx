import axios from 'axios';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import ListCard from '../../components/ListCard';

const Omdb = ({ navigation }) => {
  const [search, setSearch] = useState();
  const [infos, setInfos] = useState();

  const searchMovies = async () => {
    const data = await axios.get(
      `http://www.omdbapi.com/?s=${search}?&apikey=70898e1d`
    );
    console.log(data.data.Search);
    setInfos(data.data.Search);
  };

  const teste = (value) => {
    setSearch(value);
  };

  return (
    <View>
      <TextInput
        placeholder="Nome do filme"
        value={search}
        onChangeText={teste}
      />
      <CustomButton title="Pesquisar" onPress={() => searchMovies()} />

      <View>
        <ListCard listMovies={infos} navigation={navigation} search={true} />
      </View>
    </View>
  );
};

export default Omdb;
