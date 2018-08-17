const readPackage = require('read-pkg-up');

module.exports = originalRun => {
  function runScript(args, ...rest) {
    const name = args[0];
    if (name) {
      const data = readPackage.sync({ normalize: false });
      const { scripts } = data.pkg;
      if (scripts && !(name in scripts)) {
        args.unshift('npm:extends');
      }
    }
    return originalRun(args, ...rest);
  }

  runScript.usage = originalRun.usage;
  runScript.completion = originalRun.completion;

  return runScript;
};
