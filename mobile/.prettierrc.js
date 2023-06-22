module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  overrides: [
    {
      files: '*.(js,flow)',
      options: {
        parser: 'flow',
      },
    },
  ],
};