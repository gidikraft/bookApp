import { trigger } from 'react-native-haptic-feedback';

const options = {
	enableVibrateFallback: true,
	ignoreAndroidSystemSettings: false,
};

/**
 * trigger() method takes two arguments - the type of haptic feedback and the optional configuration object. The type can be one of the following:
 * - impactLight
 * - impactMedium
 * - impactHeavy
 * - notificationSuccess
 * - notificationWarning
 * - notificationError
 * - selection
 */
export const hapticFeedback = () => trigger('impactLight', options);
