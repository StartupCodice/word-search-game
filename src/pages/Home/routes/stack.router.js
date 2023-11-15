import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Ionicons } from '@expo/vector-icons';

import Jogar from '../../ScreenJogar/Jogar';
import { Estilos } from '../../Estilos/Estilos';
import { Infinito } from '../../Infinito/Infinito';
import Home from '../Home';
import { JogoFacil } from './../../JogoFacil/JogoFacil';

export function StackRoutes() {
    return (
        <Navigator>
            <Screen 
                name="Home"
                component={Home}   
                options={{ 
                    headerShown: false      
            }}
             />
                
            <Screen 
              name="ScreenJogar"
              component={Jogar}  
              options={{ 
                title: '',
                headerShown: false   
            }}
             />   
             <Screen 
              name="JogoFacil"
              component={JogoFacil}  
              options={{ 
                title: '',
                headerShown: false      
            }}
             /> 

             <Screen 
             name="Estilos"
             component={Estilos}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

             <Screen 
             name="Infinito"
             component={Infinito}
             options={{ 
                title: '',
                headerShown: false       
            }}  
             />
          
        </Navigator>
    )
}