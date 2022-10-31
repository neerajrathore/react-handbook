import React from 'react';
import {FormInput} from './FormInside/FormInside'

let createReactClass = require("create-react-class");

let newProp = {
    backgroundColor: "#1560bd",
    textColor: '#ffffff',
    border: '1px solid #cccccc',
    padding: '0.2em',
 }

 let reference
 console.log(reference);
const FormWrapperComponent = createReactClass({
    
    
    displayName: "Form wrapper container",
    shouldComponentUpdate(){},
    componentDidMount(){
        console.log(reference.someMethod()); // working

    },
    render(){
        let me = this;
        
        return(
            // <>
            //     <p>hello</p>
            //     <div>
            //         {console.log("dwdw")
                        
            //         }
            //         {
            //         React.Children.map(this.props.children, (child, idx) => {
            //             console.log("ooxmaxa", child, idx)
            //             // let newProps = {...child.props, ...this.props.formConfig, containerStyle: child.props.containerStyle, refS: (c) => {me.children[idx] = c}}
            //             let newProps = {}
            //             return React.cloneElement(newProps)
            //         })}
            //   </div>
            // </>
            <>
            <div>
            {/* {React.cloneElement("<h2>some h2</h2>", newProp)} */}
            </div>
            <FormInput ref={(fi)=>{reference = fi}} ></FormInput>
            </>
        )
    }
})

const myfunction = (data) => {}

function data (){}

console.log("class", createReactClass, myfunction, data);

export default FormWrapperComponent
