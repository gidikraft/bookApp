import React, { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import Box, { BoxProps } from './Box';
import Pressable from './Pressable';
import Text from './Text';

type Props = {
	onPress: () => void;
	isLoading?: boolean;
	isDisabled?: boolean;
	label: string;
	loadingText?: string;
	icon?: ReactNode;
	animate?: 'no-feedback' | 'opacity' | 'scale';
} & BoxProps;

const Button = ({
	onPress,
	isLoading,
	isDisabled,
	loadingText,
	label,
	icon,
	animate = 'opacity',
}: Props) => {
	return (
		<Pressable
			onPress={onPress}
			disabled={isLoading || isDisabled}
			type={isLoading || isDisabled ? 'no-feedback' : animate}
		>
			<Box
				alignItems='center'
				borderRadius={8}
				flexDirection='row'
				justifyContent='center'
				width='100%'
				height={45}
				backgroundColor={isLoading && isDisabled ? 'disabled' : 'buttonPry'}
				opacity={isLoading || isDisabled ? 0.6 : 1}
			>
				{icon}
				<Text
					color={isLoading || isDisabled ? 'black' : 'white'}
					variant='button'
					textAlign='center'
					style={{ marginLeft: icon ? 8 : 0 }}
					minimumFontScale={1}
					maxFontSizeMultiplier={1}
				>
					{isLoading && loadingText ? loadingText : label}
				</Text>
				{isLoading && <ActivityIndicator color={'#000'} />}
			</Box>
		</Pressable>
	);
};

export default Button;
