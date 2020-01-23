import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import MoviesDetails from './MoviesDetails';

const MoviesList = ({ movies, navigation }) => {
    if (!movies.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={movies}
                keyExtractor={movie => movie.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('MoviesShow', {
                                    id: item.id,
                                })
                            }
                        >
                            <MoviesDetails
                                style={styles.moviesDetails}
                                movies={item}
                            />
                        </TouchableOpacity>
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
