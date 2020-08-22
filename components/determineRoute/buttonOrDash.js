import React, { useContext } from 'react';
import { BluetoothContext } from '../../contexts/BluetoothContext';
import Dash from '../dashComponents/Dash';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';

const ButtonOrDash = () => {
    console.log(useContext(BluetoothContext))
    const {connect, startLoad} = useContext(BluetoothContext)
    
    if (connect === false){
        return (
            <Button title = "Pair" onPress = {startLoad}></Button> 
        )
    }
    else {
        return <Dash />
    }

}
 
export default ButtonOrDash;