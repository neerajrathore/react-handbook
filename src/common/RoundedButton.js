import React from "react";
import { Button, ConfigProvider } from 'antd'
import PropTypes from 'prop-types'

const RoundedButton = ({
    label = 'Button', type = "primary", size = 'medium', shape = 'round', loading = false,
    leftIcon, rightIcon, disabled = false, block = false, onClick, className, containerStyle, ...props
}) => {

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: 'var(--primary---primary--main)',
                        colorPrimaryHover: 'var(--shades--tints---p--dark-200)',
                        colorPrimaryActive: 'var(--shades--tints---p--dark-400)',
                        colorPrimaryBorder: 'var(--primary---white)',
                        colorPrimaryText: 'var(--primary---white)',
                        colorBgContainerDisabled: 'var(--gray---gray-300)',
                        colorTextDisabled: 'var(--gray---gray-500)',
                        colorText: 'var(--primary---primary--main)',
                        colorLink: 'var(--primary---primary--main)',
                        colorBgTextHover: 'var(--shades--tints---p--light-800)',
                        colorBgTextActive: 'var(--shades--tints---p--dark-400)',
                        colorLinkActive: 'var(--primary---white)',
                        lineWidth: 2

                    },
                },
            }}
        >

            <Button
                style={{
                    fontWeight: 600,
                    fontFamily: 'var(--primary---primary--font-family)',
                    fontSize: textSize[size],
                    height: buttonSize[size],
                    paddingLeft: horizontalPadding[size],
                    paddingRight: horizontalPadding[size],
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow:'none',
                    ...containerStyle,
                }}
                className={`button_${size} ${className ? className : ''}`}
                disabled={disabled}
                type={type}
                shape={shape}
                block={block}
                loading={loading}
                onClick={onClick}
                {...props}
            >
                {loading == true ? <>&nbsp;</> :
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {leftIcon &&
                            <ion-icon name={leftIcon} style={{ marginRight: 8, fontSize: iconSize[size] }} />
                        }
                        {label}
                        {rightIcon &&
                            <ion-icon name={rightIcon} size={iconSize[size]} style={{ marginLeft: 8, fontSize: iconSize[size] }} />
                        }
                    </div>


                }

            </Button>
        </ConfigProvider>
    )
}

RoundedButton.propTypes = {
    /**
   * Label text
   */
    label: PropTypes.string,

    /**
   * Set button type
   */
    type: PropTypes.oneOf(["primary", "secondary", "outline", "text", "link"]),

    /**
   * Set the size of button
   */
    size: PropTypes.oneOf(["small", "medium", "large"]),

    /**
   * Disabled state of button
   */
    disabled: PropTypes.bool,

    /**
   * Can be set button shape
   */
    shape: PropTypes.oneOf(["default", "round"]),

    /**
   * Set the left icon of button
   */
    leftIcon: PropTypes.string,
    /**
  * Set the right icon of button
  */
    rightIcon: PropTypes.string,
    /**
  * Option to fit button width to its parent width
  */
    block: PropTypes.bool,

    /**
  * Set the loading status of button
  */
    loading: PropTypes.bool,
    /**
 * Additional className for Story
 */
    className: PropTypes.string,

    /**
* Optional click handler
*/
    onClick: PropTypes.func, 

        /**
   * Inline style to apply to the button
   */
        containerStyle: PropTypes.object,



}
const buttonSize = {
    small: 32,
    medium: 40,
    large: 48
}
const textSize = {
    small: 14,
    medium: 16,
    large: 16
}
const iconSize = {
    small: 16,
    medium: 24,
    large: 24
}
const horizontalPadding = {
    small: 12,
    medium: 16,
    large: 16
}



export default RoundedButton
