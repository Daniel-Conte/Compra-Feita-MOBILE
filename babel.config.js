module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@hooks': './src/hooks',
            '@config': './src/config',
            '@typings': './src/types',
          },
        },
      ],
      'react-native-paper/babel',
    ],
  };
};
