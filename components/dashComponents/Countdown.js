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
    const [sprays, setSprays] = useState(29)

    const [dashArray, setDash] = useState( "0 283")

  
    const setCircleDashray = () => {
        const circleDashray = parseInt(sprays / 30 * 283)
        circleDashray.toString()
        console.log(circleDashray + " " + "283")
        return circleDashray + " " + "283"
    }
    return ( 
        <View>
        <Svg height="300" width="400" viewBox="0 0 100 100" class = "path">
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
    class = "path"
    stroke="#FFD503"
    strokeWidth = "5"
    strokeLinecap = "round"
    strokeDasharray= "0 283"
    

  />
        </Svg>


        
        {/* <Svg class="baseTimer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" transform = "scaleX(-1)">
            <G class="baseTimerCircle" fill = "none" stroke = "none">
            <Circle class="baseTimerPathElapsed" cx="50" cy="50" r="45" StrokeWidth = "5" stroke = "#0C1B37"/>
            <Path
                id="baseTimerPathRemaining"
                stroke-dasharray= {setCircleDashray()}
                d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
                // strokeWidth = "7"
                // strokeLinecap = "round"
                // color = "#FFD503"
                // transform = "rotate(90deg)"
                // transformOrigin = "center"
                // transition = "1s linear all"
            ></Path>
            </G>
        </Svg> */}

      <View id="base-timer-label" className="base-timer__label">
        <Text>{sprays}</Text>
      </View>
      </View>
     );
}

const styles = StyleSheet.create({
    
    baseTimer: {
        height: 300,
        width: 300,
    },
    
    path : {
        transform: [{ rotate: '90deg'}]
    },
    
    baseTimerLabel: {
        position: "absolute",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 300,
        
    }

    })
    
export default Countdown;