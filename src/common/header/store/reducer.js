import { fromJS } from 'immutable';

const defaultState = fromJS({
  focus: false,
});

export default (state = defaultState, action) => {
  if(action.type === 'search_focus') {
    return state.set('focus',true);
  }
  if(action.type === 'search_blur') {
    return state.set('focus',false);
  }
  return state;
}