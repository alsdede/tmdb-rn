import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import HomeShowList from './HomeShowList';
import api from '../services/api';
import { API_KEY } from '../constants/index';
// import useShow from '../hooks/useShow';

const TopRatedList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadShowList() {
            const response = await api.get(
                `/movie/popular?api_key=9dbaa60a5bc200c71275470164b49b92&language=en-US&page=1`
            );
            setMovies(response.data.results);
            console.log(response.data.results);
        }
        loadShowList();
    }, []);

    return (
        <View>
            <HomeShowList title="Popular" />
            <HomeShowList title="Top Rated" />
        </View>
    );
};

export default TopRatedList;
