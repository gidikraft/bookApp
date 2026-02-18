import { Box, PrimaryButton, PrimaryInput, Text } from 'components';
import { PageWrapper } from 'components/layouts';
import { useAppDispatch } from 'hooks/redux';
import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { login } from 'store/reducers/authSlice';

const Login = () => {
	const dispatch = useAppDispatch();

	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const loginHandler = () => {
		dispatch(login());
	};

	return (
		<PageWrapper mode='view'>
			<Box flex={1}>
				<KeyboardAwareScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ flexGrow: 1 }}
					keyboardDismissMode='interactive'
					enableOnAndroid
				>
					<Text variant='bold24' mt='xxl'>
						Login
					</Text>

					<Box mt='lg'>
						<PrimaryInput
							name='email'
							placeholder='Email'
							autoComplete='email'
							control={control}
							inputMode='email'
							label='Email'
							rules={{
								required: 'Email is required',
								maxLength: {
									value: 100,
									message: 'Maximum of 100 characters',
								},
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: 'Please enter a valid email',
								},
							}}
							errorMessage={errors.email?.message}
						/>
					</Box>

					<Box mt='md'>
						<PrimaryInput
							name='password'
							placeholder='Enter password'
							control={control}
							secureTextEntry
							label='Password'
							submitBehavior='blurAndSubmit'
							rules={{
								required: 'Password is required',
								maxLength: {
									value: 100,
									message: 'Maximum of 100 characters',
								},
								minLength: {
									value: 6,
									message: 'Password must be 6 or more',
								},
								pattern: {
									value: /^[a-zA-Z0-9]*$/,
									message: 'Please enter a valid password',
								},
							}}
							errorMessage={errors.password?.message}
						/>
					</Box>

					<PrimaryButton label='Submit' onPress={handleSubmit(loginHandler)} />
				</KeyboardAwareScrollView>
			</Box>
		</PageWrapper>
	);
};

export default Login;
