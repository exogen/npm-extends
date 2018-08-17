const runNames = new Set(['run', 'run-script', 'runScript']);

if (runNames.has(process.argv[2]) && module.parent) {
  const path = require('path');
  const runPath = path.join(module.parent.filename, '..', 'run-script.js');
  try {
    const run = require(runPath);
    const enhancedRun = require('./run');
    require.cache[runPath].exports = enhancedRun(run);
  } catch (err) {}
}
