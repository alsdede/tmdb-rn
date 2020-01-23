import { useEffect, useState } from 'react';
import api from '../services/api';
import { API_KEY } from '../constants/index';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);

    const searchApi = async searchQuery => {
        try {
            const response = await api.get(
                `/search/movie?api_key=${API_KEY}&query=${searchQuery}`
            );
            setResults(response.data.results);
        } catch (err) {
            setErrorMessage('Something Wrongs');
        }
    };
    useEffect(() => {
        searchApi('avenger');
    }, []);
    return [searchApi, results, errorMessage];
};
