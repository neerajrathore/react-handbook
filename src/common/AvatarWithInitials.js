import React from 'react'
import { Avatar } from 'antd'
import PropTypes from 'prop-types'


const AvatarWithInitials = ({ name, url, size, containerStyle }) => {

    if (url) {
        return <Avatar
            src={url}
            rounded
            alignSelf={'center'}
            style={{ backgroundColor: 'var(--shades--tints---p--light-800)', ...containerStyle }}
            size={size}
        />
    }
    return (
        <Avatar
            size={size}
            style={{
                fontSize: textSize[size],
                fontFamily: 'var(--primary---primary--font-family)',
                backgroundColor: 'var(--shades--tints---p--light-800)',
                fontWeight: 500,
                color: 'var(--shades--tints---p--dark-500)'
            }}
        >
            {name?.match(/\b(\w)/g).join('').slice(0, 2).toUpperCase()}
        </Avatar>
    )
}

const textSize = {
    small: 10,
    medium: 12,
    large: 14
}

AvatarWithInitials.propTypes = {
    /**
     * show initials of name inside the avatar
     */
    name: PropTypes.string,
    /**
     * set the size of Avatar
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * set the image inside Avatar
     */
    url: PropTypes.string,
    /**
      * Inline style to apply to the avatar
      */
    containerStyle:PropTypes.object,
}

export default AvatarWithInitials
