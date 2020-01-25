import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import nologo from '../../assets/image-not-found.png';
import { getImage } from '../services/api';
import { convertDate } from '../utils/date';

// import { getW92ImageUrl } from '../constants/index';

const MoviesDetails = ({ movies }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                {movies.poster_path !== (null || '') ? (
                    <Image
                        source={{
                            uri: getImage(movies.poster_path, 342),
                        }}
                        style={styles.imageMovies}
                    />
                ) : (
                        <Image source={nologo} />
                    )}
            </View>
            <View style={styles.containeDetail}>
                <Text style={styles.moviesTitle}>{movies.title}</Text>
                <Text lineBreakMode>{convertDate(movies.release_date)}</Text>
                <View style={styles.containerVoteAverage}>
                    <MaterialIcons name="star" size={35} color="gold" />
                    <Text style={styles.voteAverage}>
                        {movies.vote_average}
                    </Text>
                </View>
                <View style={styles.containerVote}>
                    <MaterialIcons name="people" size={20} color="black" />
                    <Text>{movies.vote_count}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,

        backgroundColor: 'rgba(255,255,255,0.09)',
    },
    containerImage: {},
    containerVoteAverage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerVote: {
        flexDirection: 'row',
        marginLeft: 10,
    },
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
        fontSize: 18,
    },
    voteAverage: {
        marginLeft: 5,
        fontSize: 25,
    },
});

export default MoviesDetails;
