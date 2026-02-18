import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Text from 'components/Text';
import { useAppSelector } from 'hooks/redux';
import React from 'react';
import { LoginScreen } from 'screens/auth';
import { InfoScreen } from 'screens/modals';
import { navigationRef } from './AppNavigation';
import BottomTabNavigator from './BottomTabs';
import { RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
	const { Navigator, Screen, Group } = RootStack;
	const { isAuthenticated } = useAppSelector((state) => state.auth);

	return (
		<NavigationContainer ref={navigationRef}>
			<Navigator screenOptions={{ headerShown: false }}>
				{!isAuthenticated ? (
					<Screen name='LoginScreen' component={LoginScreen} />
				) : (
					<Screen name='Root' component={BottomTabNavigator} />
				)}
				<Group
					navigationKey='Modal'
					screenOptions={{
						presentation: 'modal',
					}}
				>
					<Screen name='AppModal' component={InfoScreen} />
				</Group>
			</Navigator>

			<Text variant='italic12' color='black' textAlign='center' marginTop='xs'>
				Made with ❤️ by Seun Fagade
			</Text>
		</NavigationContainer>
	);
};

export default RootNavigation;
