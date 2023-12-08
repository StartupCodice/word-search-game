import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoedasComponent = () => {
  const [moedas, setMoedas] = useState(0);

  useEffect(() => {
    getMoedasAcumuladas().then((moedasAcumuladas) => {
      setMoedas(moedasAcumuladas);
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

  return { moedas, adicionarMoedas };

  
};

export default MoedasComponent;
