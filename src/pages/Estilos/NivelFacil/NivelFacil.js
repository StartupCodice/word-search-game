import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from '../../Home/style';
import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import NiveisFaceis from '../../../components/storageNivelFacil';
import MoedasComponent from '../../../components/storage';
import Modal from 'react-native-modal';

export function NivelFacil({ navigation }) {
  const {
    moedas,
    buyTheme,
    temasPagosNivelFacil,
    adicionarTemasPagosNivelFacil } = MoedasComponent();
  const {
      presentes,
      decoracoes,
      alimentos,
      personagens,
      esportes,
      cores,
      empregos,
      paises,
      animais,
      doces,
      arvores,
      atores,
      transportes,
      bebidas,
      amizade,
      musicas,
      nomes,
      roupas,
      natureza,
      pintores,
      casa,
      carros,
      filmes,
      espaco,
      musicos,
      marcas,
      escritoras,
  } = NiveisFaceis();
  const [showModalTheme, setShowModalTheme] = useState(false);
  const [showModalSemSaldo, setShowModalSemSaldo] = useState(false);
  const [comprarTema, setComprarTema] = useState('');
  const [priceTheme, setPriceTheme] = useState(0);

  const buy = () => {
    setShowModalTheme(false);
    buyTheme(priceTheme);

    temasPagosNivelFacil.forEach((tema) => {
      if (tema.name == comprarTema) tema.moedas = null;
    })

    adicionarTemasPagosNivelFacil(temasPagosNivelFacil);
  }

  const getBuyLevel = (name) => {
    const tema = temasPagosNivelFacil.find((tema) => tema.name === name);
    return tema ? tema.moedas : 0;
  }

  return (
    <ScrollView style={styles.scrollContainer}>   
      <ImageBackground source={require('../../../assets/temanatal.jpg')} style={styles.imageBackground}>
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
              screenName="Presentes"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Decorações"
              imagePath={require('./../../../assets/presenteNatal.png')}
              count={decoracoes}
              screenName="Decoracoes"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Alimentos"
              imagePath={require('./../../../assets/ComidasNatal.png')}
              count={alimentos}
              screenName="Alimentos"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Personagens"
              imagePath={require('./../../../assets/papai-noel.png')}
              count={personagens}
              screenName="Personagens"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Esportes"
              imagePath={require('./../../../assets/esportes.png')}
              count={esportes}
              screenName="EsportesFacil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Cores"
              imagePath={require('./../../../assets/cores.png')}
              count={cores}
              screenName="CoresFacil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Empregos"
              imagePath={require('./../../../assets/empregos.png')}
              count={empregos}
              screenName="EmpregosFacil"
            />

            <ThemeButton
              navigation={navigation}
              themeName="Países"
              imagePath={require('./../../../assets/paises.png')}
              count={paises}
              screenName="PaisesFacil"
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
              screenName="Animais"
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
              screenName="Doces"
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
              screenName="Arvores"
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
              screenName="Atores"
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
              screenName="Transportes"
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
              screenName="Bebidas"
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
              screenName="Amizade"
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
              screenName="Musicas"
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
              screenName="Nomes"
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
              screenName="Roupas"
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
              screenName="Natureza"
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
              screenName="Pintores"
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
              screenName="Casa"
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
              screenName="Carros"
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
              screenName="Filmes"
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
              screenName="Espaço"
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
              screenName="Musicos"
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
              screenName="Marcas"
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
              screenName="Escritoras"
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
