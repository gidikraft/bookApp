import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import { TEvent } from "@/types/";

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace ReactNavigation {
		type RootParamList = RootStackParamList;
	}
}

export type RootStackParamList = {
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	LoginScreen: undefined;
	SignupScreen: undefined;
	AppModal: undefined;
	// SubscriptionScreen: { eventItem: TEvent } | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
	RootStackParamList,
	Screen
>;

export type RootTabParamList = {
	HomeScreen: undefined;
	EventsScreen: undefined;
	ProfileScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
	BottomTabScreenProps<RootTabParamList, Screen>,
	NativeStackScreenProps<RootStackParamList>
>;
