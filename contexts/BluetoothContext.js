import React, {createContext, useState} from 'react';

export const BluetoothContext = createContext()

const BluetoothContextProvider = (props) => {
    const [connect, setConnect] = useState(false)

    const startLoad = () => {
        setConnect(true)
        console.log(connect)

    }
    return (  
        <BluetoothContext.Provider value = {{connect, startLoad}}>
            {props.children}
        </BluetoothContext.Provider>
    );
}
 
export default BluetoothContextProvider;