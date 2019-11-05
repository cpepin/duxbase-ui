module.exports = function babelConfig(api) {
  api.cache(true);

  return {
    presets: [['@babel/preset-env', { useBuiltIns: 'usage', targets: 'defaults', corejs: 3 }]],
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
