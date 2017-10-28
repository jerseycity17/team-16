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
    case 'UPDATE_COUNTRY':
        console.log(action);
        return {
            ...state,
            location: {
                ...state.location,
                country: action.payload,
            },
        };
    default:
      return state;
  }
}
