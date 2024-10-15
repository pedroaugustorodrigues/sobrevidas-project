import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity

 } from 'react-native'

export default function SignIn() {
  return (
    <View style={styles.container}>

        <View style={styles.containerLogo}>
          <Image source={require('../../assets/logo.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
           />
        </View>

        <View style={styles.containerForm}>
          <Text style={styles.title}>Faça seu login</Text>
          <Text style={styles.text}>ou crie uma conta</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A020F0',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#A020F0',
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
    marginBottom: 12
  },
  text: {
    color: '#A020F0'
  },
  button: {
    backgroundColor: '#A020F0',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 24
  },
})