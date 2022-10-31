import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';

export function NestedRoutes () {
    return (
        <>
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/topics'>topics</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path='/' exact>
                            <Home></Home>
                        </Route>
                        <Route path='/topics'>
                            <Topics></Topics>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

function Home () {
    return (
        <h2>home</h2>
    )
}

function Topics () {
    let { path, url } = useRouteMatch();
    console.log(useRouteMatch());
    return(
        <div>
            <h2>Topics</h2>
            <ul>
                <li><Link to={`${url}/rendering`}>Rendering</Link></li>
                <li><Link to={`${url}/component`}>Component</Link></li>
                <li><Link to={`${url}/prop-vs-state`}>Prop vs State</Link></li>
            </ul>

            <>
                <Route path='/topics' exact>
                    <h3>please select topic</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic ></Topic>
                </Route>
            </>
        </div>
    )
}

function Topic () {
    let routeMatch = useRouteMatch();
    let data = useParams();
    console.log(data, "================================", routeMatch);
    return(
        <div>
            <h2>{data.topicId}</h2>
        </div>
    )

}