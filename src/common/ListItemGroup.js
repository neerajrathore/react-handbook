import React from 'react'
import ListItem from './ListItem'
import CheckBoxGroup from './Selectors/CheckBoxGroup'
import RadioGroup from './Selectors/RadioGroup'

const ListItemGroup = ({ items, type, defaultCheckedValue, containerStyle, ListItemclassName, ...restProps }) => {
    return (
        <div>
            {
                type == "radio" ?
                    <RadioGroup defaultCheckedValue={defaultCheckedValue} containerStyle={containerStyle}>
                        {items.map((item, index) => <ListItem key={index} value={item.title} type={type} ListItemclassName={ListItemclassName} {...item}></ListItem>)}
                    </RadioGroup>
                    :
                    type == "checkbox" ?
                        <CheckBoxGroup defaultCheckedValue={defaultCheckedValue}>
                            {items.map((item, index) => <ListItem key={index} value={item.title} type={type} ListItemclassName={ListItemclassName} {...item}></ListItem>)}
                        </CheckBoxGroup>
                        :
                        items?.map((item) => <ListItem value={"other"} type={type}  ListItemclassName={ListItemclassName} {...item} {...restProps}></ListItem>)
            }
        </div>

    )
}

export default ListItemGroup
