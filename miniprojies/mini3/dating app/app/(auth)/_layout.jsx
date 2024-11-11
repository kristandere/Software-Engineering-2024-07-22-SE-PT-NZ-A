import { View, Text } from 'react-native'
import {Stack} from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import * as Location from 'expo-location';
import react, { useEffect, useState } from 'react';

const AuthLayout = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  return (
    
    <>
      <Stack>
        <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false
        }}
        />
                <Stack.Screen
        name="register-business"
        options={{
          headerShown: false
        }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622"
      style="light" />
    </>
  )
}

export default AuthLayout