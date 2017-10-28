const actions = {
    updateGeolocation: (dispatch, position) => {
        dispatch({
            type: 'UPDATE_LOCATION',
            payload: position,
        });
    }
};

export default actions;
