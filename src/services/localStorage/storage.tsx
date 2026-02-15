import { createAsyncStorage, AsyncStorageError } from '@react-native-async-storage/async-storage';

const storage = createAsyncStorage('engardDB');

export const saveToLS = async (key: string, value: string) => {
	try {
		await storage.setItem(key, JSON.stringify(value));
	} catch (e) {
		if (e instanceof AsyncStorageError) {
			switch (e.type) {
				case AsyncStorageError.Type.SqliteStorageError:
					console.error('SQLite failure:', e.message);
					break;
				case AsyncStorageError.Type.WebStorageError:
					console.error('IndexedDB failure:', e.message);
					break;
				default:
					console.error('AsyncStorage error:', e.message);
			}
		} else {
			console.error('Unexpected error:', e);
		}
	}
};

export const getFromLS = async (key: string) => {
	try {
		const data = await storage.getItem(key);
		if (!data) return data;

		return JSON.parse(data);
	} catch (e) {
		if (e instanceof AsyncStorageError) {
			switch (e.type) {
				case AsyncStorageError.Type.SqliteStorageError:
					console.error('SQLite failure:', e.message);
					break;
				case AsyncStorageError.Type.WebStorageError:
					console.error('IndexedDB failure:', e.message);
					break;
				default:
					console.error('AsyncStorage error:', e.message);
			}
		} else {
			console.error('Unexpected error:', e);
		}
	}
};

export const removeFromLS = async (key: string) => {
	await storage.removeItem(key);
};

export const clearLS = async () => {
	const asyncStorageKeys = await storage.getAllKeys();

	if (asyncStorageKeys.length > 0) {
		await storage.clear();
	}
};
