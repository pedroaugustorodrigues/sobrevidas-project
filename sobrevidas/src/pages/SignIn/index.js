import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const keycloakUrl = 'http://localhost:8080/realms/master/protocol/openid-connect/token';

const icons = {
  cpf: require('../../assets/images/Contacts.png'),
  password: require('../../assets/images/Lock.png'),
  background: require('../../assets/images/img-fundo-sv.png'), 
};

export default function SignIn() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(keycloakUrl, new URLSearchParams({
        grant_type: 'password',
        client_id: 'sobrevidas',
        client_secret: 'ksSWpLNyHc3XFiZV43ywYCAqYvW7fw6w',
        username: cpf,
        password: senha,
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true, // Adicione isso se necessário
      });
      
    console.log('Resposta do servidor:', response.data);
    await AsyncStorage.setItem('accessToken', response.data.access_token);
    console.log('Login bem-sucedido:', response.data);
  } catch (err) {
    setError('Erro de autenticação. Verifique suas credenciais.');
    console.error('Erro:', err.response ? err.response.data : err.message);
  }
};
  

  return (
    <ImageBackground source={icons.background} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.containerLogo}>
            <Animatable.Image
              animation="bounceIn"
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Autenticação</Text>

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <View style={styles.inputContainer}>
              <Image source={icons.cpf} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#B3B3B3"
                value={cpf}
                onChangeText={setCpf}
              />
            </View>

            <View style={styles.inputContainer}>
              <Image source={icons.password} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#B3B3B3"
                secureTextEntry 
                value={senha}
                onChangeText={setSenha}
              />
            </View>

            <View style={styles.linkContainer}>
              <TouchableOpacity>
                <Text style={styles.linkText}>Cadastrar-se</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.linkTextForgotPass}>Esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

          </Animatable.View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: '50%',
    left: '-5%',
  },
  containerForm: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingStart: 16,
    paddingEnd: 20,
    justifyContent: 'center',
    height: '623.65px',
    maxWidth: '450px',
    right: '15%',
    top: '5%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: -20,
    marginBottom: 50,
    textAlign: 'center',
    color: '#4757A4',
  },
  input: {
    borderRadius: 20,
    fontWeight: '600',
    fontSize: 20,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    marginBottom: 12,
    marginTop: 12,
    backgroundColor: '#F0F0F0',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 22,
    width: 30,
    height: 30,
    zIndex: 1,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  linkText: {
    color: '#6E6F6F',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
    paddingLeft: 8,
  },
  linkTextForgotPass: {
    color: '#C85B5C',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
  },
  button: {
    borderRadius: 55,
    height: 77,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#4757A4',
    alignItems: 'center',
    marginBottom: 6,
    marginTop: '20%',
    width: '330px',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
});
