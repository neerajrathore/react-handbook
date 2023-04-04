// only 
// "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-scripts": "^5.0.1", 
//     is required in scratch 

//     and public index.<html>
        
//     </html>

//     src me 
//     and index .js 

    import React from "react"
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client';
// import { Table } from "./someCopiedFile";
import ReactVirtual from './reactVirtual'
import "react-virtualized/styles.css";
import { Column, Table, SortDirection, AutoSizer } from "react-virtualized";
// import * as some from 'faker'


// const w = window,
//   d = document,
//   documentElement = d.documentElement,
//   body = d.getElementsByTagName('body')[0],
//   width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
//   height = w.innerHeight || documentElement.clientHeight || body.clientHeight


const people = new Array(50000).fill(true).map((val, id) => ({
    id: id,
    firstName: Math.random().toString(20).substring(8),
    lastName: Math.random().toString(20).substring(8),
    age: Math.ceil(Math.random() * 80)
}))


// const MyApp = () => {
//     return(
//         <>
//         <h2>wdwd</h2></>
//     )
// }


// console.log(some);
const list = [
    { name: 'Brian Vaughn', description: 'Software engineer' }
    // And so on...
  ];
class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h2>asdcfgbhn</h2>
            </div>
        )
    }
}

const rowRenderer = (props) => {
    console.log(props);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// const app = document.getElementById('root');
// ReactDOM.render(<MyApp />, root);
// ReactDOM.createRoot(<MyApp/>, root)

// another
// root.render(<div>
//     <h1>Records: {people.length}</h1>
//     <Table rows={people} />
// </div>)

// react virtualization
// root.render(<div>
//     <Table
//     width={600}
//     height={600}
//     headerHeight={50}
//     rowHeight={50}
//     rowCount={people.length}
//     rowGetter={({ index }) => people[index]}
//     // rowRenderer = {rowRenderer}
//     // overscanRowCount={3}
//   >
//     <Column
//       label='fname'
//       dataKey='firstName'
//       width={100}
//     />
//     <Column
//       width={200}
//       label='lname'
//       dataKey='lastName'
//     />
//     <Column
//       width={200}
//       label='age'
//       dataKey='age'
//     />
//     <Column
//       width={200}
//       label='id'
//       dataKey='id'
//     />
        
//   </Table>,
// </div>)

root.render(<ReactVirtual/>)