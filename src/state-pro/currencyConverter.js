import React from 'react';
import ReactDOM from 'react-dom';

// *************************  Counter example by using JSX.
// function Button(props) {
//     return <button onClick={props.handleClick}>{props.name}</button>
// }

// export class Counter extends React.Component {

//     state = {
//         num: 0
//     }

//     handleIncrement = () => {
//         this.setState({
//             num: this.state.num + 1
//         })
//     }

//     handleDecrement = () => {
//         this.setState({
//             num: this.state.num - 1
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.state.num}</p>
//                 <Button name="Increment" handleClick={this.handleIncrement} />
//                 <Button name="Decrement" handleClick={this.handleDecrement} />
//             </div>

//         )
//     }
// }

// ReactDOM.render(<Counter />, document.querySelector('#secondRoot'))


// *******************************************??    this is a pure JavaScript without using jsx.
// const el = React.createElement;
// console.log("in currency converter file");
// function Button(props) {
//     console.log("fsfsf");
//     return el('button', { onClick: props.handleClick }, props.name);
// }

// export class Counter extends React.Component {


//     state = {
//         num: 0
//     }

//     handleIncrement = () => {
//         this.setState({
//             num: this.state.num + 1
//         })
//     }

//     handleDecrement = () => {
//         this.setState({
//             num: this.state.num - 1
//         })
//     }

//     render() {
//         return el('div', null,
//             el(Button, { handleClick: this.handleIncrement, name: 'Increment' }, null),
//             el(Button, { handleClick: this.handleDecrement, name: 'Decrement' }, null),
//             el('p', null, this.state.num)
//         )
//     }
// }

// let data = React.createElement("h2", null, "h2 is working");
// console.log(data);

// // ReactDOM.render(el(Counter, null, null), document.querySelector('#secondRoot'));
// ReactDOM.render(React.createElement("h2", null, "h2 is working"), document.querySelector('#secondRoot'), ()=> {console.log("calle")});


// another good example
class Welcome extends React.Component {
    render() {
      return React.createElement(
        "h1",
        { style: { color: "blue" } },
        `${this.props.name}`
      );
    }
  }
  
  ReactDOM.render(
    React.createElement(Welcome, { name: "Home page" }, null),
    document.querySelector("#secondRoot")
  );