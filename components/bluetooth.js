import React, { useEffect, useState } from 'react';
import { BleManager } from 'react-native-ble-plx';


const Bluetooth = () => {
    const manager = new BleManager();

    const [values, setValues] = useState({})

    useEffect(() => {
        const subscription = manager.onStateChange((state) => {
            if (state === 'PoweredOn') {
                scanAndConnect();
                subscription.remove();
            }
        }, true);
    })

    const scanAndConnect = () => {
        manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.log("error")
                return
            }
    
            // Check if it is a device you are looking for based on advertisement data
            // or other criteria.
            if (device.name === 'ESP32') {
                
                // Stop scanning as it's not necessary if you are scanning for one device.
                manager.stopDeviceScan();
    
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
            return setupNotifications(device)

        // Do work on device with services and characteristics
        })
        .catch((error) => {
            console.log("error")
        });

        const updateValue = (key, value) => {
            setValue({values: {...this.state.values, [key]: value}})
          }

        const setupNotifications = (device) => {
              const service =  "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
              const characteristicN = "beb5483e-36e1-4688-b7f5-ea07361b26a8"
        
              const characteristic = await device.writeCharacteristicWithResponseForService(
                service, characteristicW, "AQ==" /* 0x01 in hex */
              )
        
              device.monitorCharacteristicForService(service, characteristicN, (error, characteristic) => {
                if (error) {
                  console.log("error")
                  return
                }
                updateValue(characteristic.uuid, characteristic.value)
              })
          }

    return (
        <Text key={key}>
        {this.sensors[key] + ": " + (this.state.values[this.notifyUUID(key)] || "-")}
      </Text>
      );
}
 
export default Bluetooth;