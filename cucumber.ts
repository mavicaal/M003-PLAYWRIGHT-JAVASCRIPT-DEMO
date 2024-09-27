let options: string = [
    '--require ./tests/e2e/stepDefinitions/*.js',
    '--format @cucumber/pretty-formatter',
].join(' ');

let feature_options: string = [
    './tests/e2e/features/*.feature',
    options,
].join(' ');

export const run_options: string = feature_options;