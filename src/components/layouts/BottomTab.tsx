import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import Text from 'components/Text';
import VIcons from 'components/VIcons';
import { StyleSheet, View } from 'react-native';
import theme from 'theme';
import { hapticFeedback } from 'utils/hapticFeedback';

const MyTabBar = ({ state, descriptors, navigation }) => {
	const { colors } = useTheme();
	const { buildHref } = useLinkBuilder();

	return (
		<View style={styles.tabBar}>
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

				const getIconName = () => {
					if (route.name === 'HomeScreen') {
						return 'home';
					} else if (route.name === 'ProfileScreen') {
						return 'tools';
					}
					return 'archive';
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
						style={styles.tabButton}
					>
						<VIcons
							name={getIconName()}
							size={'medium'}
							color={isFocused ? colors.primary : colors.text}
						/>
						<Text variant='medium12' style={{ color: isFocused ? colors.primary : colors.text }}>
							{label}
						</Text>
					</PlatformPressable>
				);
			})}
		</View>
	);
};

export default MyTabBar;

const styles = StyleSheet.create({
	tabBar: {
		flexDirection: 'row',
		backgroundColor: theme.colors.white,
		paddingVertical: 12,
		// marginHorizontal: 24,
		// borderRadius: 24
	},
	tabButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
