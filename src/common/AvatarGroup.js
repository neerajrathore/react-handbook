import React from 'react'
import { Avatar } from 'antd';
import PropTypes from 'prop-types'

const AvatarGroup = ({
    images = [],
    size = 'medium',
    maxCount,
    maxPopoverPlacement,
    maxPopoverTrigger,
    containerStyle,
}) => {

    return (
        <Avatar.Group size={size}
            maxCount={maxCount}
            maxPopoverPlacement={maxPopoverPlacement}
            maxPopoverTrigger={maxPopoverTrigger}
            maxStyle={{ backgroundColor: 'var(--shades--tints---p--light-800)', color: 'var(--shades--tints---p--dark-500)', fontFamily: 'var(--primary---primary--font-family)', fontWeight: 500 }}>
            {images?.map((data) =>
                data.image ?
                    <Avatar
                        style={{
                            ...containerStyle,
                            backgroundColor: 'var(--shades--tints---p--light-800)',
                            fontSize: textSize[size],
                        }}
                        src={data.image}

                    />
                    :
                    <Avatar
                        style={{
                            ...containerStyle,
                            fontSize: textSize[size],
                            fontFamily: 'var(--primary---primary--font-family)',
                            backgroundColor: 'var(--shades--tints---p--light-800)',
                            fontWeight: 500,
                            color: 'var(--shades--tints---p--dark-500)'
                        }}

                    >
                        {data.name &&
                            (data.name.length >= 2 ?
                                `${data.name.match(/\b(\w)/g)}`.toUpperCase().split(',')
                                :
                                data.name[0][0].toUpperCase())
                        }
                    </Avatar>
            )}
        </Avatar.Group>

    )
}

const textSize = {
    small: 10,
    medium: 12,
    large: 14
}

AvatarGroup.propTypes = {
    /**
     * max avatars to show
     */
    maxCount: PropTypes.number,
    /**
     * set the size of avatar group
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * array of the images to be shown inside avatars
     */
    images: PropTypes.array,
    /**
     * The placement of excess avatar popover
     */
    maxPopoverPlacement: PropTypes.oneOf(['top', 'bottom']),
    /**
     * set te trigger of excess avatar popover
     */
    maxPopoverTrigger: PropTypes.oneOf(['hover', 'click']),
    /**
     * Inline style to apply to the avatar group
     */
    containerStyle: PropTypes.object,
}

export default AvatarGroup
