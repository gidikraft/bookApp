import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './AppNavigation';
import { LoginScreen } from 'screens/auth';
import BottomTabNavigator from './BottomTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Root' component={BottomTabNavigator} />
				<Stack.Screen name='LoginScreen' component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigation;
