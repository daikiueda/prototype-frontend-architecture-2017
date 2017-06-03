require('babel-register');

const module_ = require('../webpack.config.prod.babel').module_;

// Informal Hooking :p
function updateFileList() {
  const fs = require('fs');
  const path = require('path');
  const glob = require('glob');

  const storyFileRequires =
    glob.sync('./src/**/.stories/**/*story.js')
      .map((filePath) => `require('../${filePath}');`)
      .join('\n');

  fs.writeFileSync(
    path.resolve(__dirname, '.story-files.js'),
    storyFileRequires,
    'UTF-8'
  );
}
updateFileList();

module.exports =  function(storybookBaseConfig) {
  const adoptions = ['.css', '.scss'];

  storybookBaseConfig.module.rules.push(
    ...module_.rules
      .filter(rule => adoptions
        .map(type => rule.test.test(type))
        .reduce((prev, res) => prev || res)
      )
  );

  return storybookBaseConfig;
};
