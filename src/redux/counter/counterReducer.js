import { DECREMENT, INCREMENT } from './counterTypes'

const INITIAL_STATE = {
    count: 0
}

export const CounterReducer = (state = INITIAL_STATE, action) => {
    console.log("data", action, state);
    switch (action.type) {
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}