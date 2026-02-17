import NetInfo, { addEventListener, NetInfoState } from '@react-native-community/netinfo';
import Box from 'components/Box';
import Text from 'components/Text';
import VIcons from 'components/VIcons';
import React, { ReactNode, useEffect, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
	children: ReactNode;
	style?: ViewStyle;
	mode?: 'safe' | 'view';
};

export const PageWrapper = ({ children, style, mode }: Props) => {
	const PADDING_TOP = useSafeAreaInsets().top;

	const useNetwork = (): void | boolean | null => {
		const [isInternetReachable, isInternetReachable_set] = useState<boolean | null>(null);

		useEffect(() => {
			const update = (state: NetInfoState) => {
				// ignore first initialisation on iOS where its null for a moment
				if (isInternetReachable === undefined && state.isInternetReachable === null) {
					return;
				}
				if (state.isInternetReachable !== isInternetReachable) {
					isInternetReachable_set(() => state.isInternetReachable);
				}
			};
			NetInfo.fetch().then(update);
			return addEventListener(update);
		}, [isInternetReachable]);

		return isInternetReachable;
	};

	const isInternetReachable = useNetwork();

	const renderNetworkInfo = () => {
		if (!isInternetReachable) {
			return (
				<Box
					flexDirection='row'
					justifyContent='center'
					alignItems='center'
					width='100%'
					height={42}
					bg='error'
				>
					<VIcons name='bar-graph' color='#fff' size={'medium'} />
					<Text variant='medium12' color='white' ml='sms'>
						No Internet Connection
					</Text>
				</Box>
			);
		}
		return null;
	};

	return (
		<>
			{mode !== 'view' ? (
				<SafeAreaView style={{ flex: 1 }}>
					{renderNetworkInfo()}
					<Box style={{ ...styles.container, paddingTop: PADDING_TOP, ...style }}>{children}</Box>
				</SafeAreaView>
			) : (
				<View style={{ flex: 1 }}>
					{renderNetworkInfo()}
					<Box style={{ ...styles.container, paddingTop: PADDING_TOP, ...style }}>{children}</Box>
				</View>
			)}
		</>
	);
};

const styles = {
	container: {
		paddingHorizontal: 16,
		backgroundColor: '#fff',
		flex: 1,
	},
};
