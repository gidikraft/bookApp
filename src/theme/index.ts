import { createTheme, useTheme as useRestyleTheme } from '@shopify/restyle';
import { wp } from './layout';

export const palette = {
	background: '#f0f9fc',
	blue: '#3878B8',
	border: '#D0D0D0',
	error: '#e22525',
	grey: '#C1C7CF',
	primary: '#0444bb',
	primary10: '#4f72b3',
	secondary: '#30d10f',
	secondary10: '#45bd2d',
	success: '#97E225',
	transparent: 'transparent',

	purpleLight: '#8C6FF7',
	purplePrimary: '#5A31F4',
	purpleDark: '#3F22AB',

	greenLight: '#56DCBA',
	greenPrimary: '#0ECD9D',
	greenDark: '#0A906E',

	black: '#0B0B0B',
	white: '#ffffff',
};

const theme = createTheme({
	breakpoints: {
		phone: 0,
		longPhone: {
			width: 0,
			height: 812,
		},
		tablet: 768,
		largeTablet: 1024,
	},
	colors: {
		...palette,
		blockBg: palette.grey,
		buttonPry: palette.primary,
		disabled: palette.primary10,
		mainBackground: palette.white,
		mainForeground: palette.blue,
		secondaryCardBackground: palette.secondary,
		secondaryCardText: palette.white,
		textColor: palette.black,
	},
	spacing: {
		Ml: wp(60), // mega large
		lg: wp(24), // large
		md: wp(16), // medium
		sl: wp(20), // semi large
		sm: wp(12), // semi medium
		sms: wp(6), // semi small
		sml: wp(8), // small
		ssm: wp(10), // semi small medium
		xl: wp(32), // extra large
		xs: wp(4), // extra small
		xxl: wp(40), // extra extra large
		xxs: wp(2), // extra extra small
	},
	textVariants: {
		body: {
			color: 'textColorTint',
			fontFamily: 'Poppins-Regular',
			fontSize: 14,
			fontWeight: '400',
			lineHeight: 20,
		},
		boldBody: {
			color: 'textColorTint',
			fontFamily: 'Poppins-Bold',
			fontSize: 14,
			fontWeight: '700',
			lineHeight: 20,
		},
		button: {
			color: 'textColor',
			fontFamily: 'Poppins-Medium',
			fontSize: 14,
			fontWeight: '600',
			lineHeight: 22,
		},
		defaults: {},
		header: {
			color: 'textColor',
			fontFamily: 'Poppins-ExtraBold',
			fontSize: 24,
			fontWeight: '800',
			lineHeight: 36,
		},
		bold14: {
			color: 'textColor',
			fontFamily: 'Poppins-Bold',
			fontSize: 14,
			fontWeight: '700',
			lineHeight: 16.94,
		},
		bold16: {
			color: 'textColor',
			fontFamily: 'Poppins-Bold',
			fontSize: 16,
			fontWeight: '700',
			lineHeight: 24,
		},
		bold18: {
			color: 'textColor',
			fontFamily: 'Poppins-Bold',
			fontSize: 18,
			fontWeight: '700',
			lineHeight: 24,
		},
		bold20: {
			color: 'textColor',
			fontFamily: 'Poppins-Bold',
			fontSize: 20,
			fontWeight: '700',
			lineHeight: 30,
		},
		bold22: {
			color: 'textColor',
			fontFamily: 'Poppins-Bold',
			fontSize: 22,
			fontWeight: '700',
			lineHeight: 30,
		},
		bold24: {
			color: 'textColor',
			fontFamily: 'Poppins-Bold',
			fontSize: 24,
			fontWeight: '700',
			lineHeight: 32,
		},
		italic12: {
			color: 'textColor',
			fontFamily: 'Poppins-Italic',
			fontSize: 12,
			fontWeight: '400',
			lineHeight: 20,
		},
		italic14: {
			color: 'textColor',
			fontFamily: 'Poppins-Italic',
			fontSize: 14,
			fontWeight: '400',
			lineHeight: 20,
		},
		italic16: {
			color: 'textColor',
			fontFamily: 'Poppins-Italic',
			fontSize: 16,
			fontWeight: '400',
			lineHeight: 24,
		},
		light12: {
			color: 'textColor',
			fontFamily: 'Poppins-Light',
			fontSize: 12,
			fontWeight: '300',
			lineHeight: 20,
		},
		light14: {
			color: 'textColor',
			fontFamily: 'Poppins-Light',
			fontSize: 14,
			fontWeight: '300',
			lineHeight: 20,
		},
		light16: {
			color: 'textColor',
			fontFamily: 'Poppins-Light',
			fontSize: 16,
			fontWeight: '300',
			lineHeight: 24,
		},
		medium10: {
			color: 'textColor',
			fontFamily: 'Poppins-Medium',
			fontSize: 10,
			fontWeight: '600',
			lineHeight: 20,
		},
		medium12: {
			color: 'textColor',
			fontFamily: 'Poppins-Medium',
			fontSize: 12,
			fontWeight: '600',
			lineHeight: 20,
		},
		medium14: {
			color: 'textColor',
			fontFamily: 'Poppins-Medium',
			fontSize: 14,
			fontWeight: '500',
			lineHeight: 20,
		},
		medium16: {
			color: 'textColor',
			fontFamily: 'Poppins-Medium',
			fontSize: 16,
			fontWeight: '600',
			lineHeight: 24,
		},
		medium18: {
			color: 'textColor',
			fontFamily: 'Poppins-Medium',
			fontSize: 18,
			fontWeight: '600',
			lineHeight: 24,
		},
		medium20: {
			color: 'textColor',
			fontFamily: 'Poppins-Medium',
			fontSize: 20,
			fontWeight: '600',
			lineHeight: 28,
		},
		medium24: {
			color: 'textColor',
			fontFamily: 'Poppins-Medium',
			fontSize: 24,
			fontWeight: '600',
			lineHeight: 32,
		},
		regular10: {
			color: 'textColor',
			fontFamily: 'Poppins-Regular',
			fontSize: 10,
			fontWeight: '400',
			lineHeight: 14,
		},
		regular12: {
			color: 'textColor',
			fontFamily: 'Poppins-Regular',
			fontSize: 12,
			fontWeight: '400',
			lineHeight: 16,
		},
		regular14: {
			color: 'textColor',
			fontFamily: 'Poppins-Regular',
			fontSize: 14,
			fontWeight: '400',
			lineHeight: 20,
		},
		regular16: {
			color: 'textColor',
			fontFamily: 'Poppins-Regular',
			fontSize: 16,
			fontWeight: '400',
			lineHeight: 24,
		},
		regular18: {
			color: 'textColor',
			fontFamily: 'Poppins-Regular',
			fontSize: 18,
			fontWeight: '400',
			lineHeight: 24,
		},
		regular20: {
			color: 'textColor',
			fontFamily: 'Poppins-Regular',
			fontSize: 20,
			fontWeight: '400',
			lineHeight: 28,
		},
		regular24: {
			color: 'textColor',
			fontFamily: 'Poppins-Regular',
			fontSize: 24,
			fontWeight: '400',
			lineHeight: 32,
		},
		subHeading: {
			color: 'textColor',
			fontFamily: 'Poppins-SemiBold',
			fontSize: 18,
			fontWeight: '600',
			lineHeight: 24,
		},
	},
});

export const darkTheme: Theme = {
	...theme,
	colors: {
		...theme.colors,
		mainBackground: palette.black,
		mainForeground: palette.white,

		secondaryCardBackground: palette.secondary,
		secondaryCardText: palette.white,
		textColor: palette.white,
	},
};

export type Theme = typeof theme;

export const useTheme = () => useRestyleTheme<Theme>();

export type PaletteType = keyof typeof palette;

export default theme;
