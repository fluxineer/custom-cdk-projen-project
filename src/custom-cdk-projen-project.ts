import {
  AwsCdkTypeScriptApp, AwsCdkTypeScriptAppOptions,
} from 'projen/lib/awscdk';
// import { awscdk, JsonPatch, github } from 'projen';
// import { PullRequestTemplate } from 'projen/lib/github';
import { DependabotScheduleInterval } from 'projen/lib/github/dependabot';
// import { CustomCdkProjenProjectOptions} from './consts';
import { TrailingComma } from 'projen/lib/javascript';

// export interface CustomCdkProjenProjectOptions extends DefaultCustomCdkProjenProjectOptions {}

export class CustomCdkProjenProject extends AwsCdkTypeScriptApp {
  constructor(options: AwsCdkTypeScriptAppOptions) {
    super({
      ...options,
      projenrcTs: true,
      prettier: true,
      devDeps: ['eslint-plugin-prettier', 'eslint-config-prettier'],
      keywords: ['cdk', 'iam'],
      dependabot: true,
      dependabotOptions: {
        scheduleInterval: DependabotScheduleInterval.WEEKLY,
      },
    });

    [
      'node_modules',
      'package-lock.json',
      'yarn.lock',
      '*.MD',
      'CODEOWNERS',
    ].forEach((file2Ignore: string) => {
      this.eslint?.addIgnorePattern(file2Ignore);
    });

    this.prettier?.addOverride({
      files: '*.ts',
      options: {
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: TrailingComma.ES5,
        printWidth: 80,
      },
    });

    this.addTask('docker-build', {
      exec: 'docker build -t myproject:latest .',
      receiveArgs: false,
    });
    this.addTask('docker-stable', {
      exec: 'docker build -t myproject:stable .',
      receiveArgs: false,
    });
    // const lines = [
    //   '### What does this PR change?',
    //   '<!--- Describe your changes in detail -->',
    // ];

    // new PullRequestTemplate(this.github!, {
    //   lines: lines,
    // });
  }
}
