import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MovieGenres = ({ details }) => {
    const convertGenres = genres => {
        if (genres) {
            return genres
                .map(g => g.name)
                .splice(0, 4)
                .reduce((acc, curr) => `${acc} · ${curr}`);
        }
        return null;
    };

    return (
        <View>
            <Text style={{ color: '#fff' }}>
                {convertGenres(details.genres)}
            </Text>
        </View>
    );
};

export default MovieGenres;
