const actions = {
    updateGeolocation: (dispatch, position) => {
        dispatch({
            type: 'UPDATE_LOCATION',
            position,
        });
    }
};

export default actions;
