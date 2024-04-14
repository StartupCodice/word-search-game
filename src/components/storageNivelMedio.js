import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NivelMedioComponent = () => {
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
  const [monumentos, setMonumentos] = useState(0);

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

    getMonumentos().then((nivel) => {
      setMonumentos(nivel);
    });
  }, []);

  const getPresentes = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelPresentesMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nivel de presentes:', error);
      return 0;
    }
  };

  const savePresentes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPresentesMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelDecoracoesMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nivel de decoracoes:', error);
      return 0;
    }
  };

  const saveDecoracoes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelDecoracoesMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelAlimentosMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nivel de alimentos:', error);
      return 0;
    }
  };

  const saveAlimentos = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAlimentosMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelPersonagensMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nivel de personagens:', error);
      return 0;
    }
  };

  const savePersonagens = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPersonagensMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelEsportesMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de esportes:', error);
      return 0;
    }
  };

  const saveNivelEsportes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEsportesMedio', nivel.toString());
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
      const cores = await AsyncStorage.getItem('nivelCoresMedio');
      return cores ? cores : 0;
    } catch (error) {
      console.error('Erro ao obter as cores:', error);
      return null;
    }
  };

  const saveCores = async (cores) => {
    try {
      await AsyncStorage.setItem('nivelCoresMedio', cores);
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
      const nivel = await AsyncStorage.getItem('nivelEmpregosMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de empregos:', error);
      return 0;
    }
  };

  const saveNivelEmpregos = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEmpregosMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelPaisesMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de países:', error);
      return 0;
    }
  };

  const saveNivelPaises = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPaisesMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelAnimaisMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de animais:', error);
      return 0;
    }
  };

  const saveNivelAnimais = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAnimaisMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelDocesMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de doces:', error);
      return 0;
    }
  };

  const saveNivelDoces = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelDocesMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelArvoresMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de árvores:', error);
      return 0;
    }
  };

  const saveNivelArvores = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelArvoresMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelAtoresMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de atores:', error);
      return 0;
    }
  };

  const saveNivelAtores = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAtoresMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelTransportesMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de transportes:', error);
      return 0;
    }
  };

  const saveNivelTransportes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelTransportesMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelBebidasMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de bebidas:', error);
      return 0;
    }
  };

  const saveNivelBebidas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelBebidasMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelAmizadeMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de amizade:', error);
      return 0;
    }
  };

  const saveNivelAmizade = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelAmizadeMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelMusicasMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de músicas:', error);
      return 0;    }
  };

  const saveNivelMusicas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelMusicasMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelNomesMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de nomes:', error);
      return 0;
    }
  };

  const saveNivelNomes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelNomesMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelRoupasMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de roupas:', error);
      return 0;
    }
  };

  const saveNivelRoupas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelRoupasMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelNaturezaMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de natureza:', error);
      return 0;
    }
  };

  const saveNivelNatureza = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelNaturezaMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelPintoresMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de pintores:', error);
      return 0;
    }
  };

  const saveNivelPintores = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelPintoresMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelCasaMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de casa:', error);
      return 0;
    }
  };

  const saveNivelCasa = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelCasaMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelCarrosMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de carros:', error);
      return 0;
    }
  };

  const saveNivelCarros = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelCarrosMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelFilmesMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de filmes:', error);
      return 0;
    }
  };

  const saveNivelFilmes = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelFilmesMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelEspacoMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de espaço:', error);
      return 0;
    }
  };

  const saveNivelEspaco = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEspacoMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelMusicosMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de músicos:', error);
      return 0;
    }
  };

  const saveNivelMusicos = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelMusicosMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelMarcasMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de marcas:', error);
      return 0;
    }
  };

  const saveNivelMarcas = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelMarcasMedio', nivel.toString());
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
      const nivel = await AsyncStorage.getItem('nivelEscritorasMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de escritoras:', error);
      return 0;
    }
  };

  const saveNivelEscritoras = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelEscritorasMedio', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de escritoras:', error);
    }
  };

  const addEscritoras = (nivel) => {
    setEscritoras(nivel);
    saveNivelEscritoras(nivel);
  };

  const getMonumentos = async () => {
    try {
      const nivel = await AsyncStorage.getItem('nivelMonumentosMedio');
      return nivel ? nivel : 0;
    } catch (error) {
      console.error('Erro ao pegar o nível de monumentos:', error);
      return 0;
    }
  };

  const saveNivelMonumentos = async (nivel) => {
    try {
      await AsyncStorage.setItem('nivelMonumentosMedio', nivel.toString());
    } catch (error) {
      console.error('Erro ao salvar o nível de monumentos:', error);
    }
  };

  const addMonumentos = (nivel) => {
    setMonumentos(nivel);
    saveNivelMonumentos(nivel);
  };

  return {
    monumentos,
    addMonumentos,
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

export default NivelMedioComponent;
