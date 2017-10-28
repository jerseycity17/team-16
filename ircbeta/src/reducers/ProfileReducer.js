const ProfileReducerState = {
  location: 'default location',
}

export default (state = ProfileReducerState, action) => {
  switch (action.type) {
    case 'test1':
      location: action.payload
    default:
      return state;
  }
}
