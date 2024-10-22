import { cdk } from 'projen';
import { TrailingComma } from 'projen/lib/javascript';

const project = new cdk.JsiiProject({
  author: 'daraghmartin',
  authorAddress: ' 12092354+daraghmartin@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: '@fluxineer/custom-cdk-projen-project',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/fluxineer/projen-cdk',
  devDeps: ['eslint-plugin-prettier', 'eslint-config-prettier'],
  peerDeps: ['constructs', 'projen'],
  keywords: [
    'aws',
    'cdk',
    'projen',
    'typescript',
  ],
});

/**
 * Add eslint ignore for CODEOWNERS etc
 */
[
  'node_modules',
  'package-lock.json',
  'yarn.lock',
  '*.MD',
  'CODEOWNERS',
].forEach((file2Ignore: string) => {
  project.eslint?.addIgnorePattern(file2Ignore);
});

/**
 * Implement prettier from projen
 *
 * @remarks
 *
 * For Trailing commas see: {@link https://prettier.io/docs/en/options.html}
 * "all" - Trailing commas wherever possible (including function parameters and calls). To run, JavaScript code formatted this way needs an engine that supports ES2017 (Node.js 8+ or a modern browser) or downlevel compilation. This also enables trailing commas in type parameters in TypeScript (supported since TypeScript 2.7 released in January 2018).
 * "es5" - Trailing commas where valid in ES5 (objects, arrays, etc.). Trailing commas in type parameters in TypeScript and Flow.
 * "none" - No trailing commas.
 */
project.prettier?.addOverride({
  files: '*.ts',
  options: {
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: TrailingComma.ES5,
    printWidth: 80,
  },
});

project.synth();