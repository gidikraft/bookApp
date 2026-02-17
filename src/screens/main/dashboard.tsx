import Button from 'components/Button';
import { PageWrapper } from 'components/layouts';
import { RootTabScreenProps } from 'navigation/types';
import React from 'react';
import { Alert, Text } from 'react-native';
import Keychain from 'react-native-keychain';

const Dashboard = ({ navigation }: RootTabScreenProps<'HomeScreen'>) => {
	const checkStorgae = async () => {
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
		openModal();
	};

	const openModal = () => {
		navigation.navigate('AppModal');
	};

	return (
		<PageWrapper mode='view'>
			<Button label='Open' onPress={checkStorgae} />
			<Text>Dashboard</Text>
		</PageWrapper>
	);
};

export default Dashboard;
