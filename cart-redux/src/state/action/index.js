export const addItem = (quantity) => {
    return (dispatch)=>{
        dispatch({
            type: 'addItem',
            payload: quantity
        })
    }
}

export const removeItem = (quantity) => {
    return (dispatch) => {
        dispatch({
            type: 'removeItem',
            payload: quantity
        })
    }
}