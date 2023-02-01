import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';

// import krte hi file execute ho jati ha logs show hoge
import { QueryParameters, NestedRoutess, ProgrammticNavigation } from './App'
import { RefExample } from './ref-test/refExample'
import { CurrencyConverter, Counter } from './state-pro/currencyConverter'; // auto execute file
import ConverterPRO from './state-pro/converter'
import CurrencyConverterNew from './state-pro/converter/index';
import { ToggleChild } from './ref-test/refExample'

import { BackButton } from './BackButton';
import { BrowserRouter as Router } from 'react-router-dom';
import { Calculater } from './state-pro/temp-converter';
import MemoTest from './memo-callback/memoTest';
import ReducerMe from './memo-callback/reducerTest'


// generic way
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router>
      <BackButton />
    </Router> */}
    {/* <CurrencyConverterNew /> */}
    {/* <Calculater/> */}
    {/* <MemoTest/> */}
    <ReducerMe/>
  </React.StrictMode >
);


// another way to render 
// const root = document.getElementById('root')
// let demo = React.createElement(
//   "h1", { style: { color: "green" } }, "Welcome hello"
// )

// // other way first define root element then can use ReactDOM.render other palces

// if (root !== null) {

//   //The createRoot() method takes the root element as a parameter and creates a React root.

//   const rootElement = ReactDOM.createRoot(
//     root
//   );

//   rootElement.render(
//     <React.StrictMode>
//     <h2>it worked</h2>
//     </React.StrictMode>
//   );
// }

