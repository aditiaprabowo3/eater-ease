const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
    tests: 'e2e/**/*.test.js',
    output: 'e2e/output',
    helpers: {
        Playwright: {
            browser: 'chromium',
            url: 'http://localhost:8080',
            show: true,
            windowSize: '1200x900',
        },
    },
    include: {
        I: './steps_file.js',
    },
    bootstrap: null,
    mocha: {},
    name: 'restaurant-apps-starter-project',
    plugins: {
        retryFailedStep: {
            enabled: true,
        },
        screenshotOnFail: {
            enabled: true,
        },
    },
};