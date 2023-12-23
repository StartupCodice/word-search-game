import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NivelDificilComponent = () => {
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
      const nivel = await AsyncStorage.getItem('nivelPresentesDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nivel de presentes:', error);
      return 0;
    }
  };

  const savePresentes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPresentesDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelDecoracoesDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nivel de decoracoes:', error);
      return 0;
    }
  };

  const saveDecoracoes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelDecoracoesDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelAlimentosDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nivel de alimentos:', error);
      return 0;
    }
  };

  const saveAlimentos = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAlimentosDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelPersonagensDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nivel de personagens:', error);
      return 0;
    }
  };

  const savePersonagens = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPersonagensDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelEsportesDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de esportes:', error);
      return 0;
    }
  };

  const saveNivelEsportes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEsportesDificil', nivel.toString());
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
      const cores = await AsyncStorage.getItem('nivelCoresDificil');
      return cores;
    } catch (error) {
      console.error('Erro ao obter as cores:', error);
      return null;
    }
  };

  const saveCores = async (cores) => {
    try {
      await AsyncStorage.setItem('nivelCoresDificil', cores);
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
      const nivel = await AsyncStorage.getItem('nivelEmpregosDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de empregos:', error);
      return 0;
    }
  };

  const saveNivelEmpregos = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEmpregosDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelPaisesDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de países:', error);
      return 0;
    }
  };

  const saveNivelPaises = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPaisesDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelAnimaisDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de animais:', error);
      return 0;
    }
  };

  const saveNivelAnimais = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAnimaisDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelDocesDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de doces:', error);
      return 0;
    }
  };

  const saveNivelDoces = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelDocesDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelArvoresDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de árvores:', error);
      return 0;
    }
  };

  const saveNivelArvores = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelArvoresDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelAtoresDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de atores:', error);
      return 0;
    }
  };

  const saveNivelAtores = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAtoresDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelTransportesDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de transportes:', error);
      return 0;
    }
  };

  const saveNivelTransportes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelTransportesDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelBebidasDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de bebidas:', error);
      return 0;
    }
  };

  const saveNivelBebidas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelBebidasDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelAmizadeDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de amizade:', error);
      return 0;
    }
  };

  const saveNivelAmizade = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAmizadeDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelMusicasDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de músicas:', error);
      return 0;    }
  };

  const saveNivelMusicas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelMusicasDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelNomesDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de nomes:', error);
      return 0;
    }
  };

  const saveNivelNomes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelNomesDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelRoupasDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de roupas:', error);
      return 0;
    }
  };

  const saveNivelRoupas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelRoupasDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelNaturezaDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de natureza:', error);
      return 0;
    }
  };
  
  const saveNivelNatureza = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelNaturezaDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelPintoresDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de pintores:', error);
      return 0;
    }
  };
  
  const saveNivelPintores = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPintoresDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelCasaDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de casa:', error);
      return 0;
    }
  };
  
  const saveNivelCasa = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelCasaDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelCarrosDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de carros:', error);
      return 0;
    }
  };
  
  const saveNivelCarros = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelCarrosDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelFilmesDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de filmes:', error);
      return 0;
    }
  };
  
  const saveNivelFilmes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelFilmesDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelEspacoDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de espaço:', error);
      return 0;
    }
  };
  
  const saveNivelEspaco = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEspacoDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelMusicosDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de músicos:', error);
      return 0;
    }
  };
  
  const saveNivelMusicos = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelMusicosDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelMarcasDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de marcas:', error);
      return 0;
    }
  };
  
  const saveNivelMarcas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelMarcasDificil', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelEscritorasDificil');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de escritoras:', error);
      return 0;
    }
  };
  
  const saveNivelEscritoras = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEscritorasDificil', nivel.toString());
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

export default NivelDificilComponent;
