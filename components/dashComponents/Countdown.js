import React, { useState } from 'react'
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

  import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';

const Countdown = () => {
    const [sprays, setSprays] = useState(9)

    const [dashArray, setDash] = useState( "0 283")

  
    const setCircleDashray = () => {
        const circleDashray = parseInt(sprays / 30 * 283)
        circleDashray.toString()
        console.log(circleDashray + " " + "283")
        return circleDashray + " " + "283"
    }

    return ( 
        <View>
        <Svg height="300" width="400" viewBox="0 0 100 100" style = {styles.path}>
        <G fill = "none" stroke = "none">
            <Circle cx="50" cy="50" r="45" stroke="#0C1B37" strokeWidth = "5"/>
        </G>
        <Path
    d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
    fill="none"
    stroke="#FFD503"
    strokeWidth = "5"
    strokeLinecap = "round"
    strokeDasharray= {setCircleDashray()}

  />
</Svg>

      <View style = {styles.baseTimerLabel}>
        <Text style = {styles.number}>{sprays} </Text>
        <Text style = {styles.sprays}>Sprays </Text>
      </View>
      </View>
     );
}

const styles = StyleSheet.create({
    
    
    path: {
        transform: [{ rotate: '90deg'}, {scaleY: -1}],
        
    },
    
    baseTimerLabel: {
        position: "absolute",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 400,
        height: 300,
        
    },

    number : {
        position: "absolute",
        fontFamily: "Poppins-Bold",
        color: "white",
        fontSize: 50,

    },

    sprays: {
        position: "absolute",
        fontFamily: "Poppins-Bold",
        color: "white",
        paddingTop: 60
    }
    })
    
export default Countdown;