import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';


class FormLogin extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  }
  render() {
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 25 }}>WhatsApp Clone</Text>
        </View>
        <View style={{ flex: 2 }}>
          <TextInput style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
          <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Senha' />
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Cadastro')}>
            <Text style={{ fontSize: 20 }}>Ainda não tem cadastro? Cadastre-se</Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 2 }}>
          <Button title="Acessar" color='#115E54' onPress={() => false} />
        </View>
      </View>
    )
  }
}
export default FormLogin;