import BaseElement from './BaseElement';

import './Textarea.scss';

const CSS_ROOT = 'commons--elements--textarea';

export default class Table extends BaseElement {
  static get elementType() {
    return 'textarea';
  }

  static get CSS_ROOT() {
    return CSS_ROOT;
  }
}
