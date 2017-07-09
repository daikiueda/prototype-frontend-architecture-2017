import { connect } from 'react-redux';

import Root from '../components/Root';
import { selectors as entitiesSelectors } from '../store/modules/entities';

const mapStateToProps = (state) => {
  return {
    ...state,
    entities: entitiesSelectors.denormalized(state),
  };
};

export default connect(mapStateToProps)(Root);
