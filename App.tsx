import { ThemeProvider } from '@shopify/restyle';
import RootNavigation from 'navigation';
import { StrictMode, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from 'store/store';
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
		<StrictMode>
			<Provider store={store}>
				<ThemeProvider theme={darkMode ? darkTheme : theme}>
					<SafeAreaProvider>
						<StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
						<RootNavigation />
					</SafeAreaProvider>
				</ThemeProvider>
			</Provider>
		</StrictMode>
	);
};

export default App;
