const initState = {
  name: ''
};

export default function infoReducer(state = initState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
}