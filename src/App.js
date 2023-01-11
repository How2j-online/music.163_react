import React, {memo} from 'react';
import {renderRoutes} from 'react-router-config';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "@/store";

import routes from '@/router';

import HwAppHeader from 'components/app-header';
import HwAppFooter from 'components/app-footer';
import HwPlayerBar from '@/views/player/player-bar'

export default memo(function App() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <HwAppHeader/>
                    {renderRoutes(routes)}
                    <HwAppFooter/>
                    <HwPlayerBar/>
                </HashRouter>
            </Provider>
        )
    }
)