import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NivelFacilComponent = () => {
  const [presentes, setPresentes] = useState(0);
  const [decoracoes, setDecoracoes] = useState(0);
  const [alimentos, setAlimentos] = useState(0);
  const [personagens, setPersonagens] = useState(0);
  const [esportes, setEsportes] = useState(0);
  const [cores, setCores] = useState(0);
  const [empregos, setEmpregos] = useState(0);
  const [paises, setPaises] = useState(0);
  const [animais, setAnimais] = useState(0);
  const [doces, setDoces] = useState(0);
  const [arvores, setArvores] = useState(0);
  const [atores, setAtores] = useState(0);
  const [transportes, setTransportes] = useState(0);
  const [bebidas, setBebidas] = useState(0);
  const [amizade, setAmizade] = useState(0);
  const [musicas, setMusicas] = useState(0);
  const [nomes, setNomes] = useState(0);
  const [roupas, setRoupas] = useState(0);
  const [natureza, setNatureza] = useState(0);
  const [pintores, setPintores] = useState(0);
  const [casa, setCasa] = useState(0);
  const [carros, setCarros] = useState(0);
  const [filmes, setFilmes] = useState(0);
  const [espaco, setEspaco] = useState(0);
  const [musicos, setMusicos] = useState(0);
  const [marcas, setMarcas] = useState(0);
  const [escritoras, setEscritoras] = useState(0);

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

    getEsportes().then((nivel) => {
      setEsportes(nivel);
    });

    getCores().then((nivel) => {
      setCores(nivel);
    });

    getEmpregos().then((nivel) => {
      setEmpregos(nivel);
    });

    getPaises().then((nivel) => {
      setPaises(nivel);
    });

    getAnimais().then((nivel) => {
      setAnimais(nivel);
    });

    getDoces().then((nivel) => {
      setDoces(nivel);
    });

    getArvores().then((nivel) => {
      setArvores(nivel);
    });

    getAtores().then((nivel) => {
      setAtores(nivel);
    });

    getTransportes().then((nivel) => {
      setTransportes(nivel);
    });

    getBebidas().then((nivel) => {
      setBebidas(nivel);
    });

    getAmizade().then((nivel) => {
      setAmizade(nivel);
    });

    getMusicas().then((nivel) => {
      setMusicas(nivel);
    });

    getNomes().then((nivel) => {
      setNomes(nivel);
    });

    getRoupas().then((nivel) => {
      setRoupas(nivel);
    });

    getNatureza().then((nivel) => {
      setNatureza(nivel);
    });

    getPintores().then((nivel) => {
      setPintores(nivel);
    });

    getCasa().then((nivel) => {
      setCasa(nivel);
    });

    getCarros().then((nivel) => {
      setCarros(nivel);
    });

    getFilmes().then((nivel) => {
      setFilmes(nivel);
    });

    getEspaco().then((nivel) => {
      setEspaco(nivel);
    });

    getMusicos().then((nivel) => {
      setMusicos(nivel);
    });

    getMarcas().then((nivel) => {
      setMarcas(nivel);
    });

    getEscritoras().then((nivel) => {
      setEscritoras(nivel);
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

  const getEsportes = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelEsportesFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de esportes:', error);
      return 0;
    }
  };

  const saveNivelEsportes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEsportesFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de esportes:', error);
    }
  };

  const addEsportes = (nivel) => {
    setEsportes(nivel);
    saveNivelEsportes(nivel);
  };

  const getCores = async () => {
    try {
      const cores = await AsyncStorage.getItem('nivelCoresFacil');
      return cores;
    } catch (error) {
      console.error('Erro ao obter as cores:', error);
      return null;
    }
  };

  const saveCores = async (cores) => {
    try {
      await AsyncStorage.setItem('nivelCoresFacil', cores);
    } catch (error) {
      console.error('Erro ao salvar as cores:', error);
    }
  };

  const addCores = (cores) => {
    setCores(cores);
    saveCores(cores);
  };

  const getEmpregos = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelEmpregosFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de empregos:', error);
      return 0;
    }
  };

  const saveNivelEmpregos = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEmpregosFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de empregos:', error);
    }
  };

  const addEmpregos = (nivel) => {
    setEmpregos(nivel);
    saveNivelEmpregos(nivel);
  };

  const getPaises = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelPaisesFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de países:', error);
      return 0;
    }
  };

  const saveNivelPaises = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPaisesFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de países:', error);
    }
  };

  const addPaises = (nivel) => {
    setPaises(nivel);
    saveNivelPaises(nivel);
  };

  const getAnimais = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelAnimaisFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de animais:', error);
      return 0;
    }
  };

  const saveNivelAnimais = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAnimaisFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de animais:', error);
    }
  };

  const addAnimais = (nivel) => {
    setAnimais(nivel);
    saveNivelAnimais(nivel);
  };

  const getDoces = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelDocesFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de doces:', error);
      return 0;
    }
  };

  const saveNivelDoces = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelDocesFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de doces:', error);
    }
  };

  const addDoces = (nivel) => {
    setDoces(nivel);
    saveNivelDoces(nivel);
  };

  const getArvores = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelArvoresFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de árvores:', error);
      return 0;
    }
  };

  const saveNivelArvores = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelArvoresFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de árvores:', error);
    }
  };

  const addArvores = (nivel) => {
    setArvores(nivel);
    saveNivelArvores(nivel);
  };

  const getAtores = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelAtoresFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de atores:', error);
      return 0;
    }
  };

  const saveNivelAtores = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAtoresFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de atores:', error);
    }
  };

  const addAtores = (nivel) => {
    setAtores(nivel);
    saveNivelAtores(nivel);
  };

  const getTransportes = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelTransportesFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de transportes:', error);
      return 0;
    }
  };

  const saveNivelTransportes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelTransportesFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de transportes:', error);
    }
  };

  const addTransportes = (nivel) => {
    setTransportes(nivel);
    saveNivelTransportes(nivel);
  };

  const getBebidas = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelBebidasFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de bebidas:', error);
      return 0;
    }
  };

  const saveNivelBebidas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelBebidasFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de bebidas:', error);
    }
  };

  const addBebidas = (nivel) => {
    setBebidas(nivel);
    saveNivelBebidas(nivel);
  };

  const getAmizade = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelAmizadeFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de amizade:', error);
      return 0;
    }
  };

  const saveNivelAmizade = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAmizadeFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de amizade:', error);
    }
  };

  const addAmizade = (nivel) => {
    setAmizade(nivel);
    saveNivelAmizade(nivel);
  };

  const getMusicas = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelMusicasFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de músicas:', error);
      return 0;    }
  };

  const saveNivelMusicas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelMusicasFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de músicas:', error);
    }
  };

  const addMusicas = (nivel) => {
    setMusicas(nivel)
    saveNivelMusicas(nivel);
  };

  const getNomes = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelNomesFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de nomes:', error);
      return 0;
    }
  };

  const saveNivelNomes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelNomesFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de nomes:', error);
    }
  };

  const addNomes = (nivel) => {
    setNomes(nivel);
    saveNivelNomes(nivel);
  };

  const getRoupas = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelRoupasFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de roupas:', error);
      return 0;
    }
  };

  const saveNivelRoupas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelRoupasFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de roupas:', error);
    }
  };

  const addRoupas = (nivel) => {
    setRoupas(nivel)
    saveNivelRoupas(nivel);
  };

  const getNatureza = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelNaturezaFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de natureza:', error);
      return 0;
    }
  };
  
  const saveNivelNatureza = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelNaturezaFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de natureza:', error);
    }
  };
  
  const addNatureza = (nivel) => {
    setNatureza(nivel);
    saveNivelNatureza(nivel);
  };
  
  const getPintores = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelPintoresFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de pintores:', error);
      return 0;
    }
  };
  
  const saveNivelPintores = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPintoresFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de pintores:', error);
    }
  };
  
  const addPintores = (nivel) => {
    setPintores(nivel);
    saveNivelPintores(nivel);
  };
  
  const getCasa = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelCasaFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de casa:', error);
      return 0;
    }
  };
  
  const saveNivelCasa = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelCasaFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de casa:', error);
    }
  };
  
  const addCasa = (nivel) => {
    setCasa(nivel);
    saveNivelCasa(nivel);
  };

  const getCarros = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelCarrosFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de carros:', error);
      return 0;
    }
  };
  
  const saveNivelCarros = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelCarrosFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de carros:', error);
    }
  };
  
  const addCarros = (nivel) => {
    setCarros(nivel);
    saveNivelCarros(nivel);
  };
  
  const getFilmes = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelFilmesFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de filmes:', error);
      return 0;
    }
  };
  
  const saveNivelFilmes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelFilmesFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de filmes:', error);
    }
  };
  
  const addFilmes = (nivel) => {
    setFilmes(nivel);
    saveNivelFilmes(nivel);
  };
  
  const getEspaco = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelEspacoFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de espaço:', error);
      return 0;
    }
  };
  
  const saveNivelEspaco = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEspacoFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de espaço:', error);
    }
  };
  
  const addEspaco = (nivel) => {
    setEspaco(nivel);
    saveNivelEspaco(nivel);
  };

  const getMusicos = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelMusicosFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de músicos:', error);
      return 0;
    }
  };
  
  const saveNivelMusicos = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelMusicosFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de músicos:', error);
    }
  };
  
  const addMusicos = (nivel) => {
    setMusicos(nivel);
    saveNivelMusicos(nivel);
  };
  
  const getMarcas = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelMarcasFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de marcas:', error);
      return 0;
    }
  };
  
  const saveNivelMarcas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelMarcasFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de marcas:', error);
    }
  };
  
  const addMarcas = (nivel) => {
    setMarcas(nivel);
    saveNivelMarcas(nivel);
  };
  
  const getEscritoras = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelEscritorasFacil');
      return nivel;
    } catch (error) {
      console.error('Erro ao pegar o nível de escritoras:', error);
      return 0;
    }
  };
  
  const saveNivelEscritoras = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEscritorasFacil', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de escritoras:', error);
    }
  };
  
  const addEscritoras = (nivel) => {
    setEscritoras(nivel);
    saveNivelEscritoras(nivel);
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
  };
};

export default NivelFacilComponent;
