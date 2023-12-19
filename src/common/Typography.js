import React from 'react'
import Card from '../Common/Card'
import PropTypes from 'prop-types'


const Normaltext = [
    { kind: 'p', text: 'Body main', class: "body-main", styling: 'Font-size:14px / Font-weight:500 / Line-Height:24px / Letter-spacing:0' },
    { kind: 'p', text: 'Body Large', class: "body-large", styling: 'Font-size:16px / Font-weight:500 / Line-Height:24px / Letter-spacing:0' },
    { kind: 'p', text: 'Body Small', class: "body-small", styling: 'Font-size:12px / Font-weight:500 / Line-Height:20px / Letter-spacing:0' }

];

const headingText = [
    { kind: 'h1', text: 'Heading 1', class: "heading1", styling: 'Font-size:56px / Font-weight:500 / Line-Height:72px / Letter-spacing:0' },
    { kind: 'h2', text: 'Heading 2', class: "heading2", styling: 'Font-size:48px / Font-weight:500 / Line-Height:64px / Letter-spacing:0' },
    { kind: 'h3', text: 'Heading 3', class: "heading3", styling: 'Font-size:40px / Font-weight:600 / Line-Height:56px / Letter-spacing:0' },
    { kind: 'h4', text: 'Heading 4', class: "heading4", styling: 'Font-size:32px / Font-weight:600 / Line-Height:48px / Letter-spacing:0' },
    { kind: 'h5', text: 'Heading 5', class: "heading5", styling: 'Font-size:24px / Font-weight:600 / Line-Height:40px / Letter-spacing:0' },
    { kind: 'h6', text: 'Heading 6', class: "heading6", styling: 'Font-size:20px / Font-weight:600 / Line-Height:32px / Letter-spacing:0' },
];

const labelText = [
    { kind: 'label', text: 'Label Large',class: "label-large", styling: 'Font-size:18px / Font-weight:600 / Line-Height:24px / Letter-spacing:0' },
    { kind: 'label', text: 'Label main', class: "label-main",styling: 'Font-size:16px / Font-weight:600 / Line-Height:24px / Letter-spacing:0' },
    { kind: 'label', text: 'Label Small',class: "label-small", styling: 'Font-size:14px / Font-weight:600 / Line-Height:16px / Letter-spacing:0' },
    { kind: 'label', text: 'Label Tiny',class: "label-tiny", styling: 'Font-size:12px / Font-weight:600 / Line-Height:16px / Letter-spacing:0' },
];

const Typography = () => {
    return (
        <Card title='Typography'>
            <h6>Title Component</h6>
            <hr />
            {headingText.map((e) => (
                <div style={{ paddingLeft: '0.5rem' }}>
                    <e.kind className={e.class}>{e.text}</e.kind>
                    <div style={{ color: 'var(--gray---gray-800)', marginBottom: '1rem' }}>
                        {e.styling}
                    </div>
                </div>
            ))}

            <hr />

            <h6>BODY</h6>
            <hr />
            {Normaltext.map((e) => (
                <div style={{ paddingLeft: '0.5rem' }}>
                    <e.kind className={e.class}>{e.text}</e.kind>
                    <div style={{ color: 'var(--gray---gray-800)', marginBottom: '1rem' }}>
                        {e.styling}
                    </div>
                </div>
            ))}


            <hr />

            <h6>UTILITY</h6>
            <hr />
            {labelText.map((e) => (
                <div style={{ paddingLeft: '0.5rem' }}>
                    <e.kind className={e.class}>{e.text}</e.kind>
                    <div style={{ color: 'var(--gray---gray-800)', marginBottom: '1rem' }}>
                        {e.styling}
                    </div>
                </div>
            ))}

            
        </Card>
    );
};
Typography.propTypes = {
    /**
   * The classname to apply to the component h1, heading1, h2, heading2, h3, heading3, h4, heading4, h5, heading5, h6, heading6, body-large, body
   */
    className: PropTypes.string, 
    
}
export default Typography;
