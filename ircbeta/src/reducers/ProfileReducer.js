const ProfileReducerState = {
  location: 'default location',
}

export default (state = ProfileReducerState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
        return {
            ...state,
            location: action.payload,
        };
    default:
      return state;
  }
}
