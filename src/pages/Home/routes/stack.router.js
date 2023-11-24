import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Ionicons } from '@expo/vector-icons';

import Jogar from '../../ScreenJogar/Jogar';
import { Infinito } from '../../Infinito/Infinito';
import Home from '../Home';
import { JogoFacil } from './../../JogoFacil/JogoFacil';
import NiveisBotoes  from '../../Estilos/NivelBotoes';
import  { NivelFacil }  from '../../Estilos/NivelFacil/NivelFacil';
import  { NivelMedio }  from '../../Estilos/NivelMedio/NivelMedio';
import { NivelDificil } from '../../Estilos/NivelDificil/NivelDificil';
import { NivelPro } from '../../Estilos/NivelPro/NivelPro';
import { Menu } from '../../Menu/Menu';
import Alimentos from '../../Estilos/NivelFacil/TemasJogo/Alimentos/Alimentos';
import Decoracoes from '../../Estilos/NivelFacil/TemasJogo/Decoracoes/Decoracoes';
import Personages from '../../Estilos/NivelFacil/TemasJogo/Personagens/Personagens';
import Presentes from '../../Estilos/NivelFacil/TemasJogo/Presentes/Presentes';

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
             component={NiveisBotoes}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

            <Screen 
             name="NivelFacil"
             component={NivelFacil}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

            <Screen 
             name="Alimentos"
             component={Alimentos}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

            <Screen 
             name="Decoracoes"
             component={Decoracoes}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />
            <Screen 
             name="Personagens"
             component={Personages}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

             <Screen 
             name="Presentes"
             component={Presentes}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />


            <Screen 
             name="NivelMedio"
             component={NivelMedio}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />
            
            <Screen 
             name="NivelDificil"
             component={NivelDificil}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

            <Screen 
             name="NivelPro"
             component={NivelPro}
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