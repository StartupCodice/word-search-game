import React, { useEffect, useState } from 'react';
import { InterstitialAd, AdEventType, TestIds } from "react-native-google-mobile-ads";

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});

export function InterstitialAds({ closeInterstitial }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
      interstitial.show();
    });

    const closeModal = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      closeInterstitial();
    })

    interstitial.load();
    return unsubscribe;
  }, []);

  if (!loaded) {
    return null;
  }
}