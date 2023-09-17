import { useContext, useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import { AuthContext } from '../context/Auth';

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    if (userName === 'usuario@email.com' && password === '123senha') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const setFormUserName = (value) => {
    setUserName(value);
  };

  const setFormPassword = (value) => {
    setPassword(value);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/loginn.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.loginContainer}>
          <View style={styles.loginFocus}>
            <View style={{ paddingBottom: 50 }}>
              <Image
                style={styles.logoNetflix}
                source={require('../../assets/netflix-removebg-preview.png')}
              />
            </View>

            <TextInput
              placeholder="Email"
              style={styles.textInput}
              value={userName}
              onChangeText={setFormUserName}
            />
            <TextInput
              placeholder="Senha"
              style={styles.textInput}
              value={password}
              onChangeText={setFormPassword}
            />
            <CustomButton
              title="ENTRAR"
              onPress={signIn}
              backgroundColor="#db0000"
              color="#ffff"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#000',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    marginHorizontal: 20,
    marginVertical: 60,
  },
  loginFocus: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 20,
  },
  textInput: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    zIndex: 1,
  },
  logoNetflix: {
    width: 200,
    height: 80,
  },
});

export default Login;
