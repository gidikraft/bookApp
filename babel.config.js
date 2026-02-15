module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
				alias: {
					'@/i18n/': './src/i18n/',
					'@/assets': './src/assets',
					'@/components/': './src/components/',
					'@/hooks': './src/hooks',
					'@/navigation': './src/navigation',
					'@/network/': './src/network',
					'@/screens': './src/screens',
					'@/services': './src/services',
					'@/store': './src/store',
					'@/theme': './src/theme',
					'@/types/': './src/types/',
					'@/utils/': './src/utils/',
				},
			},
		],
		'react-native-worklets/plugin',
	],
};
