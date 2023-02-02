import React from 'react'

const List = ({ getItems }) => {

  // this could be a stateless component if items state not here
  // A stateless component can render props
  //  whereas a stateful component can render both props and state

  const [items, setItems] = React.useState([])
  React.useEffect(() => {
    setItems(getItems(3))
    console.log("updating");
  }, [getItems])

  return (
    items.map((items) => {
      return <div key={items}>
        {items}
      </div>
    }, null)
  )
}



console.log(typeof List, "typeof" );

export default List