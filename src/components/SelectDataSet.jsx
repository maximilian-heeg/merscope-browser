import React from 'react';
import './SelectDataSet.css'

import {day7Config} from '../config/day7';
import {day35Config} from '../config/day35'

import imgDay7 from './images/day7.png'
import imgDay35 from './images/day35.png'

export default function SelectDataset({setConfig}) {
    const [visible, setVisible] = React.useState(true);

    return (
        <div className="selectContainer">
            <button onClick={() => setConfig(day7Config)}>
                <img src={imgDay7} alt="Day 7" />
                Day 7 post infection with LCMV Armstrong
            </button>
            <button onClick={() => setConfig(day35Config)}>
            <img src={imgDay35} alt="Day 35" />
            Day 35 post infection with LCMV Armstrong
            </button>
        </div>
    )
}