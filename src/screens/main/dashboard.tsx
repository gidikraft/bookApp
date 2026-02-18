import Button from 'components/Button';
import { PageWrapper } from 'components/layouts';
import { RootTabScreenProps } from 'navigation/types';
import React from 'react';
import { Text } from 'react-native';

const Dashboard = ({ navigation }: RootTabScreenProps<'HomeScreen'>) => {
	const openModal = () => {
		navigation.navigate('AppModal');
	};

	return (
		<PageWrapper mode='view'>
			<Button label='Open' onPress={openModal} />
			<Text>Dashboard</Text>
		</PageWrapper>
	);
};

export default Dashboard;
