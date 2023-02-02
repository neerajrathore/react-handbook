import React, { useEffect, useRef, useState } from "react"

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
    console.log(props, React.Children.only(props.children), "asasasa");
    return React.Children.only(props.children);
    // return null
}