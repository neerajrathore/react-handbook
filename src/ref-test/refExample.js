import React, { useEffect, useRef, useState } from "react"

console.log("qwertyu");
// how to get element by ID using the document.getElementById() method and via a ref
export function RefExample() {
    const ref = useRef();
    // The useEffect hook runs after the DOM elements in the component have been rendered to the DOM, 
    // so if an element with the provided id exists, it will be selected.
    useEffect(() => {
        const element = document.getElementById('my-element');
        console.log("element", element);

        console.log(ref.current);
    }, [])
    // return executed instantly 
    return (
        <div>
            <h2 id="my-element" ref={ref}>
                some content here
            </h2>

        </div>
    )
}

// below is running a hook when component unmounted

function HookUnmount() {
    const ref = useRef(null);
    useEffect(() => {
        console.log("inHookUnmount");
        const handleClick = event => {
            console.log('Button clicked');
        };

        const element = ref.current;

        element.addEventListener('click', handleClick);

        return () => {
            console.log('Child unmounted');
            element.removeEventListener('click', handleClick);
        };
    }, []);
    return (
        <>
            <div style={{ display: "flex" }}>
                <button style={{ marginRight: "10px" }} ref={ref} >click</button>
            </div>
            <hr />
        </>
    )
}

export function ToggleChild() {

    const [isMounted, setIsMounted] = useState(true);

    return (
        <div>
            <button onClick={() => { setIsMounted(current => !current) }}>toggle</button>
            <hr />
            {isMounted && <HookUnmount />}
            <OneChildrenOnly>
                <React.Fragment>
                <button>hello</button>
                <button>hello</button>
                </React.Fragment>
            </OneChildrenOnly>
        </div>
    )
}

// REact Fragments are used when we need to group a list of children without adding extra nodes to the DOM.
function OneChildrenOnly(props) {
    // 👇️ expects single child element
    console.log(props, React.Children.only(props.children));
    // return React.Children.only(props.children);
    return null
}