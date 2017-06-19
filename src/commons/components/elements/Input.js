import BaseElement from './BaseElement';

import './Input.scss';

const CSS_ROOT = 'commons--elements--input';

export default class Input extends BaseElement {
  static get elementType() {
    return 'input';
  }

  static get CSS_ROOT() {
    return CSS_ROOT;
  }
}
