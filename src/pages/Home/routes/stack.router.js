import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

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
import Animais from '../../Estilos/NivelFacil/TemasJogo/Animais/Animais';
import Doces from '../../Estilos/NivelFacil/TemasJogo/Doces/Doces';
import Arvores from '../../Estilos/NivelFacil/TemasJogo/Arvores/Arvores';
import Atores from '../../Estilos/NivelFacil/TemasJogo/Atores/Atores';
import Transportes from '../../Estilos/NivelFacil/TemasJogo/Transportes/Transportes';
import Bebidas from '../../Estilos/NivelFacil/TemasJogo/Bebidas/Bebidas';
import Amizade from '../../Estilos/NivelFacil/TemasJogo/Amizade/Amizade';
import Nomes from '../../Estilos/NivelFacil/TemasJogo/Nomes/Nomes';
import Roupas from '../../Estilos/NivelFacil/TemasJogo/Roupas/Roupas';
import Natureza from '../../Estilos/NivelFacil/TemasJogo/Natureza/Natureza';
import Pintores from '../../Estilos/NivelFacil/TemasJogo/Pintores/Pintores';
import Casa from '../../Estilos/NivelFacil/TemasJogo/Casa/Casa';
import Carros from '../../Estilos/NivelFacil/TemasJogo/Carros/Carros';
import Filmes from '../../Estilos/NivelFacil/TemasJogo/Filmes/Filmes';
import Espaço from '../../Estilos/NivelFacil/TemasJogo/Espaço/Espaço';
import Musicos from '../../Estilos/NivelFacil/TemasJogo/Musicos/Musicos';
import Marcas from '../../Estilos/NivelFacil/TemasJogo/Marcas/Marcas';
import Musicas from '../../Estilos/NivelFacil/TemasJogo/Musicas/Musicas';
import Escritoras from '../../Estilos/NivelFacil/TemasJogo/Escritoras/Escritoras';
import AlimentosMedio from '../../Estilos/NivelMedio/TemasJogo/AlimentosMedio/AlimentosMedio';
import DecoracoesMedio from '../../Estilos/NivelMedio/TemasJogo/DecoracoesMedio/DecoracoesMedio';
import PresentesMedio from '../../Estilos/NivelMedio/TemasJogo/PresentesMedio/PresentesMedio';
import PersonagensMedio from '../../Estilos/NivelMedio/TemasJogo/PersonagensMedio/PersonagensMedio';
import PaisesMedio from '../../Estilos/NivelMedio/TemasJogo/PaisesMedio/PaisesMedio';
import EmpregosMedio from '../../Estilos/NivelMedio/TemasJogo/EmpregosMedio/EmpregosMedio';
import CoresMedio from '../../Estilos/NivelMedio/TemasJogo/CoresMedio/CoresMedio';
import EsportesMedio from '../../Estilos/NivelMedio/TemasJogo/EsportesMedio/EsportesMedio';
import AnimaisMedio from '../../Estilos/NivelMedio/TemasJogo/AnimaisMedio/AnimaisMedio';
import DocesMedio from '../../Estilos/NivelMedio/TemasJogo/DocesMedio/DocesMedio';
import ArvoresMedio from '../../Estilos/NivelMedio/TemasJogo/ArvoresMedio/ArvoresMedio';
import AtoresMedio from '../../Estilos/NivelMedio/TemasJogo/AtoresMedio/AtoresMedio';
import TransportesMedio from '../../Estilos/NivelMedio/TemasJogo/TransportesMedio/TransportesMedio';
import BebidasMedio from '../../Estilos/NivelMedio/TemasJogo/BebidasMedio/BebidasMedio';
import AmizadeMedio from '../../Estilos/NivelMedio/TemasJogo/AmizadeMedio/AmizadeMedio';
import NomesMedio from '../../Estilos/NivelMedio/TemasJogo/NomesMedio/NomesMedio';
import RoupasMedio from '../../Estilos/NivelMedio/TemasJogo/RoupasMedio/RoupasMedio';
import NaturezaMedio from '../../Estilos/NivelMedio/TemasJogo/NaturezaMedio/NaturezaMedio';
import PintoresMedio from '../../Estilos/NivelMedio/TemasJogo/PintoresMedio/PintoresMedio';
import CasaMedio from '../../Estilos/NivelMedio/TemasJogo/CasaMedio/CasaMedio';
import CarrosMedio from '../../Estilos/NivelMedio/TemasJogo/CarrosMedio/CarrosMedio';
import FilmesMedio from '../../Estilos/NivelMedio/TemasJogo/FilmesMedio/FilmesMedio';
import EspaçoMedio from '../../Estilos/NivelMedio/TemasJogo/EspaçoMedio/EspaçoMedio';
import MarcasMedio from '../../Estilos/NivelMedio/TemasJogo/MarcasMedio/MarcasMedio';
import MusicasMedio from '../../Estilos/NivelMedio/TemasJogo/MusicasMedio/MusicasMedio';
import MusicosMedio from '../../Estilos/NivelMedio/TemasJogo/MusicosMedio/MusicosMedio';
import EscritorasMedio from '../../Estilos/NivelMedio/TemasJogo/EscritorasMedio/EscritorasMedio';
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
              name="AnimaisMedio"
              component={AnimaisMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="DocesMedio"
              component={DocesMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="ArvoresMedio"
              component={ArvoresMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="AtoresMedio"
              component={AtoresMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="TransportesMedio"
              component={TransportesMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="BebidasMedio"
              component={BebidasMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="AmizadeMedio"
              component={AmizadeMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="NomesMedio"
              component={NomesMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="RoupasMedio"
              component={RoupasMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="NaturezaMedio"
              component={NaturezaMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="PintoresMedio"
              component={PintoresMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="CasaMedio"
              component={CasaMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  
            <Screen 
              name="CarrosMedio"
              component={CarrosMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="FilmesMedio"
              component={FilmesMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="EspaçoMedio"
              component={EspaçoMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="MusicosMedio"
              component={MusicosMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="MarcasMedio"
              component={MarcasMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="MusicasMedio"
              component={MusicasMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />

            <Screen 
            name="EscritorasMedio"
            component={EscritorasMedio}  
            options={{ 
              title: '',
              headerShown: false   
            }}
            />       

            <Screen 
              name="EmpregosMedio"
              component={EmpregosMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            /> 

            <Screen 
              name="CoresMedio"
              component={CoresMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            /> 

            <Screen 
              name="PaisesMedio"
              component={PaisesMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            /> 

            <Screen 
              name="EsportesMedio"
              component={EsportesMedio}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Animais"
              component={Animais}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Doces"
              component={Doces}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Arvores"
              component={Arvores}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Atores"
              component={Atores}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Transportes"
              component={Transportes}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Bebidas"
              component={Bebidas}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Amizade"
              component={Amizade}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Nomes"
              component={Nomes}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Roupas"
              component={Roupas}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Natureza"
              component={Natureza}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Pintores"
              component={Pintores}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Casa"
              component={Casa}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  
            <Screen 
              name="Carros"
              component={Carros}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Filmes"
              component={Filmes}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Espaço"
              component={Espaço}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Musicos"
              component={Musicos}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Marcas"
              component={Marcas}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />  

            <Screen 
              name="Musicas"
              component={Musicas}  
              options={{ 
                title: '',
                headerShown: false   
            }}
            />

            <Screen 
            name="Escritoras"
            component={Escritoras}  
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