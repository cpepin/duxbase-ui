module.exports = function babelConfig(api) {
  api.cache(true);

  return {
    presets: [['@babel/preset-env', { useBuiltIns: 'usage', targets: { ie: '11' }, corejs: 3 }]],
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          pragma: 'h',
          pragmaFrag: 'Fragment',
        },
      ],
    ],
  };
};
