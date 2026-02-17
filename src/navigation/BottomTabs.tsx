import { createBottomTabNavigator, TransitionSpecs } from '@react-navigation/bottom-tabs';
import MyTabBar from 'components/layouts/BottomTab';
import { DashboardScreen, ProfileScreen } from 'screens/main';
import { RootTabParamList } from './types';

/**
 * Bottom Tab.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	const { Screen, Navigator } = BottomTab;

	return (
		<Navigator
			initialRouteName='HomeScreen'
			tabBar={(props) => <MyTabBar {...props} />}
			screenOptions={{
				tabBarLabelStyle: {
					width: '100%',
					backgroundColor: 'white',
					// fontSize: 12,
				},
				transitionSpec: TransitionSpecs.ShiftSpec,
				sceneStyleInterpolator: ({ current }) => ({
					sceneStyle: {
						opacity: current.progress.interpolate({
							inputRange: [-1, 0, 1],
							outputRange: [0, 1, 0],
						}),
					},
				}),
			}}
		>
			<Screen
				name='HomeScreen'
				component={DashboardScreen}
				options={{
					headerShown: false,
					title: 'Home',
				}}
			/>

			<Screen
				name='ProfileScreen'
				component={ProfileScreen}
				options={{
					headerShown: false,
					title: 'Settings',
				}}
			/>
		</Navigator>
	);
}

export default BottomTabNavigator;
