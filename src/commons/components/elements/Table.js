import BaseElement from './BaseElement';

import './Table.scss';

export default class Table extends BaseElement {
  static get elementType() {
    return 'table';
  }

  static get CSS_ROOT() {
    return 'commons--elements__table';
  }
}
