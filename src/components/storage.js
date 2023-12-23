import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoedasComponent = () => {
  const [moedas, setMoedas] = useState(0);
  const [temasPagosNivelFacil, setTemasPagosNivelFacil] = useState([
    { name: "Escritoras", moedas: 15 },
    { name: "Natureza", moedas: 30 },
    { name: "Bebidas", moedas: 27 },
    { name: "Empregos", moedas: 12 },
    { name: "Carros", moedas: 30 },
  ]);

  useEffect(() => {
    getMoedasAcumuladas().then((moedasAcumuladas) => {
      setMoedas(moedasAcumuladas);
    });

    getTemasPagosNivelFacil().then((temasPagos) => {
      setTemasPagosNivelFacil(temasPagos);
    });
  }, []);

  const getMoedasAcumuladas = async () => {
    try {
      const moedasString = await AsyncStorage.getItem('moedas');
      return moedasString ? parseInt(moedasString) : 0;
    } catch (error) {
      console.error('Erro ao obter moedas:', error);
      return 0;
    }
  };

  const saveMoedasAcumuladas = async (moedas) => {
    try {
      await AsyncStorage.setItem('moedas', moedas.toString());
    } catch (error) {
      console.error('Erro ao salvar moedas:', error);
    }
  };

  const adicionarMoedas = (quantidade) => {
    setMoedas((moedasAntigas) => moedasAntigas + quantidade);
    saveMoedasAcumuladas(moedas + quantidade);
  };

  const buyTheme = (price) => {
    setMoedas((moedasAntigas) => moedasAntigas - price);
    saveMoedasAcumuladas(moedas - price);
  }

  const getTemasPagosNivelFacil = async () => {
    try {
      const temasPagos = await AsyncStorage.getItem('temasPagosNivelFacil');
      return temasPagos ? JSON.parse(temasPagos) : temasPagosNivelFacil;
    } catch (error) {
      console.error('Erro ao obter temas pagos nivel facil:', error);
      return temasPagosNivelFacil;
    }
  };

  const saveTemasPagosNivelFacil = async (temasPagos) => {
    try {
      await AsyncStorage.setItem('temasPagosNivelFacil', JSON.stringify(temasPagos));
    } catch (error) {
      console.error('Erro ao salvar temas pagos:', error);
    }
  };

  const adicionarTemasPagosNivelFacil = (temasPagos) => {
    setTemasPagosNivelFacil(temasPagos);
    saveTemasPagosNivelFacil(temasPagos);
  };

  return { 
    moedas,
    adicionarMoedas,
    buyTheme,
    temasPagosNivelFacil,
    adicionarTemasPagosNivelFacil
  };
};

export default MoedasComponent;
