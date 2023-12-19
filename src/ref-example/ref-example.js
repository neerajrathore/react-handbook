import { Divider, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import UseEffectDemo from '../UseEffect/UseEffectDemo';

const RefExample = (props) => {

    // ref is used to make direct changes in DOM and has no effect with state changes
    // by assigning ref directly to input you will get access to input object and can make changes to it.

    const [value, setValue] = useState("")

    const ref = useRef()

    useEffect(() => {
        console.log(ref, "REF");
    }, [])

    const createRef = () => {
        React.createRef()
    }
    
    console.log(ref);

    // console.log(ref)

    // const [baseOptions, setBaseOptions] = useState(["name1", "name2"])

    // const getSelectOptions = () => {
    //     console.log("called");
    //     let options = baseOptions.map((item) => ({
    //         label: item
    //     }))
    //     options.push({
    //         label:
    //             <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
    //                 <Input
    //                     // autofocus
    //                     // ref={(input) => {console.log(input, ".............."); input && input.focus()}}
    //                     // style={{ flex: 'auto' }}
    //                     type='text'
    //                     // value={""}
    //                     onChange={() => console.log("change")}
                        
    //                 />
    //                 <a
    //                     style={{
    //                         flex: 'none',
    //                         padding: '8px',
    //                         display: 'block',
    //                         cursor: 'pointer',
    //                     }}
    //                 // onClick={this.addItem}
    //                 >
    //                     <PlusOutlined /> Add item
    //                 </a>
    //             </div>
    //     })
    //     return options
    // }

    // const dropDownRenderFunc = (...args) => {
    //     console.log(args, "args");
    //     return args[0]
    // }

    return (
        <>
            {/* <Select
                placeholder="custom dropdown render"
                // dropdownRender={dropDownRenderFunc}
                options={getSelectOptions()}
            ></Select> */}

            <input type="text" ref={ref} />

            <UseEffectDemo visible={true} />
        </>
    )
}

export default RefExample
