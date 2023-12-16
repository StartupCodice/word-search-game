// MusicGlobalContext.js
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import styles from '../pages/Home/style';

const MusicGlobalContext = createContext();

export const useMusicGlobal = () => {
  return useContext(MusicGlobalContext);
};

export const MusicGlobalProvider = ({ children }) => {
  const [sound, setSound] = useState(null);
  const soundRef = useRef(sound);
  const [volume, setVolume] = useState(1.0);

  const playMusic = async () => {
    try {
      if (!soundRef.current) {
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/DecktheHalls.mp3')
        );
        soundRef.current = sound;
        setSound(soundRef.current);
        await soundRef.current.playAsync();
        soundRef.current.setIsLoopingAsync(true);
        soundRef.current.setVolumeAsync(volume);
      }
    } catch (error) {
      console.error('Erro ao reproduzir música', error);
    }
  };

  const stopMusic = async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
    }
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    if (soundRef.current) {
      soundRef.current.setVolumeAsync(value);
    }
  };

  useEffect(() => {
    playMusic();

    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  return (
    <MusicGlobalContext.Provider value={{ playMusic, stopMusic, handleVolumeChange }}>
      {children}
    </MusicGlobalContext.Provider>
  );
};
