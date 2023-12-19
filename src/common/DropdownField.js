import { useEffect, useState } from 'react';
import { Dropdown, Space, Button } from 'antd';
import PropTypes from 'prop-types'

const DropdownField = ({
    items,
    size = 'medium',
    onClickItem,
    children,
    ...props
}) => {

    const [dropdownItems, setDropdownItems] = useState([])

    useEffect(() => {
        if (items?.length > 0) {
            const data = items.map((item, index) => {
                return {
                    label: <li
                        key={index}
                        style={{ padding: "7px 0", display: 'flex', borderRadius: 8, cursor: 'pointer' }}>
                        {item.leftIcon &&
                            <ion-icon name={item.leftIcon} style={{ fontSize: 20, color: 'var(--gray---gray-900)', marginRight: 8 }} />
                        }
                        <div className='listText'>
                            {item.title &&
                                <h5>{item.title}</h5>
                            }
                            {item.description &&
                                <span>{item.description}</span>
                            }
                        </div>
                        {item.label || item.rightIcon ?
                            <span className='rightAction'>
                                {item.label}
                                {item.rightIcon &&
                                    <ion-icon name={item.rightIcon} style={{ fontSize: 20, color: 'var(--gray---gray-900)', marginLeft: 8, }} />
                                }
                            </span> : null
                        }

                    </li>,
                    onClick: () => onClickItem
                }

            })
            setDropdownItems(data)
        }
        else {
            const data =
                [{
                    label: <li style={{ padding: "7px 0", display: 'flex', borderRadius: 8 }}>
                        <div className='listText'>
                            <h5>No result found</h5>
                        </div>
                    </li>
                }]

            setDropdownItems(data)
        }


    }, [])

    return (
        <Dropdown
            menu={{
                items: items,
                onClick: onClickItem
            }}
            trigger={['click']}
            overlayClassName='customdropdown'
            overlayStyle={{ fontFamily: 'var(--primary---primary--font-family)' }}
            {...props}
        >
           {children}
        </Dropdown>
    )
}

const horizontalPadding = {
    small: 12,
    medium: 16
}
const verticalPadding = {
    small: 4,
    medium: 8
}

const iconSize = {
    small: 20,
    medium: 24
}

DropdownField.propTypes = {
    /**
     * set the size of the Dropdown field
     */
    size: PropTypes.oneOf(["small", "medium"]),
    /**
     * Renders suggestion array
     */
    items: PropTypes.array,
   
}
export default DropdownField;
