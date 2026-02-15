import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import homeActive from 'assets/svg/home_tab.svg';
import homeInactive from 'assets/svg/home_tab_inactive.svg';
import userActive from 'assets/svg/user.svg';
import userInctive from 'assets/svg/user_inactive.svg';
import phone from 'assets/svg/phone.svg';

type IconFunction = React.FC<SvgProps>;

export const ICONS = {
	'home-active': homeActive,
	'home-inactive': homeInactive,
	phone,
	'user-active': userActive,
	'user-inactive': userInctive,
};

export type IconName = keyof typeof ICONS;
export type IconProps = SvgProps & {
	name: IconName;
	size?: number;
	style?: StyleProp<ViewStyle>;
	stroke?: string;
	outerStroke?: string;
};

/**
 * Custom Icon component based on design systems used in the figma
 */
function Icon({ name, size = 24, style, ...props }: IconProps) {
	const IconImpl: IconFunction = ICONS[name as IconName];
	return IconImpl ? <IconImpl height={size} style={style} width={size} {...props} /> : null;
}

export default Icon;
