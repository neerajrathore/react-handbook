import React, { useState } from 'react'
import { Tag, ConfigProvider } from 'antd'
import PropTypes from 'prop-types'

const Chips = ({
  items,
  size = 'medium',
  containerStyle,
}) => {
  const { CheckableTag } = Tag
  const [selectedTags, setSelectedTags] = useState([])
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    setSelectedTags(nextSelectedTags)
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Tag: {
            colorPrimary: 'var(--primary---primary--main)',
            colorText: 'var(--gray---gray-700)',
            colorPrimaryHover: 'var(--shades--tints---p--dark-200)',
            colorPrimaryActive: 'var(--shades--tints---p--dark-400)',
            fontFamily: 'var(--primary---primary--font-family)'
          },
        },
      }}
    >
      <>
        {items?.map((item,i) => (
          <CheckableTag
            key={i}
            style={{
              paddingInline: paddingHorizontal[size],
              paddingBlock: paddingVertical[size],
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              fontSize: textSize[size],
              ...containerStyle
            }}
            disabled={item.disabled}
            className={"chipstag_" + size}
            checked={selectedTags.includes(item)}
            onChange={(checked) => handleChange(item, checked)}
          >

            {item.leftIcon &&
              <ion-icon name={item.leftIcon} style={{ fontSize: 16 }} />
            }
            {item.label && <> {item.label}</>}
            {item.rightIcon &&
              <ion-icon name={item.rightIcon} style={{ fontSize: 16 }} />
            }

          </CheckableTag>
        ))}
      </>
    </ConfigProvider>

  )
}
Chips.propTypes = {
  /**
   * Array of items
   */
  items: PropTypes.array,
  /**
   * size of chips
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * Callback executed when Tag is checked/unchecked
   */
  onChange: PropTypes.func,
  /**
   * Callback executed when Tag is checked/unchecked
   */
  leftIcon: PropTypes.func,
}
const paddingVertical = {
  small: 2,
  medium: 4,
  large: 8
}
const paddingHorizontal = {
  small: 8,
  medium: 16,
  large: 16
}
const textSize = {
  small: 12,
  medium: 12,
  large: 14
}
export default Chips
