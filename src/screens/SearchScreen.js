import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import useMovies from '../hooks/useMovies';
import MoviesList from '../components/MoviesList';

const styles = StyleSheet.create({
    container: {
        color: '#000',
        flex: 1,
        backgroundColor: '#000',
    },
    titleStyle: {
        marginLeft: 10,
        marginBottom: 5,
    },
});

const SearchScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [searchApi, movies, errorMessage] = useMovies();
    return (
        <View style={styles.container}>
            <SearchBar
                term={query}
                onTermChange={setQuery}
                onTermSubmit={() => searchApi(query)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <MoviesList movies={movies} />

            <ScrollView />
        </View>
    );
};

export default SearchScreen;
