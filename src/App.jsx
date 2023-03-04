import React, { Suspense } from 'react';
const Vitessce = React.lazy(() => import('./components/VitessceWrapper'));
import Logo from './components/Logo'
import Loading from "./components/Loading"
import Welcome from './components/Welcome';
import SelectDataset from './components/SelectDataSet'

import './App.css'

export default function App() {
    const [config, setConfig] = React.useState(false);

    return (
      <div>
        <Welcome>
        <div className='fullheight'>
            <div className="logoContainer">
                <Logo />
            </div>
            <div className='mainContainer'>
            {config ? 
            ( 
                <Suspense fallback={
                        <Loading/>
                    }>
                    <Vitessce
                        config={config}
                        height='auto'
                        theme="dark"
                    />
                    </Suspense>
            ) : (
                    <SelectDataset setConfig={(x) => setConfig(x)} />

            )}
            </div>
        </div>
        </Welcome>       
        </div>
    );
}

