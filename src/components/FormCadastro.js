import React, { Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { modificaEmail, modificaSenha, modificaNome, cadastrarUsuario } from '../actions/AutenticacaoActions';

class FormCadastro extends Component {
  static navigationOptions = {
    title: 'Cadastro'
  }
  
  _cadastraUsuario() {
    const { nome, email, senha } =  this.props;
    this.props.cadastrarUsuario({ nome, email, senha });
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput
              value={this.props.nome}
              placeholder="Nome"
              placeholderTextColor='#fff'
              style={{ fontSize: 20, height: 45 }}
              onChangeText={texto => this.props.modificaNome(texto)}
            />
            <TextInput
              value={this.props.email}
              placeholder="E-mail"
              placeholderTextColor='#fff'
              style={{ fontSize: 20, height: 45 }}
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextInput
              secureTextEntry
              value={this.props.senha}
              placeholder="Senha"
              placeholderTextColor='#fff'
              style={{ fontSize: 20, height: 45 }}
              onChangeText={texto => this.props.modificaSenha(texto)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button title="Cadastrar" color='#115E54' onPress={() => this._cadastraUsuario()} />
          </View>
        </View>
      </ImageBackground >
    )
  }
}

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome, cadastrarUsuario })(FormCadastro);
