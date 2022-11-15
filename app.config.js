import { config } from 'dotenv';
config();

export default {
  expo: {
    name: 'Compra Feita',
    slug: 'compra-feita',
    version: '1.0.0',
    owner: 'danielcontedev',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'com.danidev.comprafeita',
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#1970E6',
      },
    },
    web: {
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      [
        'expo-notifications',
        {
          icon: './assets/images/icon.png',
          color: '#ffffff',
        },
      ],
    ],
    extra: {
      eas: {
        projectId: '0aef3975-becf-4eeb-ae9b-75a54766bf3e',
      },
      apiUrl: process.env.API_URL,
    },
  },
};
