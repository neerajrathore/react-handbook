import React from 'react'

const List = ({ getItems }) => {

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

export default List