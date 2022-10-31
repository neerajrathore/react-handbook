import React from 'react';
import { Link, useLocation } from "react-router-dom";

// building a custom hook

console.log("heereeeeeeeeeeeeeee");

function useQuery() {
    const { search } = useLocation();
    console.log();
    return React.useMemo(() => getUrlSearchParams(search), [search])
}

function getUrlSearchParams(search) {
    // Failed to construct 'URLSearchParams': Please use the 'new' operator
    console.log("log", new URLSearchParams(search));
    return new URLSearchParams(search)
}


function Child({ name }) {
    return (
        <div>
            {name ?
                <h3>
                    The <code>name</code> in the query string is &quot;{name}
                    &quot;
                </h3>
                :
                <h2>nothing in query string</h2>
            }
        </div>
    )
}

const QueryParameter = () => {
    const data = useQuery();
    console.log(data, data.entries()); // now i receive a iterator object instance whith only prototype
    // i can iterate using this iterator instance over this using a for loop 
    for (const datas of data.entries()) {  // in iterate gives 'next'
        console.log(datas, data.entries(), data.toString());
    }
    return (
        <div>
            <div>
                <h2>same hadders</h2>
                <ul>
                    <li><Link to='/account?name=netflix'>netflix</Link></li>
                    <li><Link to='/account?name=yahoo'>yahoo</Link></li>
                    <li><Link to='/account?name=google'>google</Link></li>
                    <li><Link to='/account?name=orkut'>orkut</Link></li>
                </ul>
                <Child name={data.get('name')}></Child>
            </div>
        </div>
    )
}

export default QueryParameter;