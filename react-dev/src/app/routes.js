import React from "react";
import {Route, IndexRoute} from "react-router";


import App from "./components/app";
import Home from "./components/Home";
import Impressum from "./components/Impressum";
import NotFound from "./components/NotFound";

export default(

        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/impressum" component={Impressum}/>
            <Route path="*" component={NotFound}/>
        </Route>
)