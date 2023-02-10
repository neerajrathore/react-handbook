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
                {/* / https://www.memberstack.com/blog/react-fragment#:~:text=React%20Fragment%20vs%20div,the%20DOM%20as%20a%20node.
                    // In React, JSX expressions must have only one parent element.
                    /   / This syntax is so because JSX is transpiled to JavaScript before execution and only one element  */}
                {/* {products.length > 0 ?
                            (
                            <div> // <Fragment></Fragment>
                                <h2>{products.length} products</h2>
                                <p>You have {products.length} products in your store</p>
                            </div>
                            )
                        :  null  */}
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