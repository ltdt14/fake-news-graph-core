import React from "react";
import {Route, IndexRoute} from "react-router";

import App from "./components/app";
import Index from "./components/index";
import Impressum from './components/impressum';
import NotFound from './components/not_found';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="/impressum" component={Impressum}/>
        <Route path="*" component={NotFound}/>
    </Route>
)