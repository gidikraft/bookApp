import { ThemeProvider } from '@shopify/restyle';
import RootNavigation from 'navigation';
import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme, { darkTheme } from 'theme';

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		doNothing();
	}, []);

	const doNothing = () => {
		setDarkMode(false);
	};

	return (
		<ThemeProvider theme={darkMode ? darkTheme : theme}>
			<SafeAreaProvider>
				<StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
				<RootNavigation />
			</SafeAreaProvider>
		</ThemeProvider>
	);
};

export default App;
