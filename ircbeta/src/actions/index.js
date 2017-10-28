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
};

export default actions;
