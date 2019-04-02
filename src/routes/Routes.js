import { createStackNavigator, createAppContainer } from 'react-navigation';
import FormLogin from '../components/FormLogin'
import FormCadastro from '../components/FormCadastro'

const MainNavigator = createStackNavigator({
    Login: FormLogin,
    Cadastro: FormCadastro
}, {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#115E54'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        },
        headerMode: 'screen'
    });

const Routes = createAppContainer(MainNavigator);

export default Routes;