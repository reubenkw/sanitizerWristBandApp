import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';
import Countdown from './Countdown';

const Dash = () => {
    console.log("In dash")
    return ( 
        <View style = {styles.container}>
            <Text style = {styles.heading}> Stay Safe</Text>
            <Countdown />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#051128"
    },

    heading: {
        fontFamily: "Poppins-Bold",
        color: "white",
        paddingTop: 60,
        textAlign: "center"
    }
})
 
export default Dash;