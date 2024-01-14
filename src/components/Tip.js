import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, ImageBackground, Text } from 'react-native';
import styles from './tipStyle';
import { InterstitialAds } from './InterstitialAds';
import { RewardedAds } from './RewardedAds';

export default function Tip({ mostrarDica, totalTips, reset, receiveAwards }) {
  const [showAd, setShowAd] = useState(false);
  const [showRewardedAd, setShowRewardedAd] = useState(false);
  const [countTipsUsed, setCountTipsUsed] = useState(0);
  const [tips, setTips] = useState(totalTips);

  useEffect(() => {
    if (reset) setTips(totalTips);
  })

  const showTip = () => {
    setCountTipsUsed(prevCount => {
      const newCount = prevCount + 1;
      const result = totalTips - newCount;

      if (result >= 0) setTips(result);
      else setTips(0);

      return newCount;
    });
    
    if (tips != 0) {
      setShowAd(true);

      setTimeout(() => {
        mostrarDica();
        setShowAd(false);
      }, 1000);
    } else {
      setShowRewardedAd(true);
    }
  }

  const getRewarded = () => {
    setTips(tips + 1);
    receiveAwards();
    setShowRewardedAd(false);
  }
  
  return (
    <View>
      <TouchableOpacity onPress={showTip}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground
            source={require('../assets/lampada.png')}
            style={styles.Dica}
          >
            <Text style={styles.dicaNumber}>{tips}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      {
        showAd ?
          <InterstitialAds />
        : null
      }

      {
        showRewardedAd ?
          <RewardedAds getRewarded={getRewarded} />
        : null
      }
    </View>
  );
};