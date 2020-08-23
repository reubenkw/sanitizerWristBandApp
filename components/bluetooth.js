import React, { useEffect } from 'react';
import { BleManager } from 'react-native-ble-plx';


const Bluetooth = () => {
    const manager = new BleManager();

    useEffect(() => {
        const subscription = manager.onStateChange((state) => {
            if (state === 'PoweredOn') {
                this.scanAndConnect();
                subscription.remove();
            }
        }, true);
    })

    scanAndConnect() {
        manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.log("error")
                return
            }
    
            // Check if it is a device you are looking for based on advertisement data
            // or other criteria.
            if (device.name === 'ESP32') {
                
                // Stop scanning as it's not necessary if you are scanning for one device.
                this.manager.stopDeviceScan();
    
                // Proceed with connection.
            }
        });
    }

    device.connect()
        .then((device) => {
            console.timeLog("discovering services nad notifications")
            return device.discoverAllServicesAndCharacteristics()
        })
        .then((device) => {
            console.log("Setting notifications")
            return this.setupNotifications(device)

        // Do work on device with services and characteristics
        })
        .catch((error) => {
            console.log("errpr")
        });

    return (  );
}
 
export default Bluetooth;