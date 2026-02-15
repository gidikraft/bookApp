import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from './types';
import MyTabBar from 'components/layouts/BottomTab';
import { DashboardScreen, ProfileScreen } from 'screens/main';

/**
 * Bottom Tab.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	return (
		<BottomTab.Navigator
			initialRouteName='HomeScreen'
			tabBar={(props) => <MyTabBar {...props} />}
			screenOptions={{
				tabBarLabelStyle: {
					width: '100%',
					fontSize: 12,
				},
			}}
		>
			<BottomTab.Screen
				name='HomeScreen'
				component={DashboardScreen}
				options={{
					headerShown: false,
					title: 'Home',
				}}
			/>

			<BottomTab.Screen
				name='ProfileScreen'
				component={ProfileScreen}
				options={{
					headerShown: false,
					title: 'Settings',
				}}
			/>
		</BottomTab.Navigator>
	);
}

export default BottomTabNavigator;
