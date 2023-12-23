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

  const [temasPagosNivelMedio, setTemasPagosNivelMedio] = useState([
    { name: "Esportes", moedas: 15 },
    { name: "Animais", moedas: 30 },
    { name: "Transportes", moedas: 27 },
    { name: "Amizade", moedas: 12 },
    { name: "Marcas", moedas: 30 },
  ]);

  const [temasPagosNivelDificil, setTemasPagosNivelDificil] = useState([
    { name: "Espaço", moedas: 15 },
    { name: "Pintores", moedas: 30 },
    { name: "Amizade", moedas: 27 },
    { name: "Atores", moedas: 12 },
    { name: "Alimentos", moedas: 30 },
  ]);

  const [temasPagosNivelPro, setTemasPagosNivelPro] = useState([
    { name: "Carro", moedas: 15 },
    { name: "Roupas", moedas: 30 },
    { name: "Doces", moedas: 27 },
    { name: "Alimentos", moedas: 12 },
    { name: "Musicos", moedas: 30 },
  ]);

  useEffect(() => {
    getMoedasAcumuladas().then((moedasAcumuladas) => {
      setMoedas(moedasAcumuladas);
    });

    getTemasPagosNivelFacil().then((temasPagos) => {
      setTemasPagosNivelFacil(temasPagos);
    });

    getTemasPagosNivelMedio().then((temasPagos) => {
      setTemasPagosNivelMedio(temasPagos);
    });

    getTemasPagosNivelDificil().then((temasPagos) => {
      setTemasPagosNivelDificil(temasPagos);
    });

    getTemasPagosNivelPro().then((temasPagos) => {
      setTemasPagosNivelPro(temasPagos);
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

  const getTemasPagosNivelMedio = async () => {
    try {
      const temasPagos = await AsyncStorage.getItem('temasPagosNivelMedio');
      return temasPagos ? JSON.parse(temasPagos) : temasPagosNivelMedio;
    } catch (error) {
      console.error('Erro ao obter temas pagos nivel Medio:', error);
      return temasPagosNivelMedio;
    }
  };

  const saveTemasPagosNivelMedio = async (temasPagos) => {
    try {
      await AsyncStorage.setItem('temasPagosNivelMedio', JSON.stringify(temasPagos));
    } catch (error) {
      console.error('Erro ao salvar temas pagos medio:', error);
    }
  };

  const adicionarTemasPagosNivelMedio = (temasPagos) => {
    setTemasPagosNivelMedio(temasPagos);
    saveTemasPagosNivelMedio(temasPagos);
  };

  const getTemasPagosNivelDificil = async () => {
    try {
      const temasPagos = await AsyncStorage.getItem('temasPagosNivelDificil');
      return temasPagos ? JSON.parse(temasPagos) : temasPagosNivelDificil;
    } catch (error) {
      console.error('Erro ao obter temas pagos nivel Dificil:', error);
      return temasPagosNivelDificil;
    }
  };

  const saveTemasPagosNivelDificil = async (temasPagos) => {
    try {
      await AsyncStorage.setItem('temasPagosNivelDificil', JSON.stringify(temasPagos));
    } catch (error) {
      console.error('Erro ao salvar temas pagos Dificil:', error);
    }
  };

  const adicionarTemasPagosNivelDificil = (temasPagos) => {
    setTemasPagosNivelDificil(temasPagos);
    saveTemasPagosNivelDificil(temasPagos);
  };

  const getTemasPagosNivelPro = async () => {
    try {
      const temasPagos = await AsyncStorage.getItem('temasPagosNivelPro');
      return temasPagos ? JSON.parse(temasPagos) : temasPagosNivelPro;
    } catch (error) {
      console.error('Erro ao obter temas pagos nivel Pro:', error);
      return temasPagosNivelPro;
    }
  };

  const saveTemasPagosNivelPro = async (temasPagos) => {
    try {
      await AsyncStorage.setItem('temasPagosNivelPro', JSON.stringify(temasPagos));
    } catch (error) {
      console.error('Erro ao salvar temas pagos Pro:', error);
    }
  };

  const adicionarTemasPagosNivelPro = (temasPagos) => {
    setTemasPagosNivelPro(temasPagos);
    saveTemasPagosNivelPro(temasPagos);
  };


  return { 
    moedas,
    adicionarMoedas,
    buyTheme,
    temasPagosNivelFacil,
    adicionarTemasPagosNivelFacil,
    temasPagosNivelMedio,
    adicionarTemasPagosNivelMedio,
    temasPagosNivelDificil,
    adicionarTemasPagosNivelDificil,
    temasPagosNivelPro,
    adicionarTemasPagosNivelPro,
  };
};

export default MoedasComponent;
