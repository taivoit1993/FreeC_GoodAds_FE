import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {setupAxios} from './adapters/setupAxios';
import './assets/styles/core.scss';
import App from './pages/core/App';
import axios from "axios";


import {
    RecoilRoot,
} from 'recoil';
import {QueryClient, QueryClientProvider} from "react-query";
import RecoilNexus from 'recoil-nexus';
import LoginComponent from "./pages/auth/login";
import {GoogleOAuthProvider} from "@react-oauth/google";
import LoginCallback from "./pages/auth/login.callback";
import Campaigns from "./pages/campaign";
import AdGroup from "./pages/adGroup";
import Ad from "./pages/ad";


const Dashboard = lazy(() => import('./pages/dashboard/dashboard'))


setupAxios(axios)
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        }
    }
})

root.render(
    <RecoilRoot>
        <RecoilNexus/>
        <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId="968912013359-k3dlkhtuml6thouv2clttujfnt15ie45.apps.googleusercontent.com">
                <React.StrictMode>
                    <BrowserRouter>
                        <Suspense>
                            <Routes>
                                <Route path='/' element={
                                    <App/>
                                }>
                                    <Route path="/dashboard" element={<Dashboard/>}/>
                                    <Route path="/campaigns" element={<Campaigns/>}/>
                                    <Route path="/ad-groups" element={<AdGroup/>}/>
                                    <Route path="/ads" element={<Ad/>}/>
                                </Route>
                                <Route path="/login" element={<LoginComponent/>}/>
                                    <Route path="/login-callback" element={<LoginCallback/>}>
                                </Route>
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </React.StrictMode>
            </GoogleOAuthProvider>

        </QueryClientProvider>
    </RecoilRoot>
);
