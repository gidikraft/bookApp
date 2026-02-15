import { View } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import Icon from 'components/Icons';
import { hapticFeedback } from 'utils/hapticFeedback';

const MyTabBar = ({ state, descriptors, navigation }) => {
	const { colors } = useTheme();
	const { buildHref } = useLinkBuilder();

	return (
		<View style={{ flexDirection: 'row', backgroundColor: colors.card, paddingVertical: 12 }}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					hapticFeedback();
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				const getIconName = (focused: boolean) => {
					if (route.name === 'HomeScreen' && focused) {
						return 'home-active';
					} else if (route.name === 'HomeScreen' && !focused) {
						return 'home-inactive';
					} else if (route.name === 'ProfileScreen' && focused) {
						return 'user-active';
					} else if (route.name === 'ProfileScreen' && !focused) {
						return 'user-inactive';
					}
					return 'phone';
				};

				return (
					<PlatformPressable
						key={route.key}
						href={buildHref(route.name, route.params)}
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarButtonTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
					>
						<Icon name={getIconName(isFocused)} size={16} />
						<Text style={{ color: isFocused ? colors.primary : colors.text }}>{label}</Text>
					</PlatformPressable>
				);
			})}
		</View>
	);
};

export default MyTabBar;
