import { useEffect, useState } from 'react';
import api from '../services/api';
import { API_KEY } from '../constants/index';

export default () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState([]);

    const searchShowList = async path => {
        try {
            const response = await api.get(`/movie/${path}?api_key=${API_KEY}`);
            setResults(response.data.results);
            setLoading(false);
        } catch (err) {
            setErrorMessage('Something Wrongs');
            setLoading(false);
        }
    };
    useEffect(() => {
        searchShowList('popular');
    }, []);
    return [loading, results, errorMessage, searchShowList];
};
