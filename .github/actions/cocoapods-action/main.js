var shell = require('shelljs');

function printSoftEnv(name, cli) {
    shell.exec('echo "\033[1m' + name + ':\033[0m \n`' + cli + '`"')
}

printSoftEnv("Xcode Version", "xcodebuild -version")
printSoftEnv("CocoaPods Version", "pod --version")
printSoftEnv("xcpretty Version", "xcpretty --version")