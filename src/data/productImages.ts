import iphoneDesertImg from '../assets/images/iphone_desert_titanium_1794308123869.jpg';
import iphoneNaturalImg from '../assets/images/iphone_natural_titanium_1794308124562.jpg';
import iphoneWhiteImg from '../assets/images/iphone_white_titanium_1794308124551.jpg';
import iphoneBlackImg from '../assets/images/iphone_black_titanium_1794308126292.jpg';
import macbookImg from '../assets/images/macbook_studio_1793923767706.jpg';
import ipadImg from '../assets/images/ipad_studio_1793923784670.jpg';
import airpodsImg from '../assets/images/airpods_studio_1793923800707.jpg';
import watchImg from '../assets/images/apple_watch_studio_1793923816453.jpg';
import dysonImg from '../assets/images/dyson_airwrap_studio_1793923833654.jpg';
import sonyImg from '../assets/images/sony_camera_studio_1793923848560.jpg';
import raybanImg from '../assets/images/rayban_meta_studio_1793923863474.jpg';
import djiImg from '../assets/images/dji_drone_studio_1793923882878.jpg';
import yandexImg from '../assets/images/yandex_speaker_studio_1793923897561.jpg';

export const getProductWebpUrl = (filename: string) => {
  const envBase = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
  if (!envBase || envBase === '/' || envBase === './') {
    return `/products/${filename}`;
  }
  const cleanBaseUrl = envBase.endsWith('/') ? envBase : `${envBase}/`;
  return `${cleanBaseUrl}products/${filename}`;
};

export const getAistudioAssetUrl = (filename: string) => {
  const envBase = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
  if (!envBase || envBase === '/' || envBase === './') {
    return `/assets/aistudio/${filename}`;
  }
  const cleanBaseUrl = envBase.endsWith('/') ? envBase : `${envBase}/`;
  return `${cleanBaseUrl}assets/aistudio/${filename}`;
};

// Standard fallback studio assets
export const PRODUCT_IMAGES = {
  iphone: iphoneDesertImg,
  iphoneDesert: iphoneDesertImg,
  iphoneNatural: iphoneNaturalImg,
  iphoneWhite: iphoneWhiteImg,
  iphoneBlack: iphoneBlackImg,
  macbook: macbookImg,
  ipad: ipadImg,
  airpods: airpodsImg,
  watch: watchImg,
  dyson: dysonImg,
  sony: sonyImg,
  canon: sonyImg, // high-end camera fallback
  rayban: raybanImg,
  dji: djiImg,
  yandex: yandexImg,
};

