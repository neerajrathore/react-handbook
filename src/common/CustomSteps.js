import React, { useEffect } from 'react'
import { Descriptions, Steps } from 'antd'
import PropTypes from 'prop-types'

const CustomSteps = ({

    items = [],
    current = 0,
    direction,
    size = "default",
    ...props

}) => {

    return (
        <Steps
            current={current}
            direction={direction}
            size={size}
            style={{ fontFamily: 'var(--primary---primary--font-family)' }}
            items={items?.map((item, i) => {
                return {
                    title:(item.title),
                    icon: (i >= current ? item.icon : <ion-icon name="checkmark-outline" style={{ fontSize: IconSize[size] }} />),
                    description:(item.description),
                    disabled:(item.disable)
                }
            })}
            {...props}
        />
    )
}

const IconSize = {
    default: 16,
    small: 12
}

CustomSteps.propTypes = {
    /**
    *  To set the current step, counting from 0. You can overwrite this state by using status of Step
    */
    current: PropTypes.number,
    /**
     * If disable Steps
     */
    disabled: PropTypes.bool,
    /**
     * set the size of the Steps
     */
    size: PropTypes.oneOf(["small", "default"]),
    /**
    * StepItem content
    */
    items: PropTypes.array,
    /**
   * To specify the direction of the step bar, horizontal or vertical
   */
    direction: PropTypes.string,
}

export default CustomSteps
