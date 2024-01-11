import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from '../../Home/style';
import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import NiveisDificil from '../../../components/storageNivelDificil';
import MoedasComponent from '../../../components/storage';
import Modal from 'react-native-modal';

export function NivelDificil({ navigation }) {
  const { moedas, buyTheme, temasPagosNivelDificil, adicionarTemasPagosNivelDificil } = MoedasComponent();

  const {
    presentes,
    addPresentes,
    decoracoes,
    addDecoracoes,
    alimentos,
    addAlimento,
    personagens,
    addPersonagens,
    esportes,
    addEsportes,
    cores,
    addCores,
    empregos,
    addEmpregos,
    paises,
    addPaises,
    animais,
    addAnimais,
    doces,
    addDoces,
    arvores,
    addArvores,
    atores,
    addAtores,
    transportes,
    addTransportes,
    bebidas,
    addBebidas,
    amizade,
    addAmizade,
    musicas,
    addMusicas,
    nomes,
    addNomes,
    roupas,
    addRoupas,
    natureza,
    addNatureza,
    pintores,
    addPintores,
    casa,
    addCasa,
    carros,
    addCarros,
    filmes,
    addFilmes,
    espaco,
    addEspaco,
    musicos,
    addMusicos,
    marcas,
    addMarcas,
    escritoras,
    addEscritoras,
  } = NiveisDificil();
  const [showModalTheme, setShowModalTheme] = useState(false);
  const [showModalSemSaldo, setShowModalSemSaldo] = useState(false);
  const [comprarTema, setComprarTema] = useState('');
  const [priceTheme, setPriceTheme] = useState(0);

  const buy = () => {
    setShowModalTheme(false);
    buyTheme(priceTheme);

    temasPagosNivelDificil.forEach((tema) => {
      if (tema.name == comprarTema) tema.moedas = null;
    })

    adicionarTemasPagosNivelDificil(temasPagosNivelDificil);
  }

  const getBuyLevel = (name) => {
    const tema = temasPagosNivelDificil.find((tema) => tema.name === name);
    return tema ? tema.moedas : 0;
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <ImageBackground source={require('../../../assets/fundoAzul.jpg')} style={styles.imageBackground}>
      <View style={styles.moedasContainer}>
        <View style={styles.IconMoeda}></View>
        <Text style={styles.moedasText}>{moedas}</Text>
        
      </View>
        <View>
          <Ionicons
            name="arrow-back"
            size={scale(46)}
            color="white"
            style={styles.button}
            onPress={() => navigation.navigate('Estilos')}
          />
        </View>

        <View style={styles.container}>
          <View style={styles.containerMode}>
            <ThemeButton
              navigation={navigation}
              themeName="Presentes"
              imagePath={require('./../../../assets/arvoresNatal.png')}
              count={presentes}
              screenName="PresentesDificil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Decorações"
              imagePath={require('./../../../assets/presenteNatal.png')}
              count={decoracoes}
              screenName="DecoracoesDificil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Alimentos"
              imagePath={require('./../../../assets/ComidasNatal.png')}
              count={alimentos}
              screenName="AlimentosDificil"
             
            />

            <ThemeButton
              navigation={navigation}
              themeName="Personagens"
              imagePath={require('./../../../assets/papai-noel.png')}
              count={personagens}
              screenName="PersonagensDificil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Esportes"
              imagePath={require('./../../../assets/esportes.png')}
              count={esportes}
              screenName="EsportesDificil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Cores"
              imagePath={require('./../../../assets/cores.png')}
              count={cores}
              screenName="CoresDificil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Empregos"
              imagePath={require('./../../../assets/empregos.png')}
              count={empregos}
              screenName="EmpregosDificil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Países"
              imagePath={require('./../../../assets/paises.png')}
              count={paises}
              screenName="PaisesDificil"
              buyLevel={getBuyLevel("PaisesFacil")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
              
            />

            <ThemeButton
              navigation={navigation}
              themeName="Animais"
              imagePath={require('./../../../assets/Animais.png')}
              count={animais}
              screenName="AnimaisDificil"
              buyLevel={getBuyLevel("Animais")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
              
            />

            <ThemeButton
              navigation={navigation}
              themeName="Doces"
              imagePath={require('./../../../assets/Doces.png')}
              count={doces}
              screenName="DocesDificil"
              buyLevel={getBuyLevel("Doces")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />

            <ThemeButton
              navigation={navigation}
              themeName="Arvores"
              imagePath={require('./../../../assets/arvore.png')}
              count={arvores}
              screenName="ArvoresDificil"
              buyLevel={getBuyLevel("Arvores")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />

            <ThemeButton
              navigation={navigation}
              themeName="Atores"
              imagePath={require('./../../../assets/ator.png')}
              count={atores}
              screenName="AtoresDificil"
              buyLevel={getBuyLevel("Atores")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />

            <ThemeButton
              navigation={navigation}
              themeName="Transportes"
              imagePath={require('./../../../assets/Transportes.png')}
              count={transportes}
              screenName="TransportesDificil"
              buyLevel={getBuyLevel("Transportes")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />

            <ThemeButton
              navigation={navigation}
              themeName="Bebidas"
              imagePath={require('./../../../assets/bebida.png')}
              count={bebidas}
              screenName="BebidasDificil"
              buyLevel={getBuyLevel("Bebidas")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />

            <ThemeButton
              navigation={navigation}
              themeName="Amizade"
              imagePath={require('./../../../assets/amizade.png')}
              count={amizade}
              screenName="AmizadeDificil"
              buyLevel={getBuyLevel("Amizade")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />

            <ThemeButton
              navigation={navigation}
              themeName="Musica"
              imagePath={require('./../../../assets/Musicas.png')}
              count={musicas}
              screenName="MusicasDificil"
              buyLevel={getBuyLevel("Musicas")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />

            <ThemeButton
              navigation={navigation}
              themeName="Nomes"
              imagePath={require('./../../../assets/nomes.png')}
              count={nomes}
              screenName="NomesDificil"
              buyLevel={getBuyLevel("Nomes")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />
            <ThemeButton
              navigation={navigation}
              themeName="Roupas"
              imagePath={require('./../../../assets/roupas.png')}
              count={roupas}
              screenName="RoupasDificil"
              buyLevel={getBuyLevel("Roupas")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />
            <ThemeButton
              navigation={navigation}
              themeName="Natureza"
              imagePath={require('./../../../assets/natureza.png')}
              count={natureza}
              screenName="NaturezaDificil"
              buyLevel={getBuyLevel("Natureza")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />
            <ThemeButton
              navigation={navigation}
              themeName="Pintores"
              imagePath={require('./../../../assets/pintores.png')}
              count={pintores}
              screenName="PintoresDificil"
              buyLevel={getBuyLevel("Pintores")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />
            <ThemeButton
              navigation={navigation}
              themeName="Casa"
              imagePath={require('./../../../assets/casa.png')}
              count={casa}
              screenName="CasaDificil"
              buyLevel={getBuyLevel("Casa")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />
            <ThemeButton
              navigation={navigation}
              themeName="Carros"
              imagePath={require('./../../../assets/carros.png')}
              count={carros}
              screenName="CarrosDificil"
              buyLevel={getBuyLevel("Carros")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
              
            />
            <ThemeButton
              navigation={navigation}
              themeName="Filmes"
              imagePath={require('./../../../assets/filme.png')}
              count={filmes}
              screenName="FilmesDificil"
              buyLevel={getBuyLevel("Filmes")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />
            <ThemeButton
              navigation={navigation}
              themeName="Espaço"
              imagePath={require('./../../../assets/foguete.png')}
              count={espaco}
              screenName="EspaçoDificil"
              buyLevel={getBuyLevel("Espaço")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />
            <ThemeButton
              navigation={navigation}
              themeName="Musicos"
              imagePath={require('./../../../assets/musicos.png')}
              count={musicos}
              screenName="MusicosDificil"
              buyLevel={getBuyLevel("Musicos")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />
            <ThemeButton
              navigation={navigation}
              themeName="Marcas"
              imagePath={require('./../../../assets/marcas.png')}
              count={marcas}
              screenName="MarcasDificil"
              buyLevel={getBuyLevel("Marcas")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />
            <ThemeButton
              navigation={navigation}
              themeName="Escritoras"
              imagePath={require('./../../../assets/escritor.png')}
              count={escritoras}
              screenName="EscritorasDificil"
              buyLevel={getBuyLevel("Escritoras")}
              setShowModalTheme={setShowModalTheme}
              setComprarTema={setComprarTema}
              setPriceTheme={setPriceTheme}
              moedas={moedas}
              setShowModalSemSaldo={setShowModalSemSaldo}
            />
          </View>
        </View>

        <Modal isVisible={showModalTheme} style={styles.modalContainer2}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Você realmente quer comprar o tema: {comprarTema}?
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setShowModalTheme(false)}>
              <Text style={styles.modalButtonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={buy}>
              <Text style={styles.modalButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal isVisible={showModalSemSaldo} style={styles.modalContainer2}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Você não tem moedas sufientes para comprar esse tema!
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setShowModalSemSaldo(false)}>
              <Text style={styles.modalButtonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ImageBackground>
    </ScrollView>
  );
}

const ThemeButton = ({ navigation, themeName, imagePath, count, screenName, buyLevel, setShowModalTheme, setComprarTema, setPriceTheme, moedas, setShowModalSemSaldo }) => {
  const buy = () => {
    setComprarTema(themeName);
    setPriceTheme(buyLevel);
    setShowModalTheme(true);
  }

  return (
    <View>
      <TouchableOpacity style={styles.ButtonEstilo} onPress={() => {
        if (buyLevel) {
          if (moedas >= buyLevel) buy(); 
          else setShowModalSemSaldo(true);
          return;
        }

        navigation.navigate(screenName);
      }}>
        <ImageBackground source={imagePath} style={styles.ImagemEstilo}>
          { 
            buyLevel ? 
              <View>
                <View style={styles.moeda}></View>
                <Text style={styles.moedasParaCompra}>{buyLevel}</Text>
              </View> :
              <Text style={styles.ZeroTrinta}>{count ? count : 0}/30</Text>
          }
        </ImageBackground>
      </TouchableOpacity>
      <Text style={styles.TextCenterEstilo}>{themeName}</Text>
    </View>
  )
};