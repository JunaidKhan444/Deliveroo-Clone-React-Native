/**
 * Deliveroo-Clone
 *
 * @author   Junaid Khan
 *
 */

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Setting from './src/screens/Setting';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                <Stack.Screen name="Settings" component={Setting} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
