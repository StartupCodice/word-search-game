import React, { useEffect, useState } from 'react';
import { InterstitialAd, AdEventType, TestIds } from "react-native-google-mobile-ads";

const adUnitId = 'ca-app-pub-2989564787961797/2436947684';

const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
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