import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {match, RouterContext} from 'react-router';
import routes from '../../../app/routes';
import reducers from "../../../app/reducers";
import {Router, browserHistory, createMemoryHistory} from "react-router";
import promise from "redux-promise";


exports.reactRouterHandle = function (req, res, next) {
    match(
        {routes, location: req.url},
        (err, redirectLocation, renderProps) => {
            //new redux store instance
            const createStoreWithMiddleware = applyMiddleware(
                promise
            )(createStore);

            const store = createStoreWithMiddleware(reducers);

            const history = createMemoryHistory(req.url);

            fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
                .then(renderAndSend(history, res, store));


        }
    )
};


function renderAndSend(history, resObj, store) {
    const initRender = renderToString(
        <Provider store={store}>
            <Router history={history} routes={routes}/>
        </Provider>
    );

    const initState = JSON.stringify(store.getState());
    console.log(store.getState());
    console.log(initState);
    resObj.render("index", {layout: false, initRender, initState})
}


function fetchComponentData(dispatch, components, params) {

    const needs = components.reduce( (prev, current) => {
        return (current.needs || [])
            .concat((current.WrappedComponent ? current.WrappedComponent.needs : []) || [])
            .concat(prev);
    }, []);



    const promises = needs.map(need => dispatch(need(params)));
    return Promise.all(promises);
}