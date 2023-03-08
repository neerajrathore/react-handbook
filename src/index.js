import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';

// import krte hi file execute ho jati ha logs show hoge
import { QueryParameters, NestedRoutess, ProgrammticNavigation } from './App'
import { RefExample } from './ref-test/refForwadRef'
import { CurrencyConverter, Counter } from './state-pro/currencyConverter'; // auto execute file
import ConverterPRO from './state-pro/converter'
import CurrencyConverterNew from './state-pro/converter/index';
import { ToggleChild } from './ref-test/refForwadRef.jsx'

import { BackButton } from './BackButton';
import { BrowserRouter as Router } from 'react-router-dom';
import { Calculater } from './state-pro/temp-converter';
import MemoTest from './memo-callback/memoTest';
import ReducerMe from './memo-callback/reducerTest'
import Refs from './refs/Refs'
import ReduxApp from './redux/reduxapp';
import { Provider } from 'react-redux';
import store from './redux/store';
import PhotosList from './react_virtualized/PhotosList'
import ModelPopUp from "./ModelPopUp/ModelPopUp"
import { Model } from './ModelPopUp/Model/Model.tsx';
import List from './ListAdd/List';
import HomePage from './app/demo';
import ReactjsPopup from './reactjs-popup/ReactjsPopup'

// generic way
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <Router>
      <BackButton />
    </Router> */}
      {/* <CurrencyConverterNew /> */}
      {/* <Calculater/> */}
      {/* <MemoTest/> */}
      {/* <Refs/> */}
      {/* <RefExample /> */}
      {/* <ReducerMe/> */}
      {/* <ToggleChild/> */}
      {/* <ReduxApp/> */}
      {/* <PhotosList/> */}
      {/* <PropCounter value={count}>Counter 1</PropCounter> */}
      <ModelPopUp closePopup={() => { console.log("closed") }} heading={"cwevw"} />
      {/* <Model/> */}
      {/* <List/> */}
      <HomePage></HomePage>
      <ReactjsPopup></ReactjsPopup>
    </React.StrictMode >
  </Provider>
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

