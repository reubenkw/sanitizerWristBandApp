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
            <View style = {styles.move}>
            <Button title = "Pair" onPress = {startLoad}></Button> 
            </View>
        )
    }
    else {
        return <Dash/>
    }

}

const styles = StyleSheet.create({
    move: {
        paddingTop: 200,
    }
})
 
export default ButtonOrDash;