import { Platform, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { width, height } = Dimensions.get('window');

(() => {
  EStyleSheet.build({
    $height: height,
    $width: width,
    $orange: '#e24518',
    $purple: '#1e084b',
    $lightPurple: '#998ab9',
    $darkGray: '#2e2e2e',
    $mediumGray: '#4a4a4a',
    $lightGray: '#9b9b9b',
    $darkCream: '#f9f9f9',
    $lightCream: '#ebebeb',
    $white: '#ffffff',
    $black: '#000000',
    $textboxBorder: '#f5f5f5',
    $avatar: '#d8d8d8',
    $offWhite: '#F8F8F8',
    $lightShadow: 'rgba(204, 204, 204, 0.5)',
    $shadow: 'rgba(209, 209, 209, 0.5)',
    $darkShadow: 'rgba(229, 229, 229, 0.5)',
    $label: '#9b9ea0',
    $line: '#9e9e9e',
    $text: '#202d31',
    $labelAnother: '#75797b',
    $modal: 'rgba(12, 4, 64, 0.88)',
    $input: '#747474',
    $loginShadow: '#080118',
    $multineTextBox: '#dddddd',
    $harmoniaSansProCyrRegular: Platform.select({
      android: 'harmoniasansprocyr_regular',
      ios: 'HarmoniaSansProCyr-Regular',
    }),
    $harmoniaSansProCyrBlack: Platform.select({
      android: 'harmoniasansprocyr_black',
      ios: 'HarmoniaSansProCyr-Black',
    }),
    $freightSansProSemiboldRegular: Platform.select({
      android: 'freightsansprosemibold_regular',
      ios: 'FreightSansProSemibold-Regular',
    }),
    $freightSansProMediumRegular: Platform.select({
      ios: 'FreightSansProMedium-Regular',
      android: 'freightsanspromedium_regular',
    }),
    $freightSansProLightRegular: Platform.select({
      ios: 'FreightSansProLight-Regular',
      android: 'freightsansprolight_regular',
    }),
    $freightSansProBookRegular: Platform.select({
      ios: 'FreightSansProBook-Regular',
      android: 'freightsansprobook_regular',
    }),
    $headerFontWeight: Platform.select({
      android: '100',
      ios: 'normal',
    }),
  });
})();
