import { Alert } from 'react-native';
import Keychain from 'react-native-keychain';

export function fetchCount(currentCount = 0, amount = 1) {
	return new Promise<{ data: number }>((resolve) =>
		setTimeout(() => resolve({ data: currentCount + amount }), 1000),
	);
}

export const checkStorgae = async () => {
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
	const username = 'Akshay';

	await Keychain.setGenericPassword(username, token, { service: 'service_key' });

	try {
		// Retrieve the credentials
		const credentials = await Keychain.getGenericPassword({ service: 'service_key' });
		if (credentials) {
			Alert.alert('Credentials successfully loaded for user ' + credentials.username);
		} else {
			Alert.alert('No credentials stored');
		}
	} catch (error) {
		console.error('Failed to access Keychain', error);
	}

	// Reset the stored credentials
	await Keychain.resetGenericPassword({ service: 'service_key' });
};
