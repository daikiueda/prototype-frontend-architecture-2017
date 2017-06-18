import BaseElement from './BaseElement';

import './Table.scss';

const CSS_ROOT = 'commons--elements--table';

export default class Table extends BaseElement {
  static get elementType() {
    return 'table';
  }

  static get CSS_ROOT() {
    return CSS_ROOT;
  }

  static get CLASS_NAME() {
    return {
      TR: {
        CHECKED: `${CSS_ROOT}__tr--checked`,
      },
    };
  }
}
