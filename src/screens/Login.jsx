import { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const Login = () => {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/loginn.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.loginContainer}>
          <View style={styles.loginFocus}>
            <Image
              style={styles.logoNetflix}
              source={require('../../assets/netflix-removebg-preview.png')}
            />
            <TextInput
              placeholder="Email or Phone number"
              style={styles.textInput}
            />
            <TextInput placeholder="Password" style={styles.textInput} />
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
