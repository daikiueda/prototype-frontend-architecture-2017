import classNames from 'classnames';
import BaseElement from './BaseElement';

import './Button.scss';

const CSS_ROOT = 'commons--elements--button';

export default class Button extends BaseElement {
  static get elementType() {
    return 'button';
  }

  static get CSS_ROOT() {
    return CSS_ROOT;
  }
}

Button.Inline = class Inline extends BaseElement {
  static get elementType() {
    return 'button';
  }

  static get CSS_ROOT() {
    return classNames(CSS_ROOT, `${CSS_ROOT}-inline`);
  }
};
