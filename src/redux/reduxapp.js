import React from 'react'
import { useDispatch } from 'react-redux'
import { IncrementAction } from './counter/action'

const ReduxApp = () => {
  const [count, setCount] = React.useState()
  const dispatch = useDispatch()
  const incrementCount = () => {
    dispatch(IncrementAction(() => { console.log("called") }, (data) => {
      console.log("RESPONSE", data);
    }))
  }

  //return b(); calls the function b(), and returns its result.
  // return b; returns a reference to the function b, which you can store in a variable to call later.

  // *************
  const dataCheckAction = () => {
    console.log("hereAction");
    return () => {
      console.log("here");
    }
  }

  let callingFunction = () => {
    let returnValue = dataCheckAction()
    returnValue()
  }
  // **************
  return (
    <>
      <div>{count}</div>
      {/* <button type="" onClick={callingFunction}>INCREMENT</button> */}
      <button type="" onClick={incrementCount}>INCREMENT</button>
      <button type="">DECREMENT</button>
    </>
  )
}

export default ReduxApp