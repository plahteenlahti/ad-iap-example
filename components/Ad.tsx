import React, { useRef } from 'react';
import { Platform, View, Dimensions } from 'react-native';
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

interface AdProps {
  style?: any;
}

export const Ad: React.FC<AdProps> = ({ style }) => {
  const bannerRef = useRef<BannerAd>(null);
  const screenHeight = Dimensions.get('window').height;
  const adHeight = screenHeight / 3;

  // react-native-google-mobile-ads documentation:
  // (iOS) WKWebView can terminate if app is in a "suspended state", resulting in an empty banner when app returns to foreground.
  // Therefore it's advised to "manually" request a new ad when the app is foregrounded (https://groups.google.com/g/google-admob-ads-sdk/c/rwBpqOUr8m8).
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  return (
    <View style={[{ height: adHeight }, style]}>
      <BannerAd 
        ref={bannerRef} 
        unitId={adUnitId} 
        size={`${Dimensions.get('window').width - 20}x${adHeight}`}
      />
    </View>
  );
}; 