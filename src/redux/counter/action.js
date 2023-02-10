import { DECREMENT, INCREMENT } from './counterTypes'

// action is always dispatched like dispatch(action)
export const IncrementAction = (dispatchFuction, call) => (dispatch) => {
    debugger
    console.log({dispatch, dispatchFuction}, "action data");
    // api call schedule
    twoapis(dispatchFuction, call)
    dispatch({
        type: INCREMENT,
        payload: dispatch
    })
    
}

export const DecreamentAction = (dispatch) => {
    console.log(dispatch, "action daya");
    return (
        {
            type: DECREMENT,
            payload: dispatch
        }
    )
}

export const twoapis = (dispatchFuction, callback) => {
    console.log(dispatchFuction, "wert");
    setTimeout(() => {
        dispatchFuction()
    }, 3000)
    callback("GOT DATA")
}