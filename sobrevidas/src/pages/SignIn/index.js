import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { authorize } from 'react-native-app-auth';

const icons = {
  cpf: require('../../assets/images/Contacts.png'),
  password: require('../../assets/images/Lock.png'),
};

const config = {
  issuer: 'https://localhost:8080/realms/master',
  clientId: 'sobrevidas',
  redirectUrl: 'https://localhost:8081',
  scopes: ['openid', 'profile', 'email'],
  responseType: 'code',
};



export default function SignIn() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const result = await authorize(config);
      console.log('Login successful', result);
    } catch (error) {
      setError('Falha na autenticação. Verifique suas credenciais.');
      console.error('Failed to login', error);
    }
  };
  
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a751ad',
    justifyContent: 'center',
    fontFamily: 'Inter',
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
    borderRadius: '3%',
    paddingStart: '2%',
    paddingEnd: '2%',
    justifyContent: 'center',
    height: '80%',
    maxWidth: '450px',
    right: '15%',
    top: '12%',
  },
  title: {
    fontSize: '40px',
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
    fontSize: '20px',
    lineHeight: '26px',
    paddingLeft: 8,
  },
  linkTextForgotPass: {
    color: '#C85B5C',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '26px',
  },
  button: {
    borderRadius: '55px',
    height: 77,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#4757A4',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: '20%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25px',
  },
  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
});
