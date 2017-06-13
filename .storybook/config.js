import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

import '../src/commons/components/foundational-styles.scss';

function loadStories() {
  require('./.story-files');
}

configure(loadStories, module);
