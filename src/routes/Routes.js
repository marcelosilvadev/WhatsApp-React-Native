import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from '../components/FormLogin'
import FormCadastro from '../components/FormCadastro'

export default props => (
    <Router>
        <Scene key='formLogin' initial={true} component={FormLogin} title="Login" />
        <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
    </Router>
);