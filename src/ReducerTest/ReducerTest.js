import React, { useReducer } from 'react'

const Reducing = () => {
    //This is the default value of our component’s state when it gets mounted for the first time inside the application

    console.log("inside reducing");
    // step 1
    const initialState =
        { count: 0 }


    //const { useReducer } = React

    // step 2
    // The reducer is a function that takes the current state and an action object with type and needed data to perform that stae update,
    //  which can be a value of any type you want
    function reducer(state, action) {   // current state
        console.log(state, "qwerty");
        switch (action.type) {
            case 'INCREMENT':
                return { count: state.count + 1 }
            case 'DECREMENT':
                return { count: state.count - 1 }
            case 'REPLACE':
                return { count: action.newCount }
            case 'RESET':
                return { count: 0 }
            /*{
                return [
                    ...state, action.newCount 
                ]
                this will work only if initialstate is array 
            }*/
            case "SOME":
                return {
                    ...state, some: action.newCount
                }
            default: return state
        }
    } // Now inside our component, we can initialize the state like below
    // The useReducer method gives you a state variable and a dispatch method to make state changes
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state, "statedata"); // {count: 0}
    // An action may typically look like this:

    const replaceAction = { type: 'REPLACE', newCount: 10 }

    // Dispatch is just like a function which we can pass around to other components through props.

    //useReducer returns two values in an array. 
    //The first one is the state object, and the second one is a function called dispatch. 
    //This is what is used to dispatch an action.

    // if we want to dispatch replaceAction defined in the above example, we’d do something like this:

    //step 3
    React.useEffect(() => {
        // inside useeffect to prevent infinite loops
        // dispatch(replaceAction) 
        dispatch({ type: 'SOME', newCount: 100, })
    }, [])


    return (
        <>

            <button onClick={() => dispatch({ type: 'INCREMENT' })}>++</button>
            <div>{state.count}</div>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>--</button>

        </>
    )
}

export default Reducing

// exercise for you  create add, update, delete user reducer function 
const userData = [
    {
        id:1,
        name: 'kunal',
        age: 22,
        admin: true
    },
    {
        id:2,
        name: 'rounak',
        age: 23,
        admin: false
    }
]
