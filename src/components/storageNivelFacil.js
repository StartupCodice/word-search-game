import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NivelFacilComponent = () => {
  const [presentes, setPresentes] = useState(0);
  const [decoracoes, setDecoracoes] = useState(0);
  const [alimentos, setAlimentos] = useState(0);
  const [personagens, setPersonagens] = useState(0);

  useEffect(() => {
    getPresentes().then((nivel) => {
      setPresentes(nivel);
    });

    getDecoracoes().then((nivel) => {
      setDecoracoes(nivel);
    });

    getAlimentos().then((nivel) => {
      setAlimentos(nivel);
    });

    getPersonagens().then((nivel) => {
      setPersonagens(nivel);
    });
  }, []);

  const getPresentes = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelPresentesFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nivel de presentes:', error);
      return 0;
    }
  };

  const savePresentes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPresentesFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao nivel presentes:', error);
    }
  };

  const addPresentes = (nivel) => {
    setPresentes(nivel);
    savePresentes(nivel);
  };

  const getDecoracoes = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelDecoracoesFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nivel de decoracoes:', error);
      return 0;
    }
  };

  const saveDecoracoes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelDecoracoesFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao nivel decoracoes:', error);
    }
  };

  const addDecoracoes = (nivel) => {
    setDecoracoes(nivel);
    saveDecoracoes(nivel);
  };

  const getAlimentos = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelAlimentosFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nivel de alimentos:', error);
      return 0;
    }
  };

  const saveAlimentos = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAlimentosFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao nivel alimento:', error);
    }
  };

  const addAlimento = (nivel) => {
    setAlimentos(nivel);
    saveAlimentos(nivel);
  };

  const getPersonagens = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelPersonagensFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nivel de personagens:', error);
      return 0;
    }
  };

  const savePersonagens = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPersonagensFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao nivel alimento:', error);
    }
  };

  const addPersonagens = (nivel) => {
    setPersonagens(nivel);
    savePersonagens(nivel);
  };

  return { 
    presentes, 
    addPresentes,
    decoracoes,
    addDecoracoes,
    alimentos,
    addAlimento,
    personagens,
    addPersonagens,
  };
};

export default NivelFacilComponent;
