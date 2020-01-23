import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import nologo from '../../assets/image-not-found.png';
import api from '../services/api';
// import { getW92ImageUrl } from '../constants/index';

const MoviesDetails = ({ movies }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                {movies.poster_path !== (null || '') ? (
                    <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w342/${movies.poster_path}`,
                        }}
                        style={styles.imageMovies}
                    />
                ) : (
                        <Image source={nologo} />
                    )}
            </View>
            <View style={styles.containeDetail}>
                <Text style={styles.moviesTitle}>{movies.title}</Text>
                <Text lineBreakMode>{movies.release_date}</Text>
                <Text>{movies.vote_average}</Text>
                <Text>{movies.vote_count}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        padding: 5,
        // backgroundColor: '#565656',
    },
    containerImage: {},
    containeDetail: {
        flex: 1,
        marginLeft: 5,
    },
    imageMovies: {
        height: 180,
        width: 130,
        justifyContent: 'flex-end',
        borderRadius: 2,
        marginBottom: 5,
        backgroundColor: 'grey',
    },
    detailMovie: {},
    moviesTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default MoviesDetails;
