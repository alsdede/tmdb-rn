import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { getImage } from '../services/api';

const ImageMovie = ({ movieId, movie }) => {
    return (
        <Image
            style={styles.imagePoster}
            source={{
                uri: getImage(movie.poster_path, 342),
            }}
        />
    );
};

const styles = StyleSheet.create({
    imagePoster: {
        height: 180,
        width: 130,
        borderRadius: 4,
    },
});
export default ImageMovie;
