const path = require('path');

module.exports = function override(config) {
  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf instanceof Array) {
      rule.oneOf[rule.oneOf.length - 1].exclude = [/\.(js|mjs|jsx|cjs|ts|tsx)$/, /\.html$/, /\.json$/];
    }

    return rule;
  });

  if (!config.resolve) {
    config.resolve = {};
  }

  config.resolve['alias'] = {
    '@': path.resolve(__dirname, './src', 'components'),
    api: path.resolve(__dirname, './src', 'api'),
    assets: path.resolve(__dirname, './src', 'assets'),
    config: path.resolve(__dirname, './src', 'config'),
    controllers: path.resolve(__dirname, './src', 'controllers'),
    queries: path.resolve(__dirname, './src', 'queries'),
    hooks: path.resolve(__dirname, './src', 'hooks'),
    images: path.resolve(__dirname, './src', 'assets', 'images'),
    states: path.resolve(__dirname, './src', 'states'),
    tracking: path.resolve(__dirname, './src', 'tracking'),
    types: path.resolve(__dirname, './src', 'types'),
    utils: path.resolve(__dirname, './src', 'utils'),
    validation: path.resolve(__dirname, './src', 'validation'),
  };

  return config;
};
