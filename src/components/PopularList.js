import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import api from '../services/api';
import { API_KEY } from '../constants/index';
// import useShow from '../hooks/useShow';
import PopularDetails from './PopularDetails';

const PopularList = ({ title }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadShowList() {
            const response = await api.get(
                `/movie/popular?api_key=9dbaa60a5bc200c71275470164b49b92&language=en-US&page=1`
            );
            setMovies(response.data.results);
            // console.log(response.data.results);
        }
        loadShowList();
    }, []);

    return (
        <View>
            <Text>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={movies}
                keyExtractor={movie => movie.id.toString()}
                renderItem={({ item }) => {
                    return <PopularDetails movie={item} />;
                }}
            />
        </View>
    );
};

export default PopularList;
