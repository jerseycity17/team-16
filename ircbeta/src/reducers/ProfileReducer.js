import {database} from '../firebase/firebase';

const ProfileReducerState = {
  location: 'default location',
}

export default (state = ProfileReducerState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
        console.log(action);
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
    case 'FIREBASE_DB':
        return {
            ...state,
            firebase: action.payload,
        };
    default:
      return state;
  }
}
