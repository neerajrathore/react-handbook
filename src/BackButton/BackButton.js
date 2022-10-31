import React from 'react'
import { BrowserRouter as Router, Link, Route, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom' // available in v6


//<Router> component that sets the context you could use useHistory in a sub-component, but not in that one.
// removing Router from here and placing it in index.js


const BackButton = () => {
    const history = useHistory();
    console.log(history, "history");
    return (
        
            <div>
                <button onClick={() => history.goBack()}>Go back 1 Page</button>
                <button onClick={() => history.goForward()}>Go forward 1 Page</button>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/contacts" component={Contacts}></Route>

            </div>
       
    )
}

function Home() {
    return (
        <h2>HOMe</h2>
    )
}

function Contacts() {
    return (
        <h2>Contacts</h2>
    )
}

export default BackButton