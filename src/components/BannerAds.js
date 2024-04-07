import { View } from "react-native";

import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

const adUnitId = "ca-app-pub-2989564787961797/5220374769";

export function BannerAds() {
  return (
    <View>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{ requestNonPersonalizedAdsOnly: true }}
      />
    </View>
  )
}