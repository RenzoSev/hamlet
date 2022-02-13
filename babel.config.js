module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            store: './src/app/store',
            routes: './src/app/routes',
            hooks: './src/app/hooks',
            pages: './src/app/pages',
            components: './src/app/components',
            shared: './src/app/styles/shared',
            styles: './src/app/styles',
            types: './src/app/types',
            ophelia: './src/ophelia',
          },
        },
      ],
      ['react-native-paper/babel'],
    ],
  };
};
