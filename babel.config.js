module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            store: './src/store',
            routes: './src/routes',
            hooks: './src/hooks',
            pages: './src/pages',
            components: './src/components',
            shared: './src/styles/shared',
            styles: './src/styles',
            ophelia: './src/ophelia',
          },
        },
      ],
      ['react-native-paper/babel'],
    ],
  };
};
