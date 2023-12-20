import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { Ionicons } from '@expo/vector-icons';

import Jogar from '../../ScreenJogar/Jogar';
import Home from '../Home';
import NiveisBotoes  from '../../Estilos/NivelBotoes';
import  { NivelFacil }  from '../../Estilos/NivelFacil/NivelFacil';
import  { NivelMedio }  from '../../Estilos/NivelMedio/NivelMedio';
import { NivelDificil } from '../../Estilos/NivelDificil/NivelDificil';
import { NivelPro } from '../../Estilos/NivelPro/NivelPro';
import Alimentos from '../../Estilos/NivelFacil/TemasJogo/Alimentos/Alimentos';
import Decoracoes from '../../Estilos/NivelFacil/TemasJogo/Decoracoes/Decoracoes';
import Personagens from '../../Estilos/NivelFacil/TemasJogo/Personagens/Personagens';
import Presentes from '../../Estilos/NivelFacil/TemasJogo/Presentes/Presentes';
import EsportesFacil from '../../Estilos/NivelFacil/TemasJogo/Esportes/Esportes';
import CoresFacil from '../../Estilos/NivelFacil/TemasJogo/Cores/Cores';
import EmpregosFacil from '../../Estilos/NivelFacil/TemasJogo/Empregos/Empregos';
import PaisesFacil from '../../Estilos/NivelFacil/TemasJogo/Paises/Paises';
import AlimentosMedio from '../../Estilos/NivelMedio/TemasJogo/AlimentosMedio/AlimentosMedio';
import DecoracoesMedio from '../../Estilos/NivelMedio/TemasJogo/DecoracoesMedio/DecoracoesMedio';
import PresentesMedio from '../../Estilos/NivelMedio/TemasJogo/PresentesMedio/PresentesMedio';
import PersonagensMedio from '../../Estilos/NivelMedio/TemasJogo/PersonagensMedio/PersonagensMedio';
import AlimentosDificil from '../../Estilos/NivelDificil/TemasJogo/AlimentosDIificil/AlimentosDIificil';
import DecoracoesDificil from '../../Estilos/NivelDificil/TemasJogo/DecoracoesDIificil/DecoracoesDIificil';
import PersonagensDificil from '../../Estilos/NivelDificil/TemasJogo/PersonagensDIificil/PersonagensDIificil';
import PresentesDificil from '../../Estilos/NivelDificil/TemasJogo/PresentesDIificil/PresentesDIificil';
import AlimentosPro from '../../Estilos/NivelPro/TemasJogo/AlimentosPro/AlimentosPro';
import DecoracoesPro from '../../Estilos/NivelPro/TemasJogo/DecoracoesPro/DecoracoesPro';
import PersonagensPro from '../../Estilos/NivelPro/TemasJogo/PersonagensPro/PersonagensPro';
import PresentesPro from '../../Estilos/NivelPro/TemasJogo/PresentesPro/PresentesPro';
import InfinitoFacil from '../../Infinito/InfinitoFacil/InfinitoFacil';
import InfinitoMedio from '../../Infinito/InfinitoMedio/InfinitoMedio';
import InfinitoDificil from '../../Infinito/InfinitoDificil/InfinitoDIificil';
import InfinitoPro from '../../Infinito/InfinitoPro/InfinitoPro';
import EventoFacil from '../../Evento/NivelFacil/EventoFacil';
import EventoMedio from '../../Evento/NivelMedio/EventoMedio';
import EventoPro from '../../Evento/NivelPro/EventoPro';

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
              name="EventoFacil"
              component={EventoFacil}  
              options={{ 
                title: '',
                headerShown: false   
            }}
             />  

            <Screen 
              name="EsportesFacil"
              component={EsportesFacil}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="CoresFacil"
              component={CoresFacil}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="EmpregosFacil"
              component={EmpregosFacil}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="PaisesFacil"
              component={PaisesFacil}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="EventoMedio"
              component={EventoMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="EventoPro"
              component={EventoPro}  
              options={{ 
                title: '',
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
             component={Personagens}
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
             name="AlimentosMedio"
             component={AlimentosMedio}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

            <Screen 
             name="DecoracoesMedio"
             component={DecoracoesMedio}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />
            <Screen 
             name="PersonagensMedio"
             component={PersonagensMedio}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

             <Screen 
             name="PresentesMedio"
             component={PresentesMedio}
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
             name="AlimentosDificil"
             component={AlimentosDificil}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

            <Screen 
             name="DecoracoesDificil"
             component={DecoracoesDificil}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />
            <Screen 
             name="PersonagensDificil"
             component={PersonagensDificil}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

             <Screen 
             name="PresentesDificil"
             component={PresentesDificil}
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
             name="AlimentosPro"
             component={AlimentosPro}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

            <Screen 
             name="DecoracoesPro"
             component={DecoracoesPro}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />
            <Screen 
             name="PersonagensPro"
             component={PersonagensPro}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

             <Screen 
             name="PresentesPro"
             component={PresentesPro}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

            <Screen 
             name="InfinitoFacil"
             component={InfinitoFacil}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

            <Screen 
             name="InfinitoMedio"
             component={InfinitoMedio}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />
             
             <Screen 
             name="InfinitoDificil"
             component={InfinitoDificil}
             options={{ 
                title: '',
                headerShown: false       
            }}
             />

            <Screen 
             name="InfinitoPro"
             component={InfinitoPro}
             options={{ 
                title: '',
                headerShown: false       
            }}
             /> 
        </Navigator>
    )
}