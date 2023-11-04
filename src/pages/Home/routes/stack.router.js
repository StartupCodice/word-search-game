import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Jogar } from '../../ScreenJogar/Jogar';
import { Estilos } from '../../Estilos/Estilos';
import { Infinito } from '../../Infinito/Infinito';
import Home from '../Home';

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
                headerStyle: {
                    backgroundColor: '#445D5A'
                }        
            }}
             />   

             <Screen 
             name="Estilos"
             component={Estilos}
             options={{ 
                title: '',
                headerStyle: {
                    backgroundColor: '#445D5A'
                }        
            }}
             />

             <Screen 
             name="Infinito"
             component={Infinito}
             options={{ 
                title: '',
                headerStyle: {
                    backgroundColor: '#00364F'
                }        
            }}  
             />
          
        </Navigator>
    )
}