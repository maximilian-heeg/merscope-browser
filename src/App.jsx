import React, { Suspense } from 'react';
const Vitessce = React.lazy(() => import('./components/VitessceWrapper'));
import Logo from './components/Logo'
import Loading from "./components/Loading"


import {myViewConfig} from './my-view-config';


export default function App() {
    return (
      <div>
        <div style={{ height: 80 }}>
        <Logo />
        </div>
        <Suspense fallback={
            <Loading/>
        }>
        <Vitessce
            config={myViewConfig}
            height={'auto'}
            theme="dark"
        />
         </Suspense>
        
        </div>
    );
}

