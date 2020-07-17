import { combineReducers } from 'redux-immutable';
import { reducer as contentReducer } from '../common/content/store/index';
import { reducer as headerReducer} from '../common/header/store/index';

const reducer = combineReducers({
  content:contentReducer,
  header:headerReducer
})

export default reducer;