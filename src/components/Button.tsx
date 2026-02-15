import React, { ReactNode } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Pressable from './Pressable';

type Props = {
	onPress: () => void;
	isLoading?: boolean;
	isDisabled?: boolean;
	label: string;
	loadingText?: string;
	icon?: ReactNode;
	animate?: 'no-feedback' | 'opacity' | 'scale';
} & React.ComponentProps<typeof View>;

const Button = ({
	onPress,
	isLoading,
	isDisabled,
	loadingText,
	label,
	icon,
	animate = 'opacity',
}: Props) => {
	const stateStyle = isLoading ? styles.loading : styles.normal;

	return (
		<Pressable
			onPress={onPress}
			disabled={isLoading || isDisabled}
			type={isLoading || isDisabled ? 'no-feedback' : animate}
		>
			<View style={[styles.wrapper, stateStyle, isDisabled && styles.disabled]}>
				{icon}
				<Text
					style={[styles.text, isLoading && styles.loading]}
					minimumFontScale={1}
					maxFontSizeMultiplier={1}
				>
					{isLoading && loadingText ? loadingText : label}
				</Text>
				{isLoading && <ActivityIndicator color={'#000'} />}
			</View>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	loading: {
		marginRight: 10,
		opacity: 0.6,
		backgroundColor: '#001D6E',
	},
	normal: {
		opacity: 1,
		backgroundColor: '#D1AE6C',
	},
	disabled: {
		opacity: 0.6,
		backgroundColor: '#001D6E',
	},
	text: {
		color: '#000',
		fontFamily: 'Roboto_700Bold',
		fontSize: 14,
		textAlign: 'center',
	},
	wrapper: {
		alignItems: 'center',
		borderRadius: 8,
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
		height: 45,
	},
});

export const buttonStyles = styles;
