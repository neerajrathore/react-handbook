import React, { useReducer, useState } from 'react'

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    ADD_TODO: "Add_Todo",
    TOGGLE_TODO: "toggle_todo",
    DELETE_TODO: "delete_todo"
}

function reducer(state, action) {
    console.log({state, action}, "reducer dispatch");
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        // new todo example
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return state.map((todo) => {
                console.log(todo, "state reducer data");
                if(todo.id === action.payload.id){
                    return {...todo, complete: !todo.complete}
                }
            })

            case ACTIONS.DELETE_TODO: 
            return state.filter(todo => todo.id === action.payload.id)
        default:
            return state
    }
}

function newTodo(names) {
    return {
        id: Date.now(),
        name: names,
        complete: false
    }
}

const ReducerMe = () => {

    // previously it was this 
    // const [count, setCount] = React.useState(0)
    // const increment = () => {
    //     console.log("incremtnm");
    //     setCount(prevState => prevState+1)
    // }
    // const decrement = () => {setCount(prevState => prevState-1)}


    // ************************
    //usereducer also use to manage state and rerender component when state changes
    // changes current state to new state based on the actions that we perform

    // const [state, dispatch] = useReducer(reducer, { count: 5 })

    // we dont directally send value we send object to handle more complex state

    // function incrementFunction() {
    //     dispatch({ type: ACTIONS.INCREMENT })
    // }

    // function decrementFunction() {
    //     dispatch({ type: ACTIONS.DECREMENT })
    // }

    // ********************
    // new example that explain usereducer

    const [todo, dispatch] = useReducer(reducer, [])

    const [name, setName] = useState('')

    function submitHandler(e) {
        e.preventDefault(); // to prevent page reloading
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        // setName('')
    }

    console.log(todo, name);

    return (
        <>
        {/* // <div>
        //     <button type="" onClick={incrementFunction}>-</button>
        //     <span>{state.count}</span>
        //     <button type="" onClick={decrementFunction}>+</button>
        // </div>
        // or use (e) => submitHandler(e) */}
            <form onSubmit={submitHandler}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todo.map(todo => {
                console.log(todo, "qwerty");
                return <Todo id = {todo.id} todo = {todo} dispatch = {dispatch}/>
            })}
        </>
    )
}

const Todo = ({todo, dispatch}) => {
    console.log(todo, dispatch);
    return (
        <div>
            <span style={{color: todo.complete ? "cyan": "#000"}}>{todo.name}</span>
            <button onClick={() => {dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}}>Toggle</button>
            <button onClick={() => {dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}}>Delete</button>
        </div>
    )
}

export default ReducerMe