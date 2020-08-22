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
            <Text style = {styles.heading}> STAY SAFE</Text>
            <Text style = {styles.name}> Let's fight Covid-19! </Text>
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
        paddingTop: 100,
        textAlign: "center",
        fontSize: 20,        
    },

    name: {
        color: "#FFD503",
        fontFamily: "Poppins-Medium",
        textAlign: "center",
        paddingBottom: 20,
        fontSize: 15,  

    }
})
 
export default Dash;