import { AsyncStorage } from '@react-native-community/async-storage';
import api from './api';
import { API_KEY } from '../constants/index';

export const getToken = () => {
    return async () => {
        try {
            const response = await api.get(
                `/authentication/token/new?api_key=${API_KEY}`
            );
            await AsyncStorage.setItem('token', response.data.request_token);
            console.log(response.data.request_token);
        } catch (err) {
            console.log('Auth error', err);
        }
    };
};
