import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import theme, { darkTheme } from 'theme';
import RootNavigation from 'navigation';

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
				<RootNavigation />
			</SafeAreaProvider>
		</ThemeProvider>
	);
};

export default App;
