import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'ja-daragh',
  authorAddress: '158112862+ja-daragh@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'os',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/158112862+ja-daragh/os.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();