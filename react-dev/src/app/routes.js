import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/views/Home';
import ResultView from './components/views/KeywordResult';
import AnalysisView from './components/views/Analysis';
import Impressum from './components/views/Impressum';
import NotFound from './components/views/NotFound';
import About from './components/views/About';
import Contact from './components/views/Contact';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/results" component={ResultView} />
        <Route path="/analysis" component={AnalysisView} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
    </Route>
);
