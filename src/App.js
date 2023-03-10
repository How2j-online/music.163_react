import React, {memo, Suspense} from 'react';
import {renderRoutes} from 'react-router-config';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
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
                        <Suspense fallback={<div>page loading</div>}>
                            {renderRoutes(routes)}
                        </Suspense>
                    <HwAppFooter/>
                    <HwPlayerBar/>
                </HashRouter>
            </Provider>
        )
    }
)