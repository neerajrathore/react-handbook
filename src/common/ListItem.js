import React, { useState } from 'react'
import CheckBox from './Selectors/CheckBox'
import Radio from './Selectors/Radio'
import ToggleButton from './Selectors/ToggleButton'
import AvatarWithInitials from './Avatar/AvatarWithInitials'
import PropTypes from 'prop-types'

const ListItem = ({
    type = 'label',
    title = 'List Item',
    value,
    description = 'Description',
    rightIcon,
    imageUrl = "https://cdn-thewellnesscorner.s3.amazonaws.com/twc-web-images/pharmacy/defaultImage.jpg",
    avatarImageUrl,
    checked,
    containerStyle,
    disabled,
    ListItemclassName
}) => {

    const [itemChecked, setItemChecked] = useState(false)

    const listItemClickHandler = (e) => {
        typeof e == "object" ? setItemChecked(e?.target?.checked) : setItemChecked(e)
    }

    const Label = ({ title, description, onClick, lableStyle }) => {
        return (
            <div
                className="listItemMain"
                onClick={onClick}
                style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '4px',
                    flex: '1 0 0',
                    ...lableStyle
                }}>
                {title &&
                    <span style={{ color: 'var(--gray---gray-900)', fontSize: 16, fontWeight: '500', lineHeight: '24px', margin: 0, fontFamily: 'var( --primary---primary--font-family)' }}>
                        {title}
                    </span>
                }
                {description &&
                    <span style={{ color: 'var(--gray---gray-500)', fontSize: 14, fontWeight: '500', lineHeight: '20px', display: 'block', color: 'var(--gray---gray-500)' }}>
                        {description}
                    </span>
                }
            </div>
        )
    }

    const ImageComponent = ({ type, imageUrl, title, description }) => {

        return (
            <div className='listItemImage' >
                {type == 'image' ?
                    <img
                        style={{ width: 56, height: 56, borderRadius: 4, overflow: 'hidden' }}
                        src={imageUrl}
                    /> :
                    <AvatarWithInitials
                        image={imageUrl}
                        name={title ? title : ''}
                    />
                }
                <Label title={title} description={description} />
            </div>
        )
    }

    const ToggleComponent = ({ title, description }) => {
        return (
            <div className="listItemToggle" onClick={() => { setItemChecked(!itemChecked) }} >
                <ToggleButton checked={itemChecked} ></ToggleButton>
                <Label onClick={() => { setItemChecked(!itemChecked) }} title={title} description={description}></Label>
            </div>

        )
    }

    const selectors = {
        checkbox: <CheckBox value={value} label={<Label title={title} description={description} />} listItemClickHandler={listItemClickHandler} />,
        radio: <Radio disabled={disabled} checked = {checked} value={value} label={<Label title={title} description={description} />} listItemClickHandler={listItemClickHandler} />,
        toggle: <ToggleComponent title={title} description={description} />,
        avatar: <ImageComponent type={type} title={title} description={description} imageUrl={avatarImageUrl} />,
        image: <ImageComponent type={type} title={title} description={description} imageUrl={imageUrl} />,
        label: <Label title={title} description={description} lableStyle={{marginLeft:0}} />
    }

    return (
        <div className={`listItem ${ListItemclassName ? ListItemclassName : ''}`} style={{ ...containerStyle }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {type && <div style={{ marginRight: 15, display: "flex", flex: 1}}>{selectors[type]}</div>}
                {rightIcon && rightIcon}
            </div>
        </div>
    )
}

ListItem.propTypes = {
    /**
   * Set List Item type
   */
    type: PropTypes.oneOf(["radio", "checkbox", "toggle", "avatar", "image"]),
    /**
     * Set the title of List Item
     */
    title: PropTypes.string,
    /**
     * Set the description of ListItem
     */
    description: PropTypes.string,
    /**
     * Set the right icon of the List Item
     */
    rightIcon: PropTypes.node,
    /**
     * Set the image as per type of list item
     */
    imageUrl: PropTypes.string,
    /**
     * provide the value if using multiple radio list items under a group
     */
    value: PropTypes.string,
    /**
     * set the image inside avatar
     */
    avatarImageUrl: PropTypes.string,
    /**
    * Inline style to apply to the ListItem
    */
    containerStyle: PropTypes.object,
}

export default ListItem
