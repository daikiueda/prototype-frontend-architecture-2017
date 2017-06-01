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

module.exports = function(storybookBaseConfig) {
  return storybookBaseConfig;
};
