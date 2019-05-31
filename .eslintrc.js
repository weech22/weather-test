module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
  },
};
