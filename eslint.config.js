import { ESLint } from 'eslint';

export default new ESLint({
  overrideConfig: {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    },
  },
});
