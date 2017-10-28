const actions = {
    updateGeolocation: (dispatch, position) => {
        dispatch({
            type: 'UPDATE_LOCATION',
            payload: position,
        });
    },
    updateCountryId: (dispatch, countryId) => {
        dispatch({
            type: 'UPDATE_COUNTRY',
            payload: countryId,
        })
    },
    getFirebaseDB: (dispatch, db) => {
        dispatch({
            type: "FIREBASE_DB",
            payload: db,
        });
    },
};

export default actions;
