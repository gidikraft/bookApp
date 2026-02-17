import { Entypo } from '@react-native-vector-icons/entypo';
import React from 'react';
import theme from 'theme';

const {
	spacing: { sm, md, lg, xl },
} = theme;

type IconSizeProps = {
	iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
	size: IconSizeProps['iconSizes'];
	name: string;
	color: string;
}

export const IconSizes = {
	small: sm,
	medium: md,
	large: lg,
	extraLarge: xl,
};

const VIcons = ({ size, name, color }: IconProps) => {
	return <Entypo name={name} size={IconSizes[size]} color={color} />;
};

export default VIcons;
