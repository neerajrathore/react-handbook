

import HomePage from './app/demo';
import FormWrapperComponent from './render/FormWrapper';
import Demo2 from './app/demo2';
import Refs from './refs/Refs';
import styled, { css } from 'styled-components';
import { If, Switch, Case, Default } from 'react-if'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import QueryParameter from './query-parameter/queryParameter';
import { NestedRoutes } from './nesting-routes/nestingRoutes';
import { Login } from './prog-navigation/programmaticNavigation'


// if you import FormWrapperComponent then it must be export default FormWrapperComponent
// otherwise needed {FormWrapperComponent} when export conts somrthing

//  document.getElementById("root")._reactRootContainer._internalRoot.current

const Buttons = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`
function App() {
  let age = 20;
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <FormWrapperComponent></FormWrapperComponent>
      <Demo2></Demo2>
      <If condition={true}>
        <Buttons primary>this is button</Buttons>
      </If>
      <Switch>
        <Case condition={age < 18}>
          <div>Too Young</div>
        </Case>
        <Default>
          <div>Too old</div>
        </Default>
      </Switch>
      <Refs></Refs>
    </div>
  );
}

// for query-parameter
export function QueryParameters() {
  return (
    <Router>
      <QueryParameter></QueryParameter>
    </Router>
  )
}

// for nesting routes
export function NestedRoutess() {
  return (
    <NestedRoutes />
  )
}

// for programmtatic navigation
export function ProgrammticNavigation() {
  return (
    <Router>
      <Route re path="/" exact component={Login}>

      </Route>
      <Route path='/profile'>
        <h2>profile</h2>
      </Route>

    </Router>
  )
}


export default App;
