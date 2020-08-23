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

  import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg'; 
import Bluetooth from '../bluetooth';

const ButtonOrDash = () => {
    console.log(useContext(BluetoothContext))
    const {connect, startLoad} = useContext(BluetoothContext)
    
    if (connect === false){
        return (
            <View style = {styles.move}>
                {/* <Svg height="200" width="200" viewBox="0 0 100 100">
                    <G>
                    <Circle cx="50" cy="50" r="50" fill="none" stroke = "pink" strokeWidth = "5"/>
                    </G>
                </Svg> */}

                <Button title = "Pair" onPress = {startLoad}></Button> 
                <Bluetooth />
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