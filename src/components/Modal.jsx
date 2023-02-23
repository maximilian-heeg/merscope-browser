import React from 'react';
import './Modal.css'; 


export default function Modal() {
    const [visible, setVisible] = React.useState(true);

    return (
        <div>
        {visible && <div class='modal'>           
            <div class="main">
            <div> I hereby confirm that browsing this data does not prevent me from writing a grant.</div>
           
            <button onClick={() => setVisible(!visible)}>Confirm</button>
            </div>
            
          </div>
        }
        </div>
    )
}