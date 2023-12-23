import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LevelComponent = () => {
  const [level, setLevel] = useState(1);

  useEffect(() => {
    getLevel().then((level) => {
      setLevel(level);
    });
  }, []);

  const getLevel = async () => {
    try {
      const level = await AsyncStorage.getItem('level');
      return level ? level : 1;
    } catch (error) {
      console.error('Erro ao o level:', error);
      return 0;
    }
  };

  const saveLevel = async (level) => {
    try {
      await AsyncStorage.setItem('level', level.toString());
    } catch (error) {
      console.error('Erro ao salvar o level:', error);
    }
  };

  const addLevel = (level) => {
    setLevel(level);
    saveLevel(level);
  };

  return { level, addLevel };
};

export default LevelComponent;
