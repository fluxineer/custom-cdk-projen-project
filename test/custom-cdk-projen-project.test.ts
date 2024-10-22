import { synthSnapshot } from 'projen/lib/util/synth';
import { CustomCdkProjenProject } from '../src';

const cdkVersion = '2.159.1';
const defaultReleaseBranch = 'main';

console.log(cdkVersion);
console.log(defaultReleaseBranch);

describe('ustomCdkProjenProject', () => {
  test('project name is set properly', () => {
    // GIVEN
    const name = 'test1';
    const project = new CustomCdkProjenProject({
      name,
      cdkVersion,
      defaultReleaseBranch,
    });

    // WHEN
    const snapshot = synthSnapshot(project);

    // THEN
    expect(snapshot['package.json']!.name).toBe(
      name,
    );
  });
});