// WebP image URLs placed in /public/products/ and /public/assets/aistudio/
export const WEBP_IMAGES = {
  // Apple Watch 11
  watch11Black: getProductWebpUrl('apple_watch_11_42_black.webp'),
  watch11Grey: getProductWebpUrl('apple_watch_11_42_grey.webp'),
  watch11Pink: getProductWebpUrl('apple_watch_11_42_pink.webp'),
  watch11Silver: getProductWebpUrl('apple_watch_11_42_silver.webp'),

  // Apple Watch SE
  watchSe40Black: getProductWebpUrl('apple_watch_se_40_black.webp'),
  watchSe40Golden: getProductWebpUrl('apple_watch_se_40_golden.webp'),
  watchSe44Black: getProductWebpUrl('apple_watch_se_44_black.webp'),
  watchSe44Golden: getProductWebpUrl('apple_watch_se_44_golden.webp'),

  // iPad Air 11 M4
  ipadAirBlue: getProductWebpUrl('ipad_air_11_m4_blue.webp'),
  ipadAirPurple: getProductWebpUrl('ipad_air_11_m4_purple.webp'),
  ipadAirSpaceGray: getProductWebpUrl('ipad_air_11_m4_spacegray.webp'),
  ipadAirStarlight: getProductWebpUrl('ipad_air_11_m4_starlight.webp'),

  // iPhone 18 Pro
  iphone18Pro: getProductWebpUrl('iphone_18_pro.webp'),
  iphone18ProBlack: getProductWebpUrl('iphone_18_pro_black.webp'),
  iphone18ProBlue: getProductWebpUrl('iphone_18_pro_blue.webp'),
  iphone18ProRed: getProductWebpUrl('iphone_18_pro_red.webp'),
  iphone18ProSilver: getProductWebpUrl('iphone_18_pro_silver.webp'),

  // iPhone 17
  iphone17Black: getProductWebpUrl('iphone_17_black.webp'),
  iphone17Blue: getProductWebpUrl('iphone_17_blue.webp'),
  iphone17Green: getProductWebpUrl('iphone_17_green.webp'),
  iphone17Purple: getProductWebpUrl('iphone_17_purple.webp'),
  iphone17White: getProductWebpUrl('iphone_17_white.webp'),

  // iPhone 17 Pro
  iphone17ProBlue: getProductWebpUrl('iphone_17_pro_blue.webp'),
  iphone17ProOrange: getProductWebpUrl('iphone_17_pro_orange.webp'),
  iphone17ProWhite: getProductWebpUrl('iphone_17_pro_white.webp'),

  // iPhone A16
  iphoneA16Blue: getProductWebpUrl('iphone_a16_blue.webp'),
  iphoneA16LightBlue: getProductWebpUrl('iphone_a16_lightblue.webp'),
  iphoneA16Pink: getProductWebpUrl('iphone_a16_pink.webp'),
  iphoneA16Silver: getProductWebpUrl('iphone_a16_silver.webp'),
  iphoneA16Yellow: getProductWebpUrl('iphone_a16_yellow.webp'),

  // iPhone Duo
  iphoneDuoBlue: getProductWebpUrl('iphone_duo_blue.webp'),
  iphoneDuoWhite: getProductWebpUrl('iphone_duo_white.webp'),

  // MacBook Air 13 M5
  macbookAirBlue: getProductWebpUrl('macbook_air_13_m5_blue.webp'),
  macbookAirGolden: getProductWebpUrl('macbook_air_13_m5_golden.webp'),
  macbookAirLightBlue: getProductWebpUrl('macbook_air_13_m5_lightblue.webp'),
  macbookAirSilver: getProductWebpUrl('macbook_air_13_m5_silver.webp'),

  // MacBook Neo 13
  macbookNeoBlue: getProductWebpUrl('macbook_neo_13_blue.webp'),
  macbookNeoPink: getProductWebpUrl('macbook_neo_13_pink.webp'),
  macbookNeoSilver: getProductWebpUrl('macbook_neo_13_silver.webp'),
  macbookNeoYellow: getProductWebpUrl('macbook_neo_13_yellow.webp'),

  // AirPods
  airpods4: getAistudioAssetUrl('airpods4_a2972c85.webp'),
  airpods5: getAistudioAssetUrl('airpods5_dc229b1b.webp'),
  airpodsPro: getAistudioAssetUrl('airpods_pro_b320fb7b.webp'),

  // Canon & Sony
  canonG7Mark3Grey: getAistudioAssetUrl('canon_g7_mark3_8194c16f.webp'),
  canonG7Mark3Black: getAistudioAssetUrl('canon_g7_mark3_black_26da4a19.webp'),
  canonSx740: getAistudioAssetUrl('canon_sx740_90263ea3.webp'),
  sonyZve10: getAistudioAssetUrl('sony_zve-10_834e1902.webp'),

  // Ray-Ban Meta
  raybanGen1: getAistudioAssetUrl('rayban_gen1_b810ea73.webp'),
  raybanGen2: getAistudioAssetUrl('rayban_gen2_aac57857.webp'),

  // DJI
  djiMicMini: getAistudioAssetUrl('DJI_MIC_mini_97af69ce.webp'),
  djiMicMiniBlack: getAistudioAssetUrl('DJI_MIC_mini_________97af69ce.webp'),
  djiOsmoPocket4: getAistudioAssetUrl('DJI_OSMO_pocket_4_standart_2c8adaab.webp'),

  // Yandex Station
  yandexLite2: getAistudioAssetUrl('____________________2_1e188810.webp'),
  yandexStreet: getAistudioAssetUrl('_____________________e31516d3.webp'),
  yandexMidi: getAistudioAssetUrl('____________________518eeb54.webp'),
};
