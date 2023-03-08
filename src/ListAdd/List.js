import React, { useState } from 'react'

const List = () => {
  let i = 0;
    const [list, setList] = useState([]);
    function addButton() {
        // console.log("clicked");
        // setList("wcw");
        // console.log(list);
        setList(
          list => list.concat(
            <button key={i} onClick={addButton}>{i++}</button>
          )
        );
      }
    return (
        <div>
            <button key={i} onClick={addButton}>Add</button>
            {list.map(e => {
                console.log(e)
            })}
        </div>
    )
}

export default List
