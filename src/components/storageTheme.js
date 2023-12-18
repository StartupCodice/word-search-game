import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Theme = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    getTheme().then((theme) => {
      setTheme(theme);
    });
  }, []);

  const getTheme = async () => {
    try {
      const theme = await AsyncStorage.getItem('theme');
      return theme;
    } catch (error) {
      console.error('Erro ao obter o tema:', error);
      return 'theme';
    }
  };

  const saveTheme = async (theme) => {
    try {
      await AsyncStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Erro ao salvar o tema:', error);
    }
  };

  const addTheme = (theme) => {
    setTheme(theme);
    saveTheme(theme);
  };

  return { getTheme, addTheme };
};

export default Theme;
