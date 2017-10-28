import {database} from '../firebase/firebase';

const ProfileReducerState = {
  location: 'default location',
}
database.ref('/').once("value").then((snapshot) => {
   ProfileReducerState.firebase = snapshot.val();
});

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
    default:
      return state;
  }
}
