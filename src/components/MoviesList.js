import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import MoviesDetails from './MoviesDetails';

const MoviesList = ({ movies, navigation }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [movieId, setMovieId] = useState(null);

    if (!movies.length) {
        return null;
    }

    handleVisibleModal = () => {
        setIsVisible(true);
    };
    handleCloseModal = () => {
        setIsVisible(false);
    };

    handleMovie = id => {
        setMovieId(id);
        handleVisibleModal();
    };

    return (
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={movies}
                keyExtractor={movie => movie.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('MovieShow', {
                                        id: item.id,
                                    })
                                }
                            >
                                <MoviesDetails
                                    style={styles.moviesDetails}
                                    movies={item}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },

    // titleStyle: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     marginLeft: 10,
    //     marginBottom: 5,
    // },
});

export default withNavigation(MoviesList);
