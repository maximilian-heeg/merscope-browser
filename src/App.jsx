import React from 'react';
import { Vitessce } from 'vitessce';
import Logo from './Logo'
import {myViewConfig} from './my-view-config';
import './index.css';

export default function App() {
    return (
      <div>
        <div style={{ height: 80 }}>
        <Logo />
        </div>
        <Vitessce
            config={myViewConfig}
            height={1200}
            theme="dark"
        />
        </div>
    );
}

