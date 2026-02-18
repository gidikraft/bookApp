import { PrimaryButton, Text } from 'components';
import { PageWrapper } from 'components/layouts';
import { useAppDispatch } from 'hooks/redux';
import React from 'react';
import { logout } from 'store/reducers/authSlice';

const Profile = () => {
	const dispatch = useAppDispatch();

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<PageWrapper mode='view'>
			<Text variant='bold18'>Profile</Text>
			<PrimaryButton label='Logout' onPress={logoutHandler} />
		</PageWrapper>
	);
};

export default Profile;
