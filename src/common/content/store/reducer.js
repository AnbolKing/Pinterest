import { fromJS }  from 'immutable';

const defaultState = fromJS({
  picList:[
    {
      id:'',
      url:'',
      height:'',
      width:'',
      top:0,
      left:0,
    }
  ],
});

export default (state = defaultState,action) => {
  if(action.type === "get_pic") {
    return state.merge({
      picList:state.get('picList').concat(action.data)
    })
  }
  return state;
}