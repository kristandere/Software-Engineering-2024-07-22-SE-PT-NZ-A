import * as Location from 'expo-location';

async function getLocationPermission() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission to access location was denied');
    return;
  }
  // Location permission granted
}

async function getUserLocation() {
    const { coords } = await Location.getCurrentPositionAsync({});
    return coords;
  }