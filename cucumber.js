let options = [
    '--require ./tests/e2e/stepDefinitions/*.js',
    '--format @cucumber/pretty-formatter',
].join(' ');

let feature_options = [
    './tests/e2e/features/*.feature',
    options,
].join(' ');

module.exports = {
    run_options: feature_options
}