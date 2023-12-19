import { Card as AntCard } from 'antd'
import PropTypes from 'prop-types'
const Card = ({
  size = "default",
  title,
  children,
  containerStyle, 
  extra,  
  headStyle,
  bodyStyle,
  className,
  hoverable=false,
  ...props

}) => (
  
  <AntCard
    size={size}
    bordered={false}
    title={title}
    className={['customCard' , className ]}
    extra={extra}
    style={{ borderRadius:12, ...containerStyle}}
    headStyle={headStyle}
    bodyStyle={bodyStyle}
    hoverable={hoverable}
    {...props}
  >
    {children &&
     <>{children}</>
    }

  </AntCard>
    
  
)

Card.propTypes = {
  /**
   * Size of card
   */
  size: PropTypes.oneOf(["default", "small"]),
  /**
   * hoverable Card
   */
  hoverable: PropTypes.bool,
  /**
   * Card title
   */
  title: PropTypes.string,
  /**
   * Content to render in the top-right corner of the card
   */
  extra: PropTypes.node
}
export default Card
