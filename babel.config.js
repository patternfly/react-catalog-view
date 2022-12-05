module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current', esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-flow',
    '@babel/preset-typescript'
  ]
};