import React, { Suspense } from 'react';
const Vitessce = React.lazy(() => import('./components/VitessceWrapper'));
import Logo from './components/Logo'
import Loading from "./components/Loading"
import Modal from './components/Modal';
import {day7Config} from './config/day7';


export default function App() {
    return (
      <div>
        <Modal />
        <div style={{ height: 80 }}>
        <Logo />
        </div>
        <Suspense fallback={
            <Loading/>
        }>
        <Vitessce
            config={day7Config}
            height={'auto'}
            theme="dark"
        />
         </Suspense>
        
        </div>
    );
}

