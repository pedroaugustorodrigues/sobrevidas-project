import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity

 } from 'react-native'

 import * as Animatable from 'react-native-animatable'

export default function SignIn() {
  return (
    <View style={styles.container}>

        <View style={styles.containerLogo}>
          <Animatable.Image
          animation="bounceIn"
          source={require('../../assets/logo.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
           />
        </View>

        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.title}>
            Autenticação
          </Text>

          <TextInput 
          style={styles.input} placeholder="CPF" 
          />

          <TextInput 
          style={styles.input} placeholder="Senha" 
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          
        </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a751ad',
  },
  containerLogo: {
    flex: 1,
    backgroundColor: '#a751ad',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    textAlign: 'center',
    color: '#4757A4'
  },
  input: {
    borderRadius: 25,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 12,
    marginTop: 12,
    backgroundColor: 'lightgrey'
  },
  button: {
    borderRadius: 25,
    padding: 15,
    backgroundColor: '#4757A4',
    alignItems: 'center',
    marginBottom: 12
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
